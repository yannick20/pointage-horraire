import reportingsService from '@/server/api/services/reportings/index';
import pointagesService from '@/server/api/services/pointages/index';

export default defineEventHandler(async (event) => {
  const pointagesAll = await pointagesService.getAllPointagesUsersOnly();
  //console.log(idheaders)
  return pointagesAll;
});