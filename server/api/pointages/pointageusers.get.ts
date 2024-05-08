import reportingsService from '@/server/api/services/reportings/index';
import pointagesService from '@/server/api/services/pointages/index';

export default defineEventHandler(async (event) => {
  const idheaders = event.headers.get("key-id") as string;
  const pointagesAll = await pointagesService.getAllPointagesUsers(parseInt(idheaders));
  //console.log(idheaders)
  return pointagesAll;
});