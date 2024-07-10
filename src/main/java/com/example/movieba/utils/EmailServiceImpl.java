package com.example.movieba.utils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;

import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;

@Component
public class EmailServiceImpl {
	@Autowired
	private JavaMailSender mailSender;



	public void sendSimpleEmail(String toEmail, String subject, String body)
	{
		SimpleMailMessage message = new SimpleMailMessage();
		message.setFrom("trinhgianhsoi@gmail.com");

		message.setTo(toEmail);
		message.setText(body);
		message.setSubject(subject);
		mailSender.send(message);
		System.out.println("Mail Send...");


	}
}