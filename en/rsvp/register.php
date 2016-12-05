<?php
	
	require_once 'dbconfig.php';
	require_once 'libraries/Encoding.php';

	if($_POST) {

		//$rsvp_type = $_POST['rsvp_type'];
		$guest_attend = $_POST['guest_attend'];
		$guest_email = $_POST['guest_email'];
		$guest_name0 = $_POST['guest_name0'];
		$guest_veg0 = $_POST['guest_veg0'];
		$guest_veg1 = $_POST['guest_veg1'];
		$guest_veg2 = $_POST['guest_veg2'];
		$guest_veg3 = $_POST['guest_veg3'];
		$guest_veg4 = $_POST['guest_veg4'];
		$guest_veg5 = $_POST['guest_veg5'];
		$guest_phone = $_POST['guest_phone'];
		$guest_name1 = $_POST['guest_name1'];
		$guest_name2 = $_POST['guest_name2'];
		$guest_name3 = $_POST['guest_name3'];
		$guest_name4 = $_POST['guest_name4'];
		$guest_name5 = $_POST['guest_name5'];
		$guest_comment = !isset($_POST['guest_comment']) ? "" : $_POST['guest_comment'];
		$guest_guests = !isset($_POST['guest_guests']) ? 0 : $_POST['guest_guests'];
		$guest_registration_datetime = date('Y-m-d H:i:s');
		$guest_registration_ip = get_ip();

		try {

			$stmt = $db_con->prepare("SELECT * FROM guests WHERE guest_email=:gemail");
			$stmt->execute(array(":gemail" => $guest_email));
			$count = $stmt->rowCount();

			if ($count == 0) {


				$stmt = $db_con->prepare("INSERT INTO guests(guest_email, guest_name0, guest_attend, guest_veg0, guest_phone, guest_guests, guest_comment, guest_name1, guest_veg1, guest_name2, guest_veg2, guest_name3, guest_veg3, guest_name4, guest_veg4, guest_name5, guest_veg5, guest_registration_datetime ,guest_registration_ip)VALUES(:gemail, :gname0, :gattend, :gveg0, :gphone, :gguests, :gcomment, :gname1, :gveg1, :gname2, :gveg2, :gname3, :gveg3, :gname4, :gveg4, :gname5, :gveg5, :gregistration_datetime, :gip)");
				$stmt->bindParam(":gemail", $guest_email);
				$stmt->bindParam(":gname0", $guest_name0);
				$stmt->bindParam(":gattend", $guest_attend);
				$stmt->bindParam(":gveg0", $guest_veg0);
				$stmt->bindParam(":gphone", $guest_phone);
				$stmt->bindParam(":gguests", $guest_guests);
				$stmt->bindParam(":gcomment", $guest_comment);
				$stmt->bindParam(":gname1", $guest_name1);
				$stmt->bindParam(":gveg1", $guest_veg1);
				$stmt->bindParam(":gname2", $guest_name2);
				$stmt->bindParam(":gveg2", $guest_veg2);
				$stmt->bindParam(":gname3", $guest_name3);
				$stmt->bindParam(":gveg3", $guest_veg3);
				$stmt->bindParam(":gname4", $guest_name4);
				$stmt->bindParam(":gveg4", $guest_veg4);
				$stmt->bindParam(":gname5", $guest_name5);
				$stmt->bindParam(":gveg5", $guest_veg5);
				$stmt->bindParam(":gregistration_datetime", $guest_registration_datetime);
				$stmt->bindParam(":gip", $guest_registration_ip);
				/**/

				if ($stmt->execute()) {
					echo "registered";
					sendVerificationEmail($guest_email);
				} else {
					echo "Query could not execute !";
				}

			} else {

				echo "1"; //  not available
			}

		} catch (PDOException $e) {
			echo $e->getMessage();
		}

	}

	function get_ip()
	{

		/*
		$ipaddress = '';
		if ($_SERVER['HTTP_CLIENT_IP'])
			$ipaddress = $_SERVER['HTTP_CLIENT_IP'];
		else if($_SERVER['HTTP_X_FORWARDED_FOR'])
			$ipaddress = $_SERVER['HTTP_X_FORWARDED_FOR'];
		else if($_SERVER['HTTP_X_FORWARDED'])
			$ipaddress = $_SERVER['HTTP_X_FORWARDED'];
		else if($_SERVER['HTTP_FORWARDED_FOR'])
			$ipaddress = $_SERVER['HTTP_FORWARDED_FOR'];
		else if($_SERVER['HTTP_FORWARDED'])
			$ipaddress = $_SERVER['HTTP_FORWARDED'];
		else if($_SERVER['REMOTE_ADDR'])
			$ipaddress = $_SERVER['REMOTE_ADDR'];
		else
			$ipaddress = 'UNKNOWN';

		return $ipaddress;
		*/

		$ipaddress = '';
		if (getenv('HTTP_CLIENT_IP'))
			$ipaddress = getenv('HTTP_CLIENT_IP');
		else if (getenv('HTTP_X_FORWARDED_FOR'))
			$ipaddress = getenv('HTTP_X_FORWARDED_FOR');
		else if (getenv('HTTP_X_FORWARDED'))
			$ipaddress = getenv('HTTP_X_FORWARDED');
		else if (getenv('HTTP_FORWARDED_FOR'))
			$ipaddress = getenv('HTTP_FORWARDED_FOR');
		else if (getenv('HTTP_FORWARDED'))
			$ipaddress = getenv('HTTP_FORWARDED');
		else if (getenv('REMOTE_ADDR'))
			$ipaddress = getenv('REMOTE_ADDR');
		else
			$ipaddress = 'UNKNOWN';

		return $ipaddress;
	}

	function sendVerificationEmail($user_email)
	{
		$mail = new PHPMailer;
		$oit_mail = 'olaitomek@webmojo.eu';

		// please look into the config/config.php for much more info on how to use this!
		// use SMTP or use mail()
		if (EMAIL_USE_SMTP) {
			// Set mailer to use SMTP
			$mail->IsSMTP();
			//useful for debugging, shows full SMTP errors
			//$mail->SMTPDebug = 1; // debugging: 1 = errors and messages, 2 = messages only
			// Enable SMTP authentication
			$mail->SMTPAuth = EMAIL_SMTP_AUTH;
			// Enable encryption, usually SSL/TLS
			if (defined(EMAIL_SMTP_ENCRYPTION)) {
				$mail->SMTPSecure = EMAIL_SMTP_ENCRYPTION;
			}
			// Specify host server
			$mail->Host = EMAIL_SMTP_HOST;
			$mail->Username = EMAIL_SMTP_USERNAME;
			$mail->Password = EMAIL_SMTP_PASSWORD;
			$mail->Port = EMAIL_SMTP_PORT;
		} else {
			$mail->IsMail();
		}
		$mail->IsHTML(true);
		$mail->From = EMAIL_VERIFICATION_FROM;
		$mail->FromName = EMAIL_VERIFICATION_FROM_NAME;
		$mail->AddAddress($user_email);
		$mail->AddBCC($oit_mail);
		$mail->Subject = EMAIL_VERIFICATION_SUBJECT;

		// the link to your register.php, please set this value in config/email_verification.php
		$mail->Body = EMAIL_VERIFICATION_CONTENT;

		if(!$mail->Send()) {
			$mail->errors[] = "Verification Mail NOT successfully sent! Error: " . $mail->ErrorInfo;
			return false;
		} else {
			return true;
		}
	}

?>