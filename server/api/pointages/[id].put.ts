import pointagesService from '@/server/api/services/pointages/index';
import { InsertPointages } from "@/db/schema";

export default defineEventHandler(async (event) => {
  try {
    const id = event.context.params?.id as string;

    const body = await readBody(event);
    //element body
    const newItem: InsertPointages = {
      ...body
    }

    const itemResponse = await pointagesService.updatedPointages(newItem, id);
    return { "message" : "Le pointage a été mise a jour", itemResponse};

  } catch (e: any) {
    throw createError({
      statusCode: 400,
      statusMessage: e.message,
    });
  }
});