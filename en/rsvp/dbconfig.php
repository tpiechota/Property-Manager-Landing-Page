<?php


$db_host = "mysql2.superhost.pl";
$db_name = "webmojo_olaitomek";
$db_user = "webmojo_oit";
$db_pass = "!B3h3m0T!";

try{
	
	$db_con = new PDO("mysql:host={$db_host};dbname={$db_name}",$db_user,$db_pass);
	$db_con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch(PDOException $e){
	echo $e->getMessage();
}
	
	/**
 * Configuration for: Email server credentials
 *
 * Here you can define how you want to send emails.
 * If you have successfully set up a mail server on your linux server and you know
 * what you do, then you can skip this section. Otherwise please set EMAIL_USE_SMTP to true
 * and fill in your SMTP provider account data.
 *
 * An example setup for using gmail.com [Google Mail] as email sending service,
 * works perfectly in August 2013. Change the "xxx" to your needs.
 * Please note that there are several issues with gmail, like gmail will block your server
 * for "spam" reasons or you'll have a daily sending limit. See the readme.md for more info.
 *
 * define("EMAIL_USE_SMTP", true);
 * define("EMAIL_SMTP_HOST", "ssl://smtp.gmail.com");
 * define("EMAIL_SMTP_AUTH", true);
 * define("EMAIL_SMTP_USERNAME", "xxxxxxxxxx@gmail.com");
 * define("EMAIL_SMTP_PASSWORD", "xxxxxxxxxxxxxxxxxxxx");
 * define("EMAIL_SMTP_PORT", 465);
 * define("EMAIL_SMTP_ENCRYPTION", "ssl");
 *
 * It's really recommended to use SMTP!
 *
 */
define("EMAIL_USE_SMTP", true);
define("EMAIL_SMTP_HOST", "poczta.superhost.pl");
define("EMAIL_SMTP_AUTH", true);
define("EMAIL_SMTP_USERNAME", "olaitomek@webmojo.eu");
//define("EMAIL_SMTP_PASSWORD", "Pa88w0rd");
define("EMAIL_SMTP_PASSWORD", "!Al-Gahaim1979!");
define("EMAIL_SMTP_PORT", 587);
define("EMAIL_SMTP_ENCRYPTION", "STARTTLS");

/**
 * Configuration for: password reset email data
 * Set the absolute URL to password_reset.php, necessary for email password reset links
 */
define("EMAIL_PASSWORDRESET_URL", "http://127.0.0.1/olaitomek/password_reset.php");
define("EMAIL_PASSWORDRESET_FROM", "no-reply@olaitomek.webmojo.eu");
define("EMAIL_PASSWORDRESET_FROM_NAME", "Ola i Tomek");
define("EMAIL_PASSWORDRESET_SUBJECT", "Zresetowanie hasła dla Ola i Tomek");
define("EMAIL_PASSWORDRESET_CONTENT", "Kliknij ten link aby zresetować hasło:");

/**
 * Configuration for: verification email data
 * Set the absolute URL to register.php, necessary for email verification links
 */
define("EMAIL_VERIFICATION_URL", "http://www.oit.webmojo.eu/rsvp/register.php");
define("EMAIL_VERIFICATION_FROM", "olaitomek@webmojo.eu");
define("EMAIL_VERIFICATION_FROM_NAME", "Ola i Tomek");
define("EMAIL_VERIFICATION_SUBJECT", "Thank you for your confirmation!");
define("EMAIL_VERIFICATION_CONTENT", '<!DOCTYPE html><html xmlns="http://www.w3.org/1999/xhtml" style="margin:0;padding:0;height:100%;"><head><meta name="generator" content="Ola i Tomek"/><meta http-equiv="Content-Type" content="text/html;charset=utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/><title>Ola i Tomek</title></head><body style="background-position:center center;background-repeat:no-repeat;background-attachment:fixed;background-size:cover;background-color:#DBD6BC;font-family:Tahoma,Verdana,Arial,sans-serif;color:#C10D34;margin:0;padding:0;height:100%;"><div class="container" style="display:table;width:100%;height:100%;"><div class="content" style="display:table-cell;vertical-align:middle;text-align:center;margin:0;padding:0;"><h1 style="color:#C10D34;text-transform:uppercase;margin-top:0px;margin:0;padding:0;font-size:3em;line-height:1em;">Thank you for your confirmation</h1><h1>See you on Friday, 03 JUNE 2016 :)</h1></div></div></body></html>');

// include the PHPMailer library
require_once('libraries/PHPMailer.php');

?>