import reportingsService from '@/server/api/services/reportings/index';
import { InsertReportings, InsertPointages } from "@/db/schema";
import userService from '@/server/api/services/users/index';
import { format } from 'date-fns'
import { fr } from 'date-fns/locale'
import pointagesService from '@/server/api/services/pointages/index';

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    const dateVerif = format(new Date(), 'dd/MM/yyyy', { locale: fr });

  // //Verification user
  const itemVerif = await reportingsService.getReportingsByDate(dateVerif);
  if(itemVerif){
    throw createError({
      statusCode: 400,
      statusMessage: "Ce suivi d'horaire existe déja!",
    });
  }

  const itemVerifMois = await reportingsService.getReportingsByMois(format(new Date(), 'MM', { locale: fr }), format(new Date(), 'yyyy'));

  if(itemVerifMois){
    throw createError({
      statusCode: 400,
      statusMessage: "Ce suivi d'horaire pour ce mois-ci existe déja!",
    });
  }

  const userCount = await userService.getUserCount(body.agencesId);

  //console.log(body.agencesId)

  const userid = await userService.getAllUsersId(body.agencesId);

  //console.log(userid)

  if(userid.length == 0){
    throw createError({
      statusCode: 400,
      statusMessage: "Cet agence n'a pas d'agent, svp ajouter au moin un agent!",
    });
  }

  //element body
  const newItem: InsertReportings = {
    ...body,
    dateComplet: format(new Date(), 'dd/MM/yyyy', { locale: fr }),
    mois: format(new Date(), 'MM', { locale: fr }),
    annee: format(new Date(), 'yyyy'),
    jour: format(new Date(), 'dd'),
    totalAgent: userCount,
  }

  //insertion data
  const itemResponse = await reportingsService.postReportings(newItem);

  //const itemReporting: InsertReportings = itemResponse;


  //console.log(itemReporting.id)
  
  return { "message" : "Le rapport horaire a été crée", itemResponse};

  } catch (e: any) {
    throw createError({
      statusCode: 400,
      statusMessage: e.message,
    });
  }
  
});