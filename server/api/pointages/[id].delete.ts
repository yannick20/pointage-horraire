import pointagesService from '@/server/api/services/pointages/index';

export default defineEventHandler(async (event) => {
  try {
    const id = event.context.params?.id as string;
    await pointagesService.deletePointagesById(parseInt(id));
    return { "message" : "Le pointage a été supprimé"};
  } catch (e: any) {
    throw createError({
      statusCode: 400,
      statusMessage: e.message,
    });
  }
});