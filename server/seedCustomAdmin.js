require('dotenv').config();
const mongoose = require('mongoose');
const Admin = require('./models/Admin');
const connectDB = require('./config/db');

const seedCustomAdmin = async () => {
    await connectDB();
    try {
        const username = 'Abhishek@silverwolftechnologies.in';
        const password = 'Abhishek2050@';

        // Check if admin already exists
        const existing = await Admin.findOne({ username });
        if (existing) {
            console.log('❌ Admin with this username already exists');
            console.log('Deleting old admin and creating new one...');
            await Admin.deleteOne({ username });
        }

        // Create new admin (password will be auto-hashed by the pre-save hook)
        const admin = new Admin({ username, password });
        await admin.save();

        console.log('✅ Admin created successfully!');
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.log('📧 Username:', username);
        console.log('🔑 Password:', password);
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.log('🌐 Login at: http://localhost:8080/admin');
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    } catch (error) {
        console.error('❌ Error:', error.message);
    } finally {
        mongoose.connection.close();
    }
};

seedCustomAdmin();
