<?php
// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Database configuration for XAMPP
$host = 'localhost';
$dbname = 'portfolio_contact';
$username = 'root';
$password = ''; // XAMPP default: NO PASSWORD

try {
    // Create PDO connection
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // Check if it's a POST request
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        // Get JSON input
        $raw_input = file_get_contents('php://input');
        
        if (empty($raw_input)) {
            throw new Exception('No data received');
        }
        
        $input = json_decode($raw_input, true);
        
        if (!$input) {
            throw new Exception('Invalid JSON input: ' . json_last_error_msg());
        }
        
        // Validate required fields
        $required_fields = ['name', 'email', 'subject', 'message'];
        foreach ($required_fields as $field) {
            if (empty(trim($input[$field] ?? ''))) {
                throw new Exception("Field '$field' is required");
            }
        }
        
        // Validate email
        if (!filter_var($input['email'], FILTER_VALIDATE_EMAIL)) {
            throw new Exception('Invalid email format');
        }
        
        // Sanitize inputs
        $name = htmlspecialchars(trim($input['name']));
        $email = filter_var(trim($input['email']), FILTER_SANITIZE_EMAIL);
        $subject = htmlspecialchars(trim($input['subject']));
        $message = htmlspecialchars(trim($input['message']));
        
        // Prepare SQL statement
        $sql = "INSERT INTO contact_messages (name, email, subject, message, created_at) VALUES (?, ?, ?, ?, NOW())";
        $stmt = $pdo->prepare($sql);
        
        // Execute the statement
        $stmt->execute([$name, $email, $subject, $message]);
        
        // Send success response
        echo json_encode([
            'success' => true,
            'message' => 'Message sent successfully!',
            'id' => $pdo->lastInsertId(),
            'timestamp' => date('Y-m-d H:i:s')
        ]);
        
    } else {
        throw new Exception('Only POST method is allowed. Received: ' . $_SERVER['REQUEST_METHOD']);
    }
    
} catch (PDOException $e) {
    // Database connection error
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Database connection failed: ' . $e->getMessage(),
        'error_type' => 'database_error'
    ]);
    
} catch (Exception $e) {
    // Other errors
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => $e->getMessage(),
        'error_type' => 'validation_error'
    ]);
}
?>
