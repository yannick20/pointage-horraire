import reportingsService from '@/server/api/services/reportings/index';
import pointagesService from '@/server/api/services/pointages/index';

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
  
  await pointagesService.updatedPointagesObservation(body.keyObservation, body.keyid, body.keyiduser);
  // console.log(idheaders)
  // console.log(pointSuccess)
  // console.log(heureArrive)
  return {"message" : "Vous avez donner votre observation!",};
  
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Erreur de pointage',
    });
  }
});