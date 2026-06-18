# AI & Robotics Summer Workshop Landing Page

A modern, responsive landing page for an AI & Robotics summer workshop with a React (Vite + Tailwind) frontend and an Express backend.

## Features
- Responsive landing page UI (Hero, Details, Outcomes, FAQ, Registration)
- Smooth scroll CTA to registration section
- Accordion FAQ
- Client-side form validation (name/email/phone)
- Loading state + success/error messages
- Backend API validation + CORS enabled

## Tech Stack
### Frontend
- React
- Vite
- Tailwind CSS

### Backend
- Node.js
- Express
- CORS
- (Optional) dotenv

## Project Structure
- `frontend/`
- `backend/`

## Setup & Run

### 1) Backend
```bash
cd backend
npm install
npm start
```
Backend runs on:
- **http://localhost:5000**

API:
- **POST** `/api/enquiry`

Request JSON:
```json
{
  "name": "",
  "email": "",
  "phone": ""
}
```

Success response:
```json
{
  "success": true,
  "message": "Enquiry submitted successfully"
}
```

Error response:
```json
{
  "success": false,
  "message": "All fields are required"
}
```

### 2) Frontend
```bash
cd frontend
npm install
npm run dev
```
Open the URL shown in the terminal (Vite).

## Deployment Notes
- Frontend: deploy to Vercel/Netlify (ensure API base/proxy)
- Backend: deploy to Render/Railway and set `PORT` env var


