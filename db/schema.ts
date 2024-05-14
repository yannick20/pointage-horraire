import { type InferModel, sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const agences = sqliteTable("agences", {
  id: integer("id").primaryKey(),
  libelle: text("libelle"),
  ville: text("ville"),
  quartier: text("quartier"),
  heuredebutTravail: text("heuredebut_travail"),
  heuredefinTravail: text("heurefin_travail"),
  status: integer("status").default(1),
  createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`),
});

export const users = sqliteTable("users", {
  id: integer("id").primaryKey(),
  nom: text("nom"),
  prenom: text("prenom"),
  phone: text("phone"),
  fonction: integer("fonction"),
  quartier: text("quartier"),
  role: text("role"),
  password: text("password"),
  status: integer("status").default(1),
  agencesId: integer('agences_id').references(() => agences.id),
  createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`),
});

export const reportings = sqliteTable('reportings', {
  id: integer('id').primaryKey(),
  dateComplet: text('date_complet'),
  mois: text('mois'),
  jour: text('jour'),
  annee: text('annee'),
  compteNbre: integer('compte_nbre'),
  recompense: integer('recompense'),
  totalAgent: integer('total_agent'),
  agencesId: integer('agences_id').references(() => agences.id),
  status: integer("status").default(1),
  // userId: integer('user_id').references(() => users.id),
  createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`),
});

//068789430 

export const pointages = sqliteTable('pointages', {
  id: integer('id').primaryKey(),
  dateComplet: text('date_complet'),
  mois: text('mois'),
  jour: text('jour'),
  annee: text('annee'),
  heureArrive: text('heure_arrive'),
  heureDepart: text('heure_depart'),
  pointSuccess: integer('point_success'),
  pointDanger: integer('point_danger'),
  observation: text("observation").default(''),
  satisfrationAgent: text("satisfration_agent").default(''),
  reportingsId: integer('reportings_id').references(() => reportings.id),
  agencesId: integer('agences_id').references(() => agences.id),
  status: integer("status").default(1),
  userId: integer('user_id').references(() => users.id),
  createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`),
});


export type Agences = InferModel<typeof agences>;
export type InsertAgences = InferModel<typeof agences, "insert">;

export type User = InferModel<typeof users>;
export type InsertUser = InferModel<typeof users, "insert">;

export type Reportings = InferModel<typeof reportings>;
export type InsertReportings = InferModel<typeof reportings, "insert">;

export type Pointages = InferModel<typeof pointages>;
export type InsertPointages = InferModel<typeof pointages, "insert">;