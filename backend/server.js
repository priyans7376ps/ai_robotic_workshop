require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();


// ===============================
// CORS CONFIGURATION
// ===============================

const allowedOrigins = [
  "http://localhost:5173",
  "https://airoboticworkshop-idaju9u2n-priyans7376ps-projects.vercel.app",
  process.env.FRONTEND_URL
].filter(Boolean);


app.use(
  cors({
    origin: (origin, callback) => {

      // Allow Postman, mobile apps, server-to-server requests
      if (!origin) {
        return callback(null, true);
      }


      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }


      console.log("Blocked CORS origin:", origin);

      return callback(null, false);
    },

    credentials: true,

    methods: [
      "GET",
      "POST",
      "PUT",
      "DELETE",
      "OPTIONS"
    ],

    allowedHeaders: [
      "Content-Type",
      "Authorization"
    ]
  })
);


// Handle browser preflight requests
app.options("*", cors());


// ===============================
// MIDDLEWARE
// ===============================

app.use(express.json());


// ===============================
// ROUTES
// ===============================


// Root check
app.get("/", (req, res) => {
  res.json({
    message: "Backend is running successfully 🚀"
  });
});


// Health check
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    status: "OK"
  });
});


// ===============================
// VALIDATION
// ===============================

function isValidEmail(email) {
  return /^\S+@\S+\.\S+$/.test(
    String(email || "").trim()
  );
}


// ===============================
// ENQUIRY API
// ===============================

app.post("/api/enquiry", (req, res) => {

  try {

    const {
      name,
      email,
      phone
    } = req.body;


    const cleanName =
      String(name || "").trim();


    const cleanEmail =
      String(email || "").trim();


    const cleanPhone =
      String(phone || "").trim();


    const phoneDigits =
      cleanPhone.replace(/\D/g, "");



    console.log(
      "New enquiry:",
      {
        name: cleanName,
        email: cleanEmail,
        phone: cleanPhone
      }
    );



    // Name validation
    if (
      !cleanName ||
      cleanName.length < 2
    ) {

      return res.status(400).json({
        success: false,
        message: "Invalid name"
      });

    }



    // Email validation
    if (
      !cleanEmail ||
      !isValidEmail(cleanEmail)
    ) {

      return res.status(400).json({
        success: false,
        message: "Invalid email"
      });

    }



    // Phone validation
    if (
      !cleanPhone ||
      phoneDigits.length < 10
    ) {

      return res.status(400).json({
        success: false,
        message: "Invalid phone number"
      });

    }



    return res.status(200).json({

      success: true,

      message:
        "Enquiry submitted successfully"

    });



  } catch (error) {


    console.error(
      "Server Error:",
      error
    );


    return res.status(500).json({

      success:false,

      message:
        "Internal server error"

    });

  }

});


// ===============================
// SERVER START
// ===============================

const PORT =
  process.env.PORT || 5000;


app.listen(PORT, () => {

  console.log(
    `🚀 Server running on port ${PORT}`
  );

});