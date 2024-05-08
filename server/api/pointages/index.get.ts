import pointagesService from '@/server/api/services/pointages/index';

export default defineEventHandler(async () => {
  const items = await pointagesService.getAllPointages();
  return items;
});