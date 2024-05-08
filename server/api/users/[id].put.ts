import userService from '@/server/api/services/users/index';
import { InsertUser } from "@/db/schema";

export default defineEventHandler(async (event) => {
  try {
    const id = event.context.params?.id as string;

    const body = await readBody(event);
    //element body
    const newItem: InsertUser = {
      ...body
    }

    const itemResponse = await userService.updatedUser(newItem, id);
    return { "message" : "L'utilisateur a été mise a jour", itemResponse};

  } catch (e: any) {
    throw createError({
      statusCode: 400,
      statusMessage: e.message,
    });
  }
});