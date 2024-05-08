import agencesService from '@/server/api/services/agences/index';

export default defineEventHandler(async () => {
  const agences = await agencesService.getAllAgences();
  return agences
});