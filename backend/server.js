require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}));

app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ ok: true });
});

function isValidEmail(email) {
  return /^\S+@\S+\.\S+$/.test(String(email || "").trim());
}

app.get("/", (req, res) => {
  res.send({
    message: "Backend is up"
  });
});

app.post("/api/enquiry", (req, res) => {
  const { name, email, phone } = req.body;

  const cleanName = (name || "").trim();
  const cleanEmail = (email || "").trim();
  const cleanPhone = (phone || "").trim();

  const phoneDigits = cleanPhone.replace(/\D/g, "");

  console.log("POST /api/enquiry:", req.body);

  if (!cleanName || cleanName.length < 2) {
    return res.status(400).json({
      success: false,
      message: "Name is invalid"
    });
  }

  if (!cleanEmail || !isValidEmail(cleanEmail)) {
    return res.status(400).json({
      success: false,
      message: "Email is invalid"
    });
  }

  if (!cleanPhone || phoneDigits.length < 10) {
    return res.status(400).json({
      success: false,
      message: "Phone number is invalid"
    });
  }

  return res.json({
    success: true,
    message: "Enquiry submitted successfully"
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
});