import userService from '@/server/api/services/users/index';

export default defineEventHandler(async (event) => {
  const idheaders = event.headers.get("key-id") as string;
  const itemsAll = await userService.getAllUsersByIdAgence(parseInt(idheaders));
  //console.log(idheaders)
  return itemsAll;
});