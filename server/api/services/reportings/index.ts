import { reportings, InsertReportings, pointages , users, agences} from "@/db/schema";
import { db } from "@/server/api/services/sqlite-service";
import { eq, and } from "drizzle-orm";
import { format, subMonths } from "date-fns";
import { fr } from "date-fns/locale";


class ReportingsService {
  public async getAllReportings() {
    const itemAll = db.select().from(reportings).leftJoin(agences, eq(reportings.agencesId, agences.id)).all();
    return itemAll;
  }

  public async getReportingsById(id: number) {
    const itemUserOne = db.select().from(reportings).where(eq(reportings.id, id)).get();
    return itemUserOne;
  }

  public async getReportingsByDate(libelle: string) {
    const itemUserOne = db.select().from(reportings).where(eq(reportings.dateComplet, libelle)).get();
    return itemUserOne;
  }

  public async getReportingsByMois(mois: string, annee: string) {
    const itemUserOne = db.select().from(reportings).where(and(eq(reportings.mois, mois), eq(reportings.annee, annee))).get();
    return itemUserOne;
  }

  public async postReportings(insertItem: InsertReportings) {
    const itemPost = db.insert(reportings).values(insertItem).returning().get();
    return itemPost;
  }

  public async updatedReportings(editItem: InsertReportings, itemId: string) {
    const itemUpdated = db
      .update(reportings)
      .set(editItem)
      .where(eq(reportings.id, parseInt(itemId)))
      .run();
    return itemUpdated;
  }

  public async getReportingsByLast() {
    
    const dateActuelle = format(new Date(), "yyyy-MM-dd", { locale: fr });

    // Retirer un mois
    const dateMoisPrécédent = subMonths(dateActuelle, 1);

    // Formater la nouvelle date
    const lastMoisFormate = format(dateMoisPrécédent, "MM");

    const itemUserOne = db.select().from(reportings).where(eq(reportings.mois, lastMoisFormate)).get();
    return itemUserOne;
  }

  public async updatedReportingsLast() {

    const dateActuelle = format(new Date(), "yyyy-MM-dd", { locale: fr });

    // Retirer un mois
    const dateMoisPrécédent = subMonths(dateActuelle, 1);

    // Formater la nouvelle date
    const lastMoisFormate = format(dateMoisPrécédent, "MM");

    const itemUpdated = db
      .update(reportings)
      .set({status: 2})
      .where(eq(reportings.mois, lastMoisFormate))
      .run();
    return itemUpdated;
  }

  public async deleteReportingsById(id: number) {
    const itemDeleted = db.delete(reportings).where(eq(reportings.id, id)).run();
    return itemDeleted;
  }
}

export default new ReportingsService();
