import { users, InsertUser, agences } from "@/db/schema";
import { db } from "@/server/api/services/sqlite-service";
import { eq, count, or, and } from "drizzle-orm";

class UserService {

  private nombreDeJoursDansMois(mois: number, année: number): number {
    return new Date(année, mois, 0).getDate();
}

  public async getAllUsers() {

//     const mois = 4; // Février (numéroté de 0 à 11)
// const année = 2024;
// const jours = this.nombreDeJoursDansMois(mois, année);
// console.log(`Le mois ${mois} de l'année ${année} a ${jours} jours.`);

    const usersAll = db.select({
      id: users.id,
      nom: users.nom,
      prenom: users.prenom,
      phone: users.phone,
      fonction: users.fonction,
      quartier: users.quartier,
      role: users.role,
      agencesId: users.agencesId,
      heuredebutTravail: users.heuredebutTravail,
      heureRetard: users.heureRetard,
      status: users.status,
    }).from(users).all();
    return usersAll;
  }

  public async getAllUsersId(id: number) {
    const usersAll = db.select({
      id: users.id,
    }).from(users).where(eq(users.agencesId, id)).all();
    return usersAll;
  }

  public async getAllUsersIdByRole(id: number) {
    const usersAll = db.select({
      id: users.id,
    }).from(users).where(and(eq(users.agencesId, id), eq(users.role, 'Utilisateur'))).all();
    return usersAll;
  }

  public async getUserById(id: number) {
    const user = db.select().from(users).where(eq(users.id, id)).get();
    return user;
  }

  public async getUserCount(id: number) {
    const usercount = db.select().from(users).where(and(eq(users.agencesId, id), eq(users.role, 'Utilisateur'))).all();
    //console.log(usercount.length)
    return usercount.length;
  }

  public async getUserByPhone(phone: string) {
    const itemUserOne = db.select().from(users).where(eq(users.phone, phone)).get();
    return itemUserOne;
  }

  public async postUser(insertUser: InsertUser) {
    const user = db.insert(users).values(insertUser).returning().all();
    return user;
  }

  public async getAllUsersByIdAgence(id: number) {
    //dayjs().format()
    const itemAll = db.select({
      id: users.id,
      nom: users.nom,
      prenom: users.prenom,
      phone: users.phone,
      fonction: users.fonction,
      quartier: users.quartier,
      role: users.role,
      agencesId: users.agencesId,
      heuredebutTravail: users.heuredebutTravail,
      heureRetard: users.heureRetard,
      status: users.status,
    }).from(users).where(eq(users.agencesId, id)).all();
    return itemAll;
  }

  public async updatedUser(editUser: InsertUser, userId: string) {
    const userUpdated = db
      .update(users)
      .set(editUser)
      .where(eq(users.id, parseInt(userId)))
      .run();
    return userUpdated;
  }

  public async deleteUserById(id: number) {
    const userDeleted = db.delete(users).where(eq(users.id, id)).run();
    return userDeleted;
  }
}

export default new UserService();
