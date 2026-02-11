
/**
 * SENIOR PORTFOLIO BACKEND ARCHITECTURE
 * 
 * TECH STACK: Node.js, Express.js, MongoDB, Mongoose
 * 
 * Instructions: Use this as a reference for your server/ directory setup.
 */

/* 
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import nodemailer from 'nodemailer';

const app = express();
app.use(express.json());
app.use(cors());

// DB SCHEMA
const ProjectSchema = new mongoose.Schema({
  title: String,
  description: String,
  techStack: [String],
  category: String,
  liveLink: String,
  githubLink: String,
  imageUrl: String,
  featured: Boolean
});

const Project = mongoose.model('Project', ProjectSchema);

// API ROUTES
app.get('/api/projects', async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  
  // Setup Nodemailer
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: "your-email@portfolio.com",
      subject: "New Portfolio Message",
      text: message,
      html: `<b>Name:</b> ${name}<br><b>Email:</b> ${email}<br><br>${message}`
    });
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send message' });
  }
});

// START SERVER
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGODB_URI!)
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)));
*/
