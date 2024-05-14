import reportingsService from '@/server/api/services/reportings/index';
import pointagesService from '@/server/api/services/pointages/index';

export default defineEventHandler(async (event) => {
  const reportingOne = await reportingsService.getReportingsByLast();

  if (reportingOne?.status == 2) {
    return {status: reportingOne?.status, message: 'Ce reporting est deja a jour'};
  }


  await reportingsService.updatedReportingsLast();
  //console.log(idheaders)
  return { message: 'Ce reporting est maintenant a jour'};

});