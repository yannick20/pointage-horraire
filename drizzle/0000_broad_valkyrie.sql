CREATE TABLE `agences` (
	`id` integer PRIMARY KEY NOT NULL,
	`libelle` text,
	`ville` text,
	`quartier` text,
	`heuredebut_travail` text,
	`heurefin_travail` text,
	`status` integer DEFAULT 1,
	`created_at` text DEFAULT CURRENT_TIMESTAMP
);
--> statement-breakpoint
CREATE TABLE `pointages` (
	`id` integer PRIMARY KEY NOT NULL,
	`date_complet` text,
	`mois` text,
	`jour` text,
	`annee` text,
	`heure_arrive` text,
	`heure_depart` text,
	`point_success` integer,
	`point_danger` integer,
	`observation` text DEFAULT '',
	`satisfration_agent` text DEFAULT '',
	`reportings_id` integer,
	`agences_id` integer,
	`status` integer DEFAULT 1,
	`user_id` integer,
	`created_at` text DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY (`reportings_id`) REFERENCES `reportings`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`agences_id`) REFERENCES `agences`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `reportings` (
	`id` integer PRIMARY KEY NOT NULL,
	`date_complet` text,
	`mois` text,
	`jour` text,
	`annee` text,
	`compte_nbre` integer,
	`recompense` integer,
	`total_agent` integer,
	`agences_id` integer,
	`status` integer DEFAULT 1,
	`created_at` text DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY (`agences_id`) REFERENCES `agences`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` integer PRIMARY KEY NOT NULL,
	`nom` text,
	`prenom` text,
	`phone` text,
	`fonction` integer,
	`quartier` text,
	`role` text,
	`password` text,
	`status` integer DEFAULT 1,
	`agences_id` integer,
	`created_at` text DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY (`agences_id`) REFERENCES `agences`(`id`) ON UPDATE no action ON DELETE no action
);
