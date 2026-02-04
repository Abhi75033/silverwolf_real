# Silver Wolf Technologies - Backend & Admin Setup

## Backend Setup

### 1. Environment Configuration

Create a `.env` file in the `server/` directory:

```bash
cd server
cp .env.example .env
```

Edit `.env` with your MongoDB credentials:

```env
MONGO_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@YOUR_CLUSTER.mongodb.net/silverwolf?retryWrites=true&w=majority
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
PORT=5000
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Seed Admin User

Create the default admin account:

```bash
npm run seed
```

**Default Credentials:**
- Username: `admin`
- Password: `adminPassword123`

⚠️ **IMPORTANT**: Change these credentials immediately after first login!

### 4. Start the Server

Development mode (with auto-reload):
```bash
npm run dev
```

Production mode:
```bash
npm start
```

The server will run on `http://localhost:5000`

## Frontend Setup

### Update API Endpoint (Optional)

If your backend runs on a different port or domain, update the API endpoint in:
- `src/components/sections/InquiryForm.tsx`
- `src/components/sections/Contact.tsx`
- `src/pages/Admin/Login.tsx`
- `src/pages/Admin/Dashboard.tsx`

Replace `http://localhost:5000` with your backend URL.

## Admin Dashboard Access

### Login

Navigate to: `http://localhost:8080/admin`

Use the credentials from the seed script (or your updated credentials).

### Features

1. **View All Submissions**: See all form submissions in a beautiful data table
2. **Search & Filter**: Search by name, email, phone, or country
3. **Real-time Stats**: View total submissions, today's inquiries, and countries reached
4. **Excel Export**: Download all submissions as an Excel file
5. **Secure Authentication**: JWT-based authentication with protected routes

## Form Features

All forms now include:
- ✅ Country selector with dial codes
- ✅ Phone number with country code display
- ✅ Form validation
- ✅ Backend integration
- ✅ Toast notifications

## API Endpoints

### Public Endpoints

- `POST /api/submit` - Submit a form (Contact, Inquiry, Consultation)

### Protected Endpoints (Require JWT Token)

- `POST /api/admin/login` - Admin login
- `GET /api/submissions` - Get all submissions
- `GET /api/export` - Export submissions to Excel

## Security Notes

1. **Change Default Admin Password**: Immediately after first login
2. **Update JWT_SECRET**: Use a strong, random secret in production
3. **HTTPS**: Always use HTTPS in production
4. **CORS**: Configure CORS properly for your production domain
5. **Rate Limiting**: Consider adding rate limiting for production

## Troubleshooting

### Server won't start
- Check if MongoDB URI is correct
- Ensure port 5000 is not in use
- Verify all dependencies are installed

### Forms not submitting
- Check if backend server is running
- Verify API endpoint URLs in frontend
- Check browser console for errors
- Ensure CORS is configured correctly

### Admin login fails
- Verify admin user was seeded correctly
- Check JWT_SECRET is set in .env
- Clear browser localStorage and try again

## Production Deployment

1. Set environment variables on your hosting platform
2. Update API endpoints in frontend to production URL
3. Build frontend: `npm run build`
4. Deploy backend to a Node.js hosting service
5. Deploy frontend build to a static hosting service

## Support

For issues or questions, contact: info@silverwolftechnologies.in
