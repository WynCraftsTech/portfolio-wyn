-- Simple database setup for portfolio contact form
CREATE DATABASE IF NOT EXISTS portfolio_contact;
USE portfolio_contact;

-- Create the main table
CREATE TABLE IF NOT EXISTS contact_messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    subject VARCHAR(200) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Show the table structure
DESCRIBE contact_messages;
