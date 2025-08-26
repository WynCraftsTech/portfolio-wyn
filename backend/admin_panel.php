<?php
session_start();

// Simple authentication (you can enhance this)
$admin_password = 'admin123'; // Change this to a secure password

if (isset($_POST['login'])) {
    if ($_POST['password'] === $admin_password) {
        $_SESSION['admin_logged_in'] = true;
    } else {
        $error = 'Invalid password';
    }
}

if (isset($_GET['logout'])) {
    session_destroy();
    header('Location: admin_panel.php');
    exit;
}

// Database connection
$host = 'localhost';
$dbname = 'portfolio_contact';
$username = 'root';
$password = ''; // XAMPP default: NO PASSWORD

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    if (isset($_SESSION['admin_logged_in'])) {
        // Get messages
        $stmt = $pdo->query("SELECT * FROM contact_messages ORDER BY created_at DESC");
        $messages = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        // Get message count
        $count_stmt = $pdo->query("SELECT COUNT(*) as total FROM contact_messages");
        $total_messages = $count_stmt->fetch(PDO::FETCH_ASSOC)['total'];
    }
} catch (PDOException $e) {
    $db_error = 'Database connection failed: ' . $e->getMessage();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio Contact Admin Panel</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 20px;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            background: white;
            border-radius: 15px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
            overflow: hidden;
        }
        
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px;
            text-align: center;
        }
        
        .header h1 {
            font-size: 2.5rem;
            margin-bottom: 10px;
        }
        
        .header p {
            font-size: 1.1rem;
            opacity: 0.9;
        }
        
        .content {
            padding: 30px;
        }
        
        .login-form {
            max-width: 400px;
            margin: 50px auto;
            text-align: center;
        }
        
        .login-form input[type="password"] {
            width: 100%;
            padding: 15px;
            border: 2px solid #e1e5e9;
            border-radius: 10px;
            font-size: 1rem;
            margin-bottom: 20px;
            transition: border-color 0.3s ease;
        }
        
        .login-form input[type="password"]:focus {
            outline: none;
            border-color: #667eea;
        }
        
        .login-form button {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            padding: 15px 30px;
            border-radius: 10px;
            font-size: 1rem;
            cursor: pointer;
            transition: transform 0.3s ease;
        }
        
        .login-form button:hover {
            transform: translateY(-2px);
        }
        
        .error {
            background: #fee;
            color: #c33;
            padding: 15px;
            border-radius: 10px;
            margin-bottom: 20px;
            border: 1px solid #fcc;
        }
        
        .stats {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
        }
        
        .stat-card {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
            border: 1px solid #e9ecef;
        }
        
        .stat-number {
            font-size: 2rem;
            font-weight: bold;
            color: #667eea;
            margin-bottom: 5px;
        }
        
        .stat-label {
            color: #6c757d;
            font-size: 0.9rem;
        }
        
        .messages-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
            background: white;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        
        .messages-table th,
        .messages-table td {
            padding: 15px;
            text-align: left;
            border-bottom: 1px solid #e9ecef;
        }
        
        .messages-table th {
            background: #f8f9fa;
            font-weight: 600;
            color: #495057;
        }
        
        .messages-table tr:hover {
            background: #f8f9fa;
        }
        
        .message-content {
            max-width: 300px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        
        .date {
            color: #6c757d;
            font-size: 0.9rem;
        }
        
        .logout-btn {
            background: #dc3545;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 8px;
            cursor: pointer;
            text-decoration: none;
            display: inline-block;
            margin-bottom: 20px;
            transition: background 0.3s ease;
        }
        
        .logout-btn:hover {
            background: #c82333;
        }
        
        .no-messages {
            text-align: center;
            padding: 50px;
            color: #6c757d;
            font-size: 1.1rem;
        }
        
        @media (max-width: 768px) {
            .messages-table {
                font-size: 0.9rem;
            }
            
            .messages-table th,
            .messages-table td {
                padding: 10px;
            }
            
            .message-content {
                max-width: 200px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>📧 Contact Messages</h1>
            <p>Admin Panel for Portfolio Contact Form</p>
        </div>
        
        <div class="content">
            <?php if (!isset($_SESSION['admin_logged_in'])): ?>
                <!-- Login Form -->
                <div class="login-form">
                    <h2>Admin Login</h2>
                    <?php if (isset($error)): ?>
                        <div class="error"><?php echo $error; ?></div>
                    <?php endif; ?>
                    
                    <form method="POST">
                        <input type="password" name="password" placeholder="Enter admin password" required>
                        <button type="submit" name="login">Login</button>
                    </form>
                </div>
                
            <?php else: ?>
                <!-- Admin Dashboard -->
                <a href="?logout=1" class="logout-btn">🚪 Logout</a>
                
                <?php if (isset($db_error)): ?>
                    <div class="error"><?php echo $db_error; ?></div>
                <?php else: ?>
                    <!-- Statistics -->
                    <div class="stats">
                        <div class="stat-card">
                            <div class="stat-number"><?php echo $total_messages; ?></div>
                            <div class="stat-label">Total Messages</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-number"><?php echo count(array_filter($messages, function($m) { return date('Y-m-d') === date('Y-m-d', strtotime($m['created_at'])); })); ?></div>
                            <div class="stat-label">Today's Messages</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-number"><?php echo count(array_filter($messages, function($m) { return date('Y-m') === date('Y-m', strtotime($m['created_at'])); })); ?></div>
                            <div class="stat-label">This Month</div>
                        </div>
                    </div>
                    
                    <!-- Messages Table -->
                    <?php if (empty($messages)): ?>
                        <div class="no-messages">
                            <h3>📭 No messages yet</h3>
                            <p>When someone submits the contact form, their messages will appear here.</p>
                        </div>
                    <?php else: ?>
                        <h3>📋 Recent Messages</h3>
                        <table class="messages-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Subject</th>
                                    <th>Message</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <?php foreach ($messages as $message): ?>
                                    <tr>
                                        <td><strong><?php echo htmlspecialchars($message['name']); ?></strong></td>
                                        <td><?php echo htmlspecialchars($message['email']); ?></td>
                                        <td><?php echo htmlspecialchars($message['subject']); ?></td>
                                        <td class="message-content" title="<?php echo htmlspecialchars($message['message']); ?>">
                                            <?php echo htmlspecialchars($message['message']); ?>
                                        </td>
                                        <td class="date"><?php echo date('M d, Y H:i', strtotime($message['created_at'])); ?></td>
                                    </tr>
                                <?php endforeach; ?>
                            </tbody>
                        </table>
                    <?php endif; ?>
                <?php endif; ?>
            <?php endif; ?>
        </div>
    </div>
</body>
</html>
