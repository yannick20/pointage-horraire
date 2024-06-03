import {
  agences,
  InsertAgences,
  users,
  reportings,
  pointages,
  InsertPointages,
  InsertUser,
} from "@/db/schema";
import { db } from "@/server/api/services/sqlite-service";
import { eq, sum } from "drizzle-orm";
import { format, subMonths } from "date-fns";
import { fr } from "date-fns/locale";
import userService from "@/server/api/services/users/index";

class StatistiquesService {
  // Fonction pour calculer le nombre total de points d'un ensemble d'agents
  private calculerNombrePointSuccess(
    pointagesmodel: InsertPointages[]
  ): number {
    let totalPointsSuccess = 0;
    for (const item of pointagesmodel) {
      totalPointsSuccess += item.pointSuccess!;
    }
    return totalPointsSuccess;
  }

  private calculerNombrePointDanger(pointagesmodel: InsertPointages[]): number {
    let totalPointsDanger = 0;
    for (const item of pointagesmodel) {
      totalPointsDanger += item.pointDanger!;
    }
    return totalPointsDanger;
  }

  private calculerNombrePoints(pointagesmodel: any[]): any {
    let totalPointsDanger = 0;
    let totalPointsSuccess = 0;
    let tbusers = [];
    for (const item of pointagesmodel) {
      totalPointsDanger += item.pointages.pointDanger!;
      totalPointsSuccess += item.pointages.pointSuccess!;
      tbusers.push({
        id: item.pointages.userId,
        nomComplet: item.users.nom + " " + item.users.prenom,
        totalPointsSuccess: totalPointsSuccess,
        totalPointsDanger: totalPointsDanger,
      });
      //const cul = item.pointDanger
      //console.log(item.userId + ' =>'+ totalPointsSuccess);
    }
    return { totalPointsDanger, totalPointsSuccess, tbusers };
  }

  // Fonction pour trouver l'agent avec le plus grand nombre de points
  private trouverAgentPlusGrosPoints(
    pointagesmodel: InsertPointages[]
  ): InsertPointages {
    let agentMaxPoints: InsertPointages | null = null;
    for (const item of pointagesmodel) {
      if (
        !agentMaxPoints ||
        item.pointSuccess! > agentMaxPoints.pointSuccess!
      ) {
        agentMaxPoints = item;
      }
    }
    if (agentMaxPoints === null) {
      throw new Error("Aucun agent trouvé");
    }
    return agentMaxPoints;
  }

  // Fonction pour trouver l'agent avec le moins de points
  private trouverAgentMoinsPoints(
    pointagesmodel: InsertPointages[]
  ): InsertPointages {
    let agentMaxPoints: InsertPointages | null = null;
    for (const item of pointagesmodel) {
      if (
        !agentMaxPoints ||
        item.pointSuccess! < agentMaxPoints.pointSuccess!
      ) {
        agentMaxPoints = item;
      }
    }
    if (agentMaxPoints === null) {
      throw new Error("Aucun agent trouvé");
    }
    return agentMaxPoints;
  }

  public async getAllCounts() {
    const todate = format(new Date(), "dd/MM/yyyy", { locale: fr });

    const usercount = db.select().from(users).all();
    const reportingsCount = db.select().from(reportings).all();
    const agencesCount = db.select().from(agences).all();
    const pointagesCount = db.select().from(pointages).all();

    return {
      usercount: usercount.length,
      reportingsCount: reportingsCount.length,
      agencesCount: agencesCount.length,
      pointagesCount: pointagesCount.length,
    };
  }

  public async getAllRapportOnly() {
    const todate = format(new Date(), "dd/MM/yyyy", { locale: fr });

    const itemAll = db
      .select()
      .from(pointages)
      .where(eq(pointages.dateComplet, todate))
      .leftJoin(users, eq(pointages.userId, users.id))
      .all();

    const pointagesItems = db
      .select()
      .from(pointages)
      .where(eq(pointages.dateComplet, todate))
      .all();

    const totalPoints = this.calculerNombrePoints(itemAll);

    const agentMoinsPoints = this.trouverAgentMoinsPoints(pointagesItems);

    //console.log(totalPoints);
    const usersAllOnly = totalPoints.tbusers.length;

    const agentMaxPoints = this.trouverAgentPlusGrosPoints(pointagesItems);

    const itemUser = await userService.getUserById(agentMaxPoints.userId!);
    const itemUserMoin = await userService.getUserById(
      agentMoinsPoints.userId!
    );
    //const itemUser = db.select().from(users).where(eq(users.id, agentMaxPoints.userId!)).get();

    //console.log(itemUser?.id);

    const agentMaxPointOnlyn = {
      id: itemUser?.id,
      nomComplet: itemUser?.nom + " " + itemUser?.prenom,
      totalPointsSuccess: agentMaxPoints.pointSuccess,
    };

    const agentMoinPointOnlyn = {
      id: itemUserMoin?.id,
      nomComplet: itemUserMoin?.nom + " " + itemUserMoin?.prenom,
      totalPointsDanger: agentMoinsPoints.pointDanger,
    };

    return {
      totalUsers: usersAllOnly,
      agentMaxPointOnlyn,
      agentMoinPointOnlyn,
    };
  }

  public async getAllRapportLast() {
    const dateActuelle = format(new Date(), "yyyy-MM-dd", { locale: fr });

    // Retirer un mois
    const dateMoisPrécédent = subMonths(dateActuelle, 1);

    // Formater la nouvelle date
    const moisPrécédentFormate = format(dateMoisPrécédent, "MM");

    const itemAll = db
      .select()
      .from(pointages)
      .where(eq(pointages.mois, moisPrécédentFormate))
      .leftJoin(users, eq(pointages.userId, users.id))
      .all();

    const pointagesItems = db
      .select()
      .from(pointages)
      .where(eq(pointages.mois, moisPrécédentFormate))
      .all();

    const reportingsCount = db.select({ value: sum(reportings.recompense) }).from(reportings).where(eq(reportings.mois, moisPrécédentFormate)).all();

    const totalPoints = this.calculerNombrePoints(itemAll);

    const agentMoinsPoints = this.trouverAgentMoinsPoints(pointagesItems);

    //console.log(totalPoints);
    const usersAllOnly = totalPoints.tbusers.length;

    const agentMaxPoints = this.trouverAgentPlusGrosPoints(pointagesItems);

    const itemUser = await userService.getUserById(agentMaxPoints.userId!);
    const itemUserMoin = await userService.getUserById(
      agentMoinsPoints.userId!
    );
    //const itemUser = db.select().from(users).where(eq(users.id, agentMaxPoints.userId!)).get();

    //console.log(itemUser?.id);

    const agentMaxPointOnlyn = {
      id: itemUser?.id,
      nomComplet: itemUser?.nom + " " + itemUser?.prenom,
      totalPointsSuccess: agentMaxPoints.pointSuccess,
    };

    const agentMoinPointOnlyn = {
      id: itemUserMoin?.id,
      nomComplet: itemUserMoin?.nom + " " + itemUserMoin?.prenom,
      totalPointsDanger: agentMoinsPoints.pointDanger,
    };

    const reportingsSum = reportingsCount[0]['value']

    return {
      totalReportingsSum: reportingsSum,
      agentMaxPointOnlyn,
      agentMoinPointOnlyn,
    };
  }

  public async getAllRapportToDay() {
    const todate = format(new Date(), "dd/MM/yyyy", { locale: fr });

    const itemAll = db
      .select()
      .from(pointages)
      .where(eq(pointages.dateComplet, todate))
      .leftJoin(users, eq(pointages.userId, users.id))
      .all();

    const pointagesItems = db
      .select()
      .from(pointages)
      .where(eq(pointages.dateComplet, todate))
      .all();

    const totalPoints = this.calculerNombrePoints(itemAll);

    const agentMoinsPoints = this.trouverAgentMoinsPoints(pointagesItems);

    //console.log(totalPoints);
    const usersAllOnly = totalPoints.tbusers.length;

    const agentMaxPoints = this.trouverAgentPlusGrosPoints(pointagesItems);

    const itemUser = await userService.getUserById(agentMaxPoints.userId!);
    const itemUserMoin = await userService.getUserById(
      agentMoinsPoints.userId!
    );
    //const itemUser = db.select().from(users).where(eq(users.id, agentMaxPoints.userId!)).get();

    //console.log(itemUser?.id);

    const agentMaxPointOnlyn = {
      id: itemUser?.id,
      nomComplet: itemUser?.nom + " " + itemUser?.prenom,
      totalPointsSuccess: agentMaxPoints.pointSuccess,
    };

    const agentMoinPointOnlyn = {
      id: itemUserMoin?.id,
      nomComplet: itemUserMoin?.nom + " " + itemUserMoin?.prenom,
      totalPointsDanger: agentMoinsPoints.pointDanger,
    };

    return {
      totalUsers: usersAllOnly,
      agentMaxPointOnlyn,
      agentMoinPointOnlyn,
    };
  }

}

export default new StatistiquesService();
