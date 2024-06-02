import reportingsService from '@/server/api/services/reportings/index';
import pointagesService from '@/server/api/services/pointages/index';

export default defineEventHandler(async (event) => {
  try {
    const id = event.context.params?.id as string;

    const itemVerif = await pointagesService.getCheckPointages(parseInt(id));

    if(itemVerif.length >= 1){
      throw createError({
        statusCode: 400,
        statusMessage: `Impossible de supprimé le rapport horaire car elle contient des pointages en cours!`,
      });
    }

   await reportingsService.deleteReportingsById(parseInt(id));

   //console.log(itemVerif.length)

    return { "message" : "Le rapport horaire a été supprimé"};

  } catch (e: any) {
    throw createError({
      statusCode: 400,
      statusMessage: e.message,
    });
  }
});