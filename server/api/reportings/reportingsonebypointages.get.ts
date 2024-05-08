import reportingsService from '@/server/api/services/reportings/index';
import pointagesService from '@/server/api/services/pointages/index';

export default defineEventHandler(async (event) => {
  const idheaders = event.headers.get("key-id") as string;
  const reportingOne = await reportingsService.getReportingsById(parseInt(idheaders));
  const pointagesAll = await pointagesService.getAllPointagesByIdReporting(parseInt(idheaders));
  //console.log(idheaders)
  return {reportingOne, pointagesAll};
});