import reportingsService from '@/server/api/services/reportings/index';

export default defineEventHandler(async () => {
  const agences = await reportingsService.getAllReportings();
  return agences
});
