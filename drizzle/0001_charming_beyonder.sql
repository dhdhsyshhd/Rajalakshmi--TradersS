CREATE TABLE `bulkOrders` (
	`id` int AUTO_INCREMENT NOT NULL,
	`orderId` varchar(50) NOT NULL,
	`customerName` varchar(255) NOT NULL,
	`companyName` varchar(255),
	`mobileNumber` varchar(20) NOT NULL,
	`email` varchar(320),
	`deliveryAddress` text NOT NULL,
	`gstNumber` varchar(50),
	`notes` text,
	`items` text NOT NULL,
	`totalItems` int NOT NULL,
	`status` enum('pending','confirmed','processing','delivered','cancelled') NOT NULL DEFAULT 'pending',
	`adminNotes` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `bulkOrders_id` PRIMARY KEY(`id`),
	CONSTRAINT `bulkOrders_orderId_unique` UNIQUE(`orderId`)
);
--> statement-breakpoint
CREATE TABLE `categories` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`description` text,
	`image` varchar(500),
	`slug` varchar(255) NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `categories_id` PRIMARY KEY(`id`),
	CONSTRAINT `categories_name_unique` UNIQUE(`name`),
	CONSTRAINT `categories_slug_unique` UNIQUE(`slug`)
);
--> statement-breakpoint
CREATE TABLE `products` (
	`id` int AUTO_INCREMENT NOT NULL,
	`categoryId` int NOT NULL,
	`name` varchar(255) NOT NULL,
	`brand` varchar(255),
	`description` text,
	`specifications` text,
	`unit` varchar(100),
	`minimumOrderQuantity` int DEFAULT 1,
	`availability` varchar(50) DEFAULT 'In Stock',
	`image` varchar(500),
	`images` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `products_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `quoteRequests` (
	`id` int AUTO_INCREMENT NOT NULL,
	`requestId` varchar(50) NOT NULL,
	`customerName` varchar(255) NOT NULL,
	`companyName` varchar(255),
	`mobileNumber` varchar(20) NOT NULL,
	`email` varchar(320),
	`deliveryAddress` text NOT NULL,
	`gstNumber` varchar(50),
	`notes` text,
	`items` text NOT NULL,
	`status` enum('pending','quoted','converted','rejected') NOT NULL DEFAULT 'pending',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `quoteRequests_id` PRIMARY KEY(`id`),
	CONSTRAINT `quoteRequests_requestId_unique` UNIQUE(`requestId`)
);
--> statement-breakpoint
CREATE TABLE `reviews` (
	`id` int AUTO_INCREMENT NOT NULL,
	`customerName` varchar(255) NOT NULL,
	`rating` int NOT NULL,
	`comment` text,
	`verified` int DEFAULT 0,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `reviews_id` PRIMARY KEY(`id`)
);
