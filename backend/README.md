# 🚀 Portfolio Contact Form Backend Setup

This backend system allows you to receive and manage contact form messages from your portfolio website using XAMPP (MySQL + PHP).

## 📋 Prerequisites

- **XAMPP** installed and running
- **Apache** and **MySQL** services started
- Basic knowledge of PHP and MySQL

## 🛠️ Setup Instructions

### 1. Start XAMPP Services
1. Open XAMPP Control Panel
2. Start **Apache** service
3. Start **MySQL** service
4. Ensure both services show green status

### 2. Create Database
1. Open your browser and go to: `http://localhost/phpmyadmin`
2. Click on **"New"** to create a new database
3. Enter database name: `portfolio_contact`
4. Click **"Create"**
5. Select the `portfolio_contact` database
6. Go to **"SQL"** tab
7. Copy and paste the contents of `database_setup.sql`
8. Click **"Go"** to execute the SQL

### 3. File Placement
1. Copy the entire `backend` folder to your XAMPP htdocs directory:
   - **Windows**: `C:\xampp\htdocs\portfolio\backend\`
   - **Mac**: `/Applications/XAMPP/htdocs/portfolio/backend/`
   - **Linux**: `/opt/lampp/htdocs/portfolio/backend/`

2. Your file structure should look like:
   ```
   C:\xampp\htdocs\portfolio\
   ├── backend\
   │   ├── contact_handler.php
   │   ├── admin_panel.php
   │   ├── database_setup.sql
   │   └── README.md
   ```

### 4. Test the Backend
1. **Test Contact Handler**: 
   - Go to: `http://localhost/portfolio/backend/contact_handler.php`
   - You should see a JSON response (this is normal for API endpoints)

2. **Access Admin Panel**:
   - Go to: `http://localhost/portfolio/backend/admin_panel.php`
   - Default password: `admin123`
   - **⚠️ Change this password in production!**

## 🔧 Configuration

### Database Connection
The backend uses these default XAMPP settings:
- **Host**: `localhost`
- **Database**: `portfolio_contact`
- **Username**: `root`
- **Password**: `` (empty)

If you've changed these, update them in:
- `contact_handler.php` (line 18-21)
- `admin_panel.php` (line 25-28)

### Admin Password
To change the admin password:
1. Open `admin_panel.php`
2. Find line 6: `$admin_password = 'admin123';`
3. Change `admin123` to your desired password

## 📱 Frontend Integration

Your React app should now send form data to:
```
http://localhost/portfolio/backend/contact_handler.php
```

The backend will:
- ✅ Validate form data
- ✅ Sanitize inputs
- ✅ Store messages in MySQL database
- ✅ Return JSON response
- ✅ Handle errors gracefully

## 🗄️ Database Schema

### `contact_messages` Table
- `id` - Auto-increment primary key
- `name` - Sender's name (VARCHAR 100)
- `email` - Sender's email (VARCHAR 150)
- `subject` - Message subject (VARCHAR 200)
- `message` - Full message content (TEXT)
- `created_at` - Timestamp when message was sent
- `updated_at` - Timestamp when message was last updated

### `message_categories` Table (Optional)
- Pre-defined categories for organizing messages
- Can be linked to contact_messages for better organization

## 🔒 Security Features

- **Input Validation**: All form fields are validated
- **SQL Injection Protection**: Uses PDO prepared statements
- **XSS Protection**: HTML entities encoding
- **CORS Headers**: Configured for cross-origin requests
- **Error Handling**: Graceful error handling without exposing system details

## 🚨 Troubleshooting

### Common Issues

1. **"Database connection failed"**
   - Ensure MySQL service is running in XAMPP
   - Check database name is correct
   - Verify username/password in PHP files

2. **"Access-Control-Allow-Origin" errors**
   - Check CORS headers in `contact_handler.php`
   - Ensure frontend URL matches allowed origins

3. **"404 Not Found" errors**
   - Verify file paths in htdocs directory
   - Check Apache service is running
   - Confirm file permissions

4. **Form submissions not working**
   - Check browser console for errors
   - Verify backend URL in Contact.jsx
   - Test backend endpoint directly

### Debug Mode
To enable debug mode, add this to `contact_handler.php`:
```php
error_reporting(E_ALL);
ini_set('display_errors', 1);
```

## 📊 Admin Panel Features

- **Message Dashboard**: View all contact form submissions
- **Statistics**: Total messages, today's count, monthly count
- **Secure Login**: Password-protected access
- **Responsive Design**: Works on all devices
- **Message Details**: Full message content with timestamps

## 🔮 Future Enhancements

- Email notifications for new messages
- Message categories and filtering
- Export messages to CSV/PDF
- Advanced search and sorting
- User management system
- API rate limiting
- Message archiving

## 📞 Support

If you encounter issues:
1. Check XAMPP error logs
2. Verify database connection
3. Test individual components
4. Check browser console for frontend errors

## 🎯 Production Deployment

Before going live:
1. Change default admin password
2. Use environment variables for database credentials
3. Enable HTTPS
4. Set up proper CORS policies
5. Implement rate limiting
6. Add logging and monitoring
7. Regular database backups

---

**Happy coding! 🎉**
