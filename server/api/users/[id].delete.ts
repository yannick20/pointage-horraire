import userService from '@/server/api/services/users/index';

export default defineEventHandler(async (event) => {
  try {
    const id = event.context.params?.id as string;
    await userService.deleteUserById(parseInt(id));
    return { "message" : "L'utilisateur a été supprimé"};
  } catch (e: any) {
    throw createError({
      statusCode: 400,
      statusMessage: e.message,
    });
  }
});