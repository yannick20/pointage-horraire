import userService from '@/server/api/services/users/index';

export default defineEventHandler(async () => {
  
  const users = await userService.getAllUsers();
  return users
});