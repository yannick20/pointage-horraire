import { pointages, InsertPointages, users } from "@/db/schema";
import { db } from "@/server/api/services/sqlite-service";
import { eq, and } from "drizzle-orm";
import { format } from 'date-fns'
import { fr } from 'date-fns/locale'

class PointagesService {
  public async getAllPointages() {
    //dayjs().format()
    // console.log(format(new Date(), 'dd/MM/yyyy', { locale: fr }));
    // console.log(format(new Date(), 'dd', { locale: fr }));
    // console.log(format(new Date(), 'MM', { locale: fr }));
    // console.log(format(new Date(), 'yyyy', { locale: fr }));
    const itemAll = db.select().from(pointages).leftJoin(users, eq(pointages.userId, users.id)).all();
    return itemAll;
  }

  public async getAllPointagesByIdReporting(id: number) {
    //dayjs().format()
    const itemAll = db.select().from(pointages).where(eq(pointages.reportingsId, id)).leftJoin(users, eq(pointages.userId, users.id)).all();
    return itemAll;
  }

  public async getAllPointagesUsers(id: number) {
    //dayjs().format()
    const todate = format(new Date(), 'dd/MM/yyyy', { locale: fr });
    const itemAll = db.select().from(pointages).where(and(eq(pointages.agencesId, id), eq(pointages.dateComplet, todate))).leftJoin(users, eq(pointages.userId, users.id)).all();
    return itemAll;
  }

  public async getPointagesById(id: number) {
    const itemOne = db.select().from(pointages).where(eq(pointages.id, id)).get();
    return itemOne;
  }

  public async getPointagesByDate(item: string) {
    const itemUserOne = db.select().from(pointages).where(eq(pointages.dateComplet, item)).get();
    return itemUserOne;
  }

  public async postPointages(insertItem: InsertPointages) {
    const itemPost = db.insert(pointages).values(insertItem).returning().all();
    return itemPost;
  }

  public async updatedPointages(editItem: InsertPointages, itemId: string) {
    const itemUpdated = db
      .update(pointages)
      .set(editItem)
      .where(eq(pointages.id, parseInt(itemId)))
      .run();
    return itemUpdated;
  }

  public async deletePointagesById(id: number) {
    const itemDeleted = db.delete(pointages).where(eq(pointages.id, id)).run();
    return itemDeleted;
  }

}

export default new PointagesService();
