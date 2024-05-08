import agencesService from '@/server/api/services/agences/index';
import { InsertAgences } from "@/db/schema";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

  //Verification user
  const itemVerif = await agencesService.getAgencesByLibelle(body.libelle);
  if(itemVerif){
    throw createError({
      statusCode: 400,
      statusMessage: "Cet agence existe déja!",
    });
  }

  //element body
  const newItem: InsertAgences = {
    ...body
  }

  //insertion data
  const itemResponse = await agencesService.postAgences(newItem);
  
  return { "message" : "L'agence a été cree", itemResponse};

  } catch (e: any) {
    throw createError({
      statusCode: 400,
      statusMessage: e.message,
    });
  }
  
});