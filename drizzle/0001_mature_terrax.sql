ALTER TABLE users ADD `heuredebut_travail` text;--> statement-breakpoint
ALTER TABLE users ADD `heure_retard` text;--> statement-breakpoint
ALTER TABLE `agences` DROP COLUMN `heuredebut_travail`;--> statement-breakpoint
ALTER TABLE `agences` DROP COLUMN `heurefin_travail`;