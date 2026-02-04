require('dotenv').config();
const mongoose = require('mongoose');
const Admin = require('./models/Admin');
const connectDB = require('./config/db');

const seedAdmin = async () => {
    await connectDB();
    try {
        const username = 'admin';
        const password = 'adminPassword123'; // The user should change this

        const existing = await Admin.findOne({ username });
        if (existing) {
            console.log('Admin already exists');
        } else {
            const admin = new Admin({ username, password });
            await admin.save();
            console.log('Admin created successfully');
            console.log(`Username: ${username}`);
            console.log(`Password: ${password}`);
        }
    } catch (error) {
        console.error(error);
    } finally {
        mongoose.connection.close();
    }
};

seedAdmin();
