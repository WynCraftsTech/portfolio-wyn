-- Create database for portfolio contact form
CREATE DATABASE IF NOT EXISTS portfolio_contact;
USE portfolio_contact;

-- Create table for contact messages
CREATE TABLE IF NOT EXISTS contact_messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    subject VARCHAR(200) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_email (email),
    INDEX idx_created_at (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Optional: Create a view for recent messages
CREATE OR REPLACE VIEW recent_messages AS
SELECT 
    id,
    name,
    email,
    subject,
    LEFT(message, 100) as message_preview,
    created_at,
    DATE_FORMAT(created_at, '%M %d, %Y at %h:%i %p') as formatted_date
FROM contact_messages 
ORDER BY created_at DESC;

-- Optional: Create a table for message categories (for future use)
CREATE TABLE IF NOT EXISTS message_categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert some default categories
INSERT INTO message_categories (name, description) VALUES
('General Inquiry', 'General questions or information requests'),
('Project Request', 'Requests for design or development work'),
('Collaboration', 'Partnership or collaboration opportunities'),
('Feedback', 'Feedback about portfolio or work'),
('Other', 'Other types of messages');

-- Optional: Add category_id to contact_messages table (uncomment if you want to use categories)
-- ALTER TABLE contact_messages ADD COLUMN category_id INT DEFAULT 1;
-- ALTER TABLE contact_messages ADD FOREIGN KEY (category_id) REFERENCES message_categories(id);

-- Show the created table structure
DESCRIBE contact_messages;
