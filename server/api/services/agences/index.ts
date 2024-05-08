import { agences, InsertAgences, users } from "@/db/schema";
import { db } from "@/server/api/services/sqlite-service";
import { eq } from "drizzle-orm";

class AgenceService {
  public async getAllAgences() {
    const itemAll = db.select().from(agences).all();
    return itemAll;
  }

  public async getAgencesById(id: number) {
    const itemUserOne = db.select().from(agences).where(eq(agences.id, id)).get();
    return itemUserOne;
  }

  public async getAgencesByLibelle(libelle: string) {
    const itemUserOne = db.select().from(agences).where(eq(agences.libelle, libelle)).get();
    return itemUserOne;
  }

  public async postAgences(insertItem: InsertAgences) {
    const itemPost = db.insert(agences).values(insertItem).returning().get();
    return itemPost;
  }

  public async updatedAgences(editItem: InsertAgences, itemId: string) {
    const itemUpdated = db
      .update(agences)
      .set(editItem)
      .where(eq(agences.id, parseInt(itemId)))
      .run();
    return itemUpdated;
  }

  public async deleteAgencesById(id: number) {
    const itemDeleted = db.delete(agences).where(eq(agences.id, id)).run();
    return itemDeleted;
  }
}

export default new AgenceService();
