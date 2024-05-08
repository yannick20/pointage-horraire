import agencesService from '@/server/api/services/agences/index';

export default defineEventHandler(async (event) => {
  try {
    const id = event.context.params?.id as string;
    await agencesService.deleteAgencesById(parseInt(id));
    return { "message" : "L'agence a été supprimé"};
  } catch (e: any) {
    throw createError({
      statusCode: 400,
      statusMessage: e.message,
    });
  }
});