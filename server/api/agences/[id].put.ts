import agencesService from '@/server/api/services/agences/index';
import { InsertAgences } from "@/db/schema";

export default defineEventHandler(async (event) => {
  try {
    const id = event.context.params?.id as string;

    const body = await readBody(event);
    //element body
    const newItem: InsertAgences = {
      ...body
    }

    const itemResponse = await agencesService.updatedAgences(newItem, id);
    return { "message" : "L'agence a a été mise a jour", itemResponse};

  } catch (e: any) {
    throw createError({
      statusCode: 400,
      statusMessage: e.message,
    });
  }
});