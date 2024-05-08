import statistiquesService from '~/server/api/services/statistiques';

export default defineEventHandler(async () => {
  const items = await statistiquesService.getAllCounts();
  return items
});