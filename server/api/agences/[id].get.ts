import agencesService from '@/server/api/services/agences/index';

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id as string;
  const agences = await agencesService.getAgencesById(parseInt(id));
  return agences;
});