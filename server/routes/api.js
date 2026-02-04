const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Submission = require('../models/Submission');
const Admin = require('../models/Admin');
const xlsx = require('xlsx');

// Health check
router.get('/health', (req, res) => {
    res.json({ status: 'OK', message: 'Server is running' });
});

// Form Submission
router.post('/submit', async (req, res) => {
    try {
        const submission = new Submission(req.body);
        await submission.save();
        res.status(201).json({ message: 'Submission successful' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Admin Login
router.post('/admin/login', async (req, res) => {
    try {
        console.log('Login attempt:', req.body.username);
        const { username, password } = req.body;
        const admin = await Admin.findOne({ username });
        console.log('Admin found:', !!admin);
        if (!admin || !(await admin.comparePassword(password))) {
            console.log('Invalid credentials');
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
        console.log('Login successful, token generated');
        res.json({ token });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: error.message });
    }
});

// Middleware to protect routes
const auth = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) return res.status(401).json({ error: 'No token, authorization denied' });
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.adminId = decoded.id;
        next();
    } catch (error) {
        res.status(401).json({ error: 'Token is not valid' });
    }
};

// Get Submissions (Protected)
router.get('/submissions', auth, async (req, res) => {
    try {
        const submissions = await Submission.find().sort({ createdAt: -1 });
        res.json(submissions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Export responses to Excel (Protected)
router.get('/export', auth, async (req, res) => {
    try {
        const submissions = await Submission.find().lean();
        const ws = xlsx.utils.json_to_sheet(submissions);
        const wb = xlsx.utils.book_new();
        xlsx.utils.book_append_sheet(wb, ws, "Submissions");

        const buf = xlsx.write(wb, { type: 'buffer', bookType: 'xlsx' });

        res.setHeader('Content-Disposition', 'attachment; filename=submissions.xlsx');
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.send(buf);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update Submission Status (Protected)
router.put('/submissions/:id', auth, async (req, res) => {
    try {
        const { status } = req.body;
        const submission = await Submission.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true }
        );
        if (!submission) return res.status(404).json({ error: 'Submission not found' });
        res.json(submission);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete Submission (Protected)
router.delete('/submissions/:id', auth, async (req, res) => {
    try {
        const submission = await Submission.findByIdAndDelete(req.params.id);
        if (!submission) return res.status(404).json({ error: 'Submission not found' });
        res.json({ message: 'Submission deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
