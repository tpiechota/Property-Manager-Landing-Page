-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jan 01, 2016 at 02:13 PM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `webmojo_olaitomek`
--

-- --------------------------------------------------------

--
-- Table structure for table `guests`
--

CREATE TABLE IF NOT EXISTS `guests` (
  `guest_id` int(11) NOT NULL AUTO_INCREMENT,
  `guest_email` varchar(256) COLLATE utf8_unicode_ci NOT NULL,
  `guest_name0` varchar(256) COLLATE utf8_unicode_ci NOT NULL,
  `guest_attend` int(11) NOT NULL DEFAULT '1',
  `guest_veg0` int(11) NOT NULL DEFAULT '0',
  `guest_phone` varchar(24) COLLATE utf8_unicode_ci NOT NULL,
  `guest_guests` int(11) NOT NULL DEFAULT '0',
  `guest_comment` varchar(8000) COLLATE utf8_unicode_ci NOT NULL,
  `guest_name1` varchar(256) COLLATE utf8_unicode_ci NOT NULL,
  `guest_veg1` int(11) NOT NULL DEFAULT '0',
  `guest_name2` varchar(256) COLLATE utf8_unicode_ci NOT NULL,
  `guest_veg2` int(11) NOT NULL DEFAULT '0',
  `guest_name3` varchar(256) COLLATE utf8_unicode_ci NOT NULL,
  `guest_veg3` int(11) NOT NULL DEFAULT '0',
  `guest_name4` varchar(256) COLLATE utf8_unicode_ci NOT NULL,
  `guest_veg4` int(11) NOT NULL DEFAULT '0',
  `guest_name5` varchar(256) COLLATE utf8_unicode_ci NOT NULL,
  `guest_veg5` int(11) NOT NULL DEFAULT '0',
  `guest_registration_datetime` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `guest_registration_ip` varchar(39) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0.0.0.0',
  PRIMARY KEY (`guest_id`),
  UNIQUE KEY `guest_email` (`guest_email`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='user data' AUTO_INCREMENT=125 ;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'auto incrementing user_id of each user, unique index',
  `user_name` varchar(64) COLLATE utf8_unicode_ci NOT NULL COMMENT 'user''s name, unique',
  `user_password_hash` varchar(255) COLLATE utf8_unicode_ci NOT NULL COMMENT 'user''s password in salted and hashed format',
  `user_email` varchar(64) COLLATE utf8_unicode_ci NOT NULL COMMENT 'user''s email, unique',
  `user_active` tinyint(1) NOT NULL DEFAULT '0' COMMENT 'user''s activation status',
  `user_activation_hash` varchar(40) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'user''s email verification hash string',
  `user_password_reset_hash` char(40) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'user''s password reset code',
  `user_password_reset_timestamp` bigint(20) DEFAULT NULL COMMENT 'timestamp of the password reset request',
  `user_rememberme_token` varchar(64) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'user''s remember-me cookie token',
  `user_failed_logins` tinyint(1) NOT NULL DEFAULT '0' COMMENT 'user''s failed login attemps',
  `user_last_failed_login` int(10) DEFAULT NULL COMMENT 'unix timestamp of last failed login attempt',
  `user_registration_datetime` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `user_registration_ip` varchar(39) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0.0.0.0',
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_name` (`user_name`),
  UNIQUE KEY `user_email` (`user_email`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='user data' AUTO_INCREMENT=4 ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
