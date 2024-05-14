import reportingsService from '@/server/api/services/reportings/index';
import pointagesService from '@/server/api/services/pointages/index';

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
  
  await pointagesService.updatedPointagesSuccess(body.keypointSuccess, body.keyheureArrive, body.keyid);
  // console.log(idheaders)
  // console.log(pointSuccess)
  // console.log(heureArrive)
  return {"message" : "Vous avez marquer votre presence!",};
  
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Erreur de pointage',
    });
  }
});