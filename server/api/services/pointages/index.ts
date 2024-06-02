import { pointages, InsertPointages, users, agences } from "@/db/schema";
import { db } from "@/server/api/services/sqlite-service";
import { eq, and } from "drizzle-orm";
import { format, subMonths } from "date-fns";
import { fr } from "date-fns/locale";

class PointagesService {
  public async getAllPointages() {
    //dayjs().format()
    // console.log(format(new Date(), 'dd/MM/yyyy', { locale: fr }));
    // console.log(format(new Date(), 'dd', { locale: fr }));
    // console.log(format(new Date(), 'MM', { locale: fr }));
    // console.log(format(new Date(), 'yyyy', { locale: fr }));
    const itemAll = db
      .select()
      .from(pointages)
      .leftJoin(users, eq(pointages.userId, users.id))
      .all();
    return itemAll;
  }

  public async getAllPointagesByIdReporting(id: number) {
    //dayjs().format()
    const itemAll = db
      .select()
      .from(pointages)
      .where(eq(pointages.reportingsId, id))
      .leftJoin(users, eq(pointages.userId, users.id))
      .all();
    return itemAll;
  }

  public async getAllPointagesUsers(
    statusreportings: string,
    idreportings: number
  ) {
    if (statusreportings == "2") {
      //console.log("statusreportings " + statusreportings);

      const dateActuelle = format(new Date(), "yyyy-MM-dd", { locale: fr });

      // Retirer un mois
      const dateMoisPrécédent = subMonths(dateActuelle, 1);

      // Formater la nouvelle date
      const moisLastFormate = format(dateMoisPrécédent, "MM");

      const itemAll = db
        .select()
        .from(pointages)
        .where(
          and(
            eq(pointages.reportingsId, idreportings),
            eq(pointages.mois, moisLastFormate)
          )
        )
        .leftJoin(users, eq(pointages.userId, users.id))
        .all();

      //console.log("itemAll " + itemAll);

      return itemAll;
    } else {
      const todate = format(new Date(), "dd/MM/yyyy", { locale: fr });
      const itemAll = db
        .select()
        .from(pointages)
        .where(
          and(
            eq(pointages.reportingsId, idreportings),
            eq(pointages.dateComplet, todate)
          )
        )
        .leftJoin(users, eq(pointages.userId, users.id))
        .all();
      return itemAll;
    }
    //dayjs().format()
  }

  public async getAllPointagesUsersOnly() {
    //dayjs().format()
    const todate = format(new Date(), "dd/MM/yyyy", { locale: fr });
    const itemAll = db
      .select()
      .from(pointages)
      .where(eq(pointages.dateComplet, todate))
      .leftJoin(users, eq(pointages.userId, users.id))
      .leftJoin(agences, eq(pointages.agencesId, agences.id))
      .all();
    return itemAll;
  }

  public async getPointagesById(id: number) {
    const itemOne = db
      .select()
      .from(pointages)
      .where(eq(pointages.id, id))
      .get();
    return itemOne;
  }

  public async getPointagesByDate(item: string) {
    const itemUserOne = db
      .select()
      .from(pointages)
      .where(eq(pointages.dateComplet, item))
      .get();
    return itemUserOne;
  }

  public async getCheckPointages(id: number) {
    const itemUsers = db
      .select()
      .from(pointages)
      .where(eq(pointages.reportingsId, id))
      .all();
    return itemUsers;
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

  public async updatedPointagesObservation(editItem: string, itemId: string, idUser: number) {
    const itemUpdated = db
      .update(pointages)
      .set({ observation: editItem})
      .where(and(eq(pointages.id, parseInt(itemId)), eq(pointages.userId, idUser)))
      .run();
    return itemUpdated;
  }

  public async updatedPointagesSuccess(editItem: string, heureItem: string, itemId: string) {
    const itemUpdated = db
      .update(pointages)
      .set({ pointSuccess: parseInt(editItem), heureArrive: heureItem })
      .where(eq(pointages.id, parseInt(itemId)))
      .run();
    return itemUpdated;
  }

  public async updatedPointagesDanger(editItem: string, heureItem: string, itemId: string) {
    const itemUpdated = db
      .update(pointages)
      .set({ pointDanger: parseInt(editItem), heureArrive: heureItem })
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
