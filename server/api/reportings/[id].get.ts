import reportingsService from '@/server/api/services/reportings/index';

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id as string;
  const agences = await reportingsService.getReportingsById(parseInt(id));
  return agences;
});