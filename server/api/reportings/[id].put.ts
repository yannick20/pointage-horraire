import reportingsService from '@/server/api/services/reportings/index';
import { InsertReportings } from "@/db/schema";

export default defineEventHandler(async (event) => {
  try {
    const id = event.context.params?.id as string;

    const body = await readBody(event);
    //element body
    const newItem: InsertReportings = {
      ...body
    }

    const itemResponse = await reportingsService.updatedReportings(newItem, id);
    return { "message" : "Le rapport horaire a été mise a jour", itemResponse};

  } catch (e: any) {
    throw createError({
      statusCode: 400,
      statusMessage: e.message,
    });
  }
});