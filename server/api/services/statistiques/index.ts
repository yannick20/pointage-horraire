import { agences, InsertAgences, users, reportings, pointages, InsertPointages } from "@/db/schema";
import { db } from "@/server/api/services/sqlite-service";
import { eq, and } from "drizzle-orm";
import { format } from 'date-fns'
import { fr } from 'date-fns/locale'

class StatistiquesService {

  // Fonction pour calculer le nombre total de points d'un ensemble d'agents
  private calculerNombrePointSuccess(pointagesmodel: InsertPointages[]): number {
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

  private calculerNombrePoints(pointagesmodel: InsertPointages[]): any {
    let totalPointsDanger = 0;
    let totalPointsSuccess = 0;
    for (const item of pointagesmodel) {
      totalPointsDanger += item.pointDanger!;
      totalPointsSuccess += item.pointSuccess!;
    }
    return {totalPointsDanger, totalPointsSuccess};
  }

  // Fonction pour trouver l'agent avec le plus grand nombre de points
private trouverAgentPlusGrosPoints(pointagesmodel: InsertPointages[]): InsertPointages {
  let agentMaxPoints: InsertPointages | null = null;
  for (const item of pointagesmodel) {
      if (!agentMaxPoints || item.pointSuccess! > agentMaxPoints.pointSuccess!) {
          agentMaxPoints = item;
      }
  }
  if (agentMaxPoints === null) {
      throw new Error("Aucun agent trouvé");
  }
  return agentMaxPoints;
}

  // Fonction pour trouver l'agent avec le moins de points
  private trouverAgentMoinsPoints(pointagesmodel: InsertPointages[]): InsertPointages {
    let agentMaxPoints: InsertPointages | null = null;
    for (const item of pointagesmodel) {
        if (!agentMaxPoints || item.pointSuccess! < agentMaxPoints.pointSuccess!) {
            agentMaxPoints = item;
        }
    }
    if (agentMaxPoints === null) {
        throw new Error("Aucun agent trouvé");
    }
    return agentMaxPoints;
  }

  public async getAllCounts() {
    const todate = format(new Date(), 'dd/MM/yyyy', { locale: fr });

    const usercount = db.select().from(users).all();
    const reportingsCount = db.select().from(reportings).all();
    const agencesCount = db.select().from(agences).all();
    const pointagesCount = db.select().from(pointages).all();

    return {usercount: usercount.length, reportingsCount: reportingsCount.length, agencesCount: agencesCount.length, pointagesCount: pointagesCount.length};
  }

  public async getAllRapportOnly() {
    const todate = format(new Date(), 'dd/MM/yyyy', { locale: fr });

    const pointagesItems = db.select().from(pointages).where(eq(pointages.dateComplet, todate)).all();

    const totalPoints = this.calculerNombrePoints(pointagesItems);

    //const agentMaxPoints = trouverAgentPlusGrosPoints(agents);
    
    return {pointagesCount : pointagesItems.length, totalPoints};
  }

  public async getAllRapportLast() {
    const todate = format(new Date(), 'dd/MM/yyyy', { locale: fr });

    const pointagesItems = db.select().from(pointages).where(eq(pointages.dateComplet, todate)).all();

    const totalPoints = this.calculerNombrePoints(pointagesItems);

    //const agentMaxPoints = trouverAgentPlusGrosPoints(agents);
    
    return {pointagesCount : pointagesItems.length, totalPoints};
  }

 
}

export default new StatistiquesService();
