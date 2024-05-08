import { users, InsertUser, agences } from "@/db/schema";
import { db } from "@/server/api/services/sqlite-service";
import { eq, count, or } from "drizzle-orm";

class UserService {
  public async getAllUsers() {
    const usersAll = db.select({
      id: users.id,
      nom: users.nom,
      prenom: users.prenom,
      phone: users.phone,
      fonction: users.fonction,
      quartier: users.quartier,
      role: users.role,
      agencesId: users.agencesId,
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

  public async getUserById(id: number) {
    const user = db.select().from(users).where(eq(users.id, id)).get();
    return user;
  }

  public async getUserCount() {
    const usercount = db.select().from(users).all();
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
