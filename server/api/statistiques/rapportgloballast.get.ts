import statistiquesService from '~/server/api/services/statistiques';

export default defineEventHandler(async () => {
  const items = await statistiquesService.getAllRapportLast();
  return items
});