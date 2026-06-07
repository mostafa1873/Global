<?php
// السماح لـ Next.js بالاتصال بالسيرفر محلياً لحل مشكلة الـ CORS
header("Access-Control-Allow-Origin: http://localhost:3000"); // غيره لدومين الموقع الرسمي في الـ Production
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

// تنظيف وحماية البيانات المستلمة الخاصة بفورم حجز المكالمة
$name          = isset($input['name']) ? trim($input['name']) : '';
$email         = isset($input['email']) ? trim($input['email']) : '';
$phone         = isset($input['phone']) ? trim($input['phone']) : '';
$serviceType   = isset($input['serviceType']) ? trim($input['serviceType']) : '';
$contactMethod = isset($input['contactMethod']) ? trim($input['contactMethod']) : '';
$date          = isset($input['date']) ? trim($input['date']) : '';
$time          = isset($input['time']) ? trim($input['time']) : '';
$notes         = isset($input['notes']) ? trim($input['notes']) : '';

// التحقق من الحقول الأساسية المطلوبة لإتمام المكالمة
if (empty($name) || empty($email) || empty($phone) || empty($date) || empty($time) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['status' => 'error', 'message' => 'Missing or invalid required fields']);
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
    $mail->setFrom($smtpUser, 'Global Nexus Booking');
    $mail->addAddress('info@globalnexuseg.com'); 
    $mail->addReplyTo($email, $name);

    // المحتوى
    $mail->isHTML(true);
    $mail->Subject = '⚡ New Call Booking from ' . htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
    
    // تنظيف النصوص للعرض بأمان داخل الإيميل لحمايتك من الـ XSS
    $safeName          = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
    $safeEmail         = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
    $safePhone         = htmlspecialchars($phone, ENT_QUOTES, 'UTF-8');
    $safeServiceType   = htmlspecialchars($serviceType, ENT_QUOTES, 'UTF-8');
    $safeContactMethod = htmlspecialchars($contactMethod, ENT_QUOTES, 'UTF-8');
    $safeDate          = htmlspecialchars($date, ENT_QUOTES, 'UTF-8');
    $safeTime          = htmlspecialchars($time, ENT_QUOTES, 'UTF-8');
    $safeNotes         = nl2br(htmlspecialchars($notes, ENT_QUOTES, 'UTF-8'));

    // تصميم الإيميل بشكل احترافي ومنظم
    $mail->Body = "
        <div style='font-family: Arial, sans-serif; direction: ltr; line-height: 1.6; max-w: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 16px; padding: 24px; background-color: #fafafa;'>
            <h2 style='color: #2563eb; margin-top: 0; border-bottom: 2px solid #2563eb; padding-bottom: 10px;'>New Consultation Call Booked</h2>
            
            <p style='font-size: 16px;'>You have received a new discovery call request from the website:</p>
            
            <table style='width: 100%; border-collapse: collapse; margin-top: 15px;'>
                <tr>
                    <td style='padding: 8px 0; font-weight: bold; width: 150px; color: #475569;'>Client Name:</td>
                    <td style='padding: 8px 0; color: #0f172a;'>{$safeName}</td>
                </tr>
                <tr>
                    <td style='padding: 8px 0; font-weight: bold; color: #475569;'>Email Address:</td>
                    <td style='padding: 8px 0; color: #0f172a;'><a href='mailto:{$safeEmail}'>{$safeEmail}</a></td>
                </tr>
                <tr>
                    <td style='padding: 8px 0; font-weight: bold; color: #475569;'>Phone Number:</td>
                    <td style='padding: 8px 0; color: #0f172a;'>{$safePhone}</td>
                </tr>
                <tr>
                    <td style='padding: 8px 0; font-weight: bold; color: #475569;'>Service Interest:</td>
                    <td style='padding: 8px 0; color: #2563eb; font-weight: 500;'>{$safeServiceType}</td>
                </tr>
            </table>

            <div style='margin-top: 20px; padding: 16px; background-color: #eff6ff; border-left: 4px solid #2563eb; border-radius: 8px;'>
                <h4 style='margin: 0 0 10px 0; color: #1e3a8a;'>🗓️ Proposed Meeting Details</h4>
                <p style='margin: 4px 0;'><strong>Contact Method:</strong> {$safeContactMethod}</p>
                <p style='margin: 4px 0;'><strong>Date:</strong> {$safeDate}</p>
                <p style='margin: 4px 0;'><strong>Time:</strong> {$safeTime}</p>
            </div>

            <div style='margin-top: 20px;'>
                <h4 style='margin: 0 0 8px 0; color: #475569;'>Client Notes:</h4>
                <p style='margin: 0; padding: 12px; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; color: #334155; font-style: italic;'>
                    " . (!empty($safeNotes) ? $safeNotes : 'No additional notes provided.') . "
                </p>
            </div>

            <hr style='border: 0; border-top: 1px solid #e2e8f0; margin: 24px 0;' />
            <p style='font-size: 12px; color: #94a3b8; text-align: center; margin: 0;'>This email was automatically generated by Global Nexus Booking System.</p>
        </div>
    ";

    $mail->send();
    echo json_encode(['status' => 'success', 'message' => 'Meeting booked successfully']);
} catch (Exception $e) {
    echo json_encode(['status' => 'error', 'message' => $mail->ErrorInfo]);
}