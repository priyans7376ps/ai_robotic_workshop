const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/api/health', (req, res) => {
  res.json({ ok: true })
})

function isValidEmail(email) {
  return /^\S+@\S+\.\S+$/.test(String(email || '').trim())
}

app.get('/', (req,res)=>{
  res.send({
    message: "Backend is up"
  })
})

app.post('/api/enquiry', async (req, res) => {
  const body = req.body
  const { name, email, phone } = body

  const cleanName = name.trim()
  const cleanEmail = email.trim()
  const cleanPhone = phone.trim()

  const phoneDigits = cleanPhone.replace(/\D/g, '')

  // Debug log (remove later if desired)
  // eslint-disable-next-line no-console
  console.log('POST /api/enquiry body=', body)

  if (!cleanName || cleanName.length < 2) {
    return res.status(400).json({ success: false, message: 'All fields are required', detail: 'name invalid' })
  }
  if (!cleanEmail || !isValidEmail(cleanEmail)) {
    return res.status(400).json({ success: false, message: 'All fields are required', detail: 'email invalid' })
  }
  if (!cleanPhone || phoneDigits.length < 10) {
    return res.status(400).json({ success: false, message: 'All fields are required', detail: 'phone invalid' })
  }


  return res.json({
    success: true,
    message: 'Enquiry submitted successfully'
  })
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`)
})

