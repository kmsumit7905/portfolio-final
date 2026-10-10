const express = require("express");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

app.use(express.json());

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

app.get("/", (req, res) => {
    res.send("Portfolio backend is working!");
});

app.get("/test-email", async (req, res) => {
    try {
        const info = await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: "Portfolio Test Email",
            text: "Your portfolio backend is working!"
        });

        console.log("Message ID:", info.messageId);
        res.send("Email sent successfully!");
    } catch (error) {
        console.error("Email error:", error.message);
        res.status(500).send("Email failed. Check terminal.");
    }
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
})