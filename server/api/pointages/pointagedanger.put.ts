import reportingsService from '@/server/api/services/reportings/index';
import pointagesService from '@/server/api/services/pointages/index';

export default defineEventHandler(async (event) => {
  try {
    // const idheaders = event.headers.get("key-id") as string;
    // const pointDanger = event.headers.get("key-pointDanger") as string;
    // const heureArrive = event.headers.get("key-heureArrive") as string;
    const body = await readBody(event);

    await pointagesService.updatedPointagesDanger(body.keypointDanger, body.keyheureArrive, body.keyid);
  //  console.log(body.keyheureArrive)
  //  console.log(body.keypointDanger)
  //  console.log(body.keyid)
  //  console.log(pointDanger)
  //  console.log(heureArrive)
    return {"message" : "Vous avez marquer votre presence!",};
    
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Erreur de pointage',
    });
  }
  
});