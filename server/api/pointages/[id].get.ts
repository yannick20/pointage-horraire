import pointagesService from '@/server/api/services/pointages/index';

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id as string;
  const item = await pointagesService.getPointagesById(parseInt(id));
  return item;
});