<?php
function read_site_config_value($key, $fallback) {
    $path = __DIR__ . '/js/site-config.js';
    if (!is_readable($path)) {
        return $fallback;
    }
    $contents = file_get_contents($path);
    if (preg_match('/' . preg_quote($key, '/') . '\s*:\s*([\'"])(.*?)\1/', $contents, $matches)) {
        return $matches[2];
    }
    return $fallback;
}

$recipient = read_site_config_value('email', 'support@heavycuddly.com');
$company = read_site_config_value('companyName', 'HEAVY CUDDLY s.r.o.');
$website = read_site_config_value('domain', 'heavycuddly.com');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: contact.html');
    exit;
}

$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$message = trim($_POST['message'] ?? '');

if ($name === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo 'Please complete the form with a valid email address.';
    exit;
}

$subject = 'New website inquiry - ' . $company;
$body = "Website: {$website}\nName: {$name}\nEmail: {$email}\n\nMessage:\n{$message}\n";
$headers = [
    'From: ' . $company . ' <' . $recipient . '>',
    'Reply-To: ' . $email,
    'Content-Type: text/plain; charset=UTF-8'
];

if (mail($recipient, $subject, $body, implode("\r\n", $headers))) {
    header('Location: contact.html?sent=1');
    exit;
}

http_response_code(500);
echo 'Message could not be sent. Please email us directly.';
