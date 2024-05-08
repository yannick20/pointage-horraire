import { reportings, InsertReportings, pointages , users} from "@/db/schema";
import { db } from "@/server/api/services/sqlite-service";
import { eq } from "drizzle-orm";


class ReportingsService {
  public async getAllReportings() {
    const itemAll = db.select().from(reportings).all();
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

  public async deleteReportingsById(id: number) {
    const itemDeleted = db.delete(reportings).where(eq(reportings.id, id)).run();
    return itemDeleted;
  }
}

export default new ReportingsService();
