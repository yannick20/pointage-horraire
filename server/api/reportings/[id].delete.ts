import reportingsService from '@/server/api/services/reportings/index';

export default defineEventHandler(async (event) => {
  try {
    const id = event.context.params?.id as string;
    await reportingsService.deleteReportingsById(parseInt(id));
    return { "message" : "Le rapport horaire a été supprimé"};
  } catch (e: any) {
    throw createError({
      statusCode: 400,
      statusMessage: e.message,
    });
  }
});