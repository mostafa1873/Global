<?php
// السماح لـ Next.js بالاتصال بالسيرفر محلياً لحل مشكلة الـ CORS
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header('Content-Type: application/json; charset=utf-8');

// التعامل مع طلبات الـ Preflight (OPTIONS)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/PHPMailer/src/Exception.php';
require __DIR__ . '/PHPMailer/src/PHPMailer.php';
require __DIR__ . '/PHPMailer/src/SMTP.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method']);
    exit;
}

// استقبال البيانات سواء مبعوتة كـ FormData أو JSON
$input = $_POST;
if (empty($input)) {
    $input = json_decode(file_get_contents('php://input'), true) ?? [];
}

// تنظيف وحماية البيانات المستلمة
$name    = isset($input['name']) ? trim($input['name']) : '';
$company = isset($input['company']) ? trim($input['company']) : '';
$email   = isset($input['email']) ? trim($input['email']) : '';
$phone   = isset($input['phone']) ? trim($input['phone']) : '';
$details = isset($input['details']) ? trim($input['details']) : '';
$services= isset($input['services']) ? $input['services'] : [];

// تحويل مصفوفة الخدمات لنص مقروء
$servicesText = is_array($services) ? implode(', ', $services) : $services;

// التحقق من الحقول الأساسية
if (empty($name) || empty($email) || empty($details) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['status' => 'error', 'message' => 'Missing or invalid fields']);
    exit;
}

$mail = new PHPMailer(true);

try {
    $smtpHost = getenv('SMTP_HOST') ?: 'smtp.hostinger.com';
    $smtpUser = getenv('SMTP_USER') ?: 'info@globalnexuseg.com';
    $smtpPass = getenv('SMTP_PASS') ?: 'Hamdy55@@@';
    $smtpPort = getenv('SMTP_PORT') ?: 465;
    $smtpSecure = getenv('SMTP_SECURE') ?: 'ssl'; 

    // إعدادات السيرفر
    $mail->isSMTP();
    $mail->Host       = $smtpHost;
    $mail->SMTPAuth   = true;
    $mail->Username   = $smtpUser;
    $mail->Password   = $smtpPass;
    $mail->SMTPSecure = $smtpSecure;
    $mail->Port       = (int)$smtpPort;
    $mail->CharSet    = 'UTF-8'; // لضمان ظهور الكلام العربي بشكل صحيح

    // بيانات المرسل والمستقبل
    $mail->setFrom($smtpUser, 'Global Nexus Website');
    $mail->addAddress('info@globalnexuseg.com'); 
    $mail->addReplyTo($email, $name);

    // المحتوى
    $mail->isHTML(true);
    $mail->Subject = 'New Business Inquiry from ' . htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
    
    // تنظيف النصوص للعرض بأمان داخل الإيميل
    $safeName    = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
    $safeCompany = htmlspecialchars($company, ENT_QUOTES, 'UTF-8');
    $safeEmail   = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
    $safePhone   = htmlspecialchars($phone, ENT_QUOTES, 'UTF-8');
    $safeServices= htmlspecialchars($servicesText, ENT_QUOTES, 'UTF-8');
    $safeDetails = nl2br(htmlspecialchars($details, ENT_QUOTES, 'UTF-8'));

    $mail->Body = "
        <div style='font-family: sans-serif; direction: ltr; line-height: 1.6;'>
            <h3 style='color: #2563eb;'>New Inquiry Received</h3>
            <p><strong>Name:</strong> {$safeName}</p>
            <p><strong>Company:</strong> {$safeCompany}</p>
            <p><strong>Email:</strong> {$safeEmail}</p>
            <p><strong>Phone:</strong> {$safePhone}</p>
            <p><strong>Requested Services:</strong> {$safeServices}</p>
            <p><strong>Project Details:</strong><br>{$safeDetails}</p>
        </div>
    ";

    $mail->send();
    echo json_encode(['status' => 'success', 'message' => 'Message sent successfully']);
} catch (Exception $e) {
    echo json_encode(['status' => 'error', 'message' => $mail->ErrorInfo]);
}