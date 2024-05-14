import reportingsService from '@/server/api/services/reportings/index';
import pointagesService from '@/server/api/services/pointages/index';

export default defineEventHandler(async (event) => {
  const statusreportings = event.headers.get("key-statusReportings") as string;
  const idreportings = event.headers.get("key-idreportings") as string;
  const pointagesAll = await pointagesService.getAllPointagesUsers(statusreportings,parseInt(idreportings));
  //console.log(idheaders)
  return pointagesAll;
});