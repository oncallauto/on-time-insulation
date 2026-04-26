CREATE TABLE `quote_submissions` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`phone` varchar(20) NOT NULL,
	`email` varchar(320) NOT NULL,
	`suburb` varchar(255) NOT NULL,
	`propertyType` enum('new','old','commercial') NOT NULL,
	`serviceType` enum('removal','installation','replacement','other') NOT NULL,
	`message` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `quote_submissions_id` PRIMARY KEY(`id`)
);
