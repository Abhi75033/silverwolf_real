const mongoose = require('mongoose');

const SubmissionSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    country: { type: String, required: true },
    countryCode: { type: String, required: true },
    services: [{ type: String }],
    message: { type: String },
    type: { type: String, enum: ['mission-brief', 'consultation', 'inquiry', 'schedule'], default: 'inquiry' },
    tier: { type: String }, // For consultation
    date: { type: Date }, // For consultation
    scheduledDate: { type: Date }, // For scheduled meetings
    timeSlot: { type: String }, // For scheduled meetings
    status: { type: String, enum: ['pending', 'confirmed', 'completed', 'not-interested'], default: 'pending' },
}, { timestamps: true });

module.exports = mongoose.model('Submission', SubmissionSchema);
