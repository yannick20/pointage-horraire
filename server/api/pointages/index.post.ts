import pointagesService from '@/server/api/services/pointages/index';
import { InsertPointages } from "@/db/schema";
import { format } from 'date-fns'
import { fr } from 'date-fns/locale'
import userService from '@/server/api/services/users/index';

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    const dateVerif = format(new Date(), 'dd/MM/yyyy', { locale: fr });

    // //Verification user
    const itemVerif = await pointagesService.getPointagesByDate(dateVerif);
    if(itemVerif){
      throw createError({
        statusCode: 400,
        statusMessage: `La fiche de pointage de la date ${dateVerif} existe déja!`,
      });
    }
  
    const userid = await userService.getAllUsersIdByRole(body.agencesId);
  
    if(userid.length == 0){
      throw createError({
        statusCode: 400,
        statusMessage: "Cet agence n'a pas d'agent, svp ajouter au moin un agent!",
      });
    }


  for (let index = 0; index < userid.length; index++) {
    const element = userid[index];
    //console.log(`user ${element.id}`)

    const newPointages: InsertPointages = {
      dateComplet: format(new Date(), 'dd/MM/yyyy', { locale: fr }),
      mois: format(new Date(), 'MM', { locale: fr }),
      annee: format(new Date(), 'yyyy'),
      jour: format(new Date(), 'dd'),
      pointSuccess: 0,
      pointDanger: 0,
      heureArrive: "",
      heureDepart: "",
      userId: element.id,
      reportingsId : body.reportingsId,
      agencesId: body.agencesId
    }

    await pointagesService.postPointages(newPointages);
    
    
  }

  //element body
  // const newItem: InsertPointages = {
  //   ...body,
  //   dateComplet: format(new Date(), 'dd/MM/yyyy', { locale: fr }),
  //   mois: format(new Date(), 'MM', { locale: fr }),
  //   annee: format(new Date(), 'yyyy'),
  //   jour: format(new Date(), 'dd'),
  //   pointSuccess: 0,
  //   pointDanger: 0,
  //   heureArrive: "",
  //   heureDepart: "",
  // }

  // //insertion data
  // const itemResponse = await pointagesService.postPointages(newItem);
  
  return { "message" : "Vous avez fait un pointage"};

  } catch (e: any) {
    throw createError({
      statusCode: 400,
      statusMessage: e.message,
    });
  }
  
});