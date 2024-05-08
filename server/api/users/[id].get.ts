import userService from '@/server/api/services/users/index';

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id as string;
  const items = await userService.getUserById(parseInt(id));
  return items;
});