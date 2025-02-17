import moment from 'moment';

const GetToday = (format: string = 'YYYY-MM-DD hh:mm:ss.ss'): string => {
  return moment()
    .utcOffset(5.5 * 60)
    .format(format);
};

const ConvertToUTC = (
  date: string | number | Date,
  format: 'UTC' | 'DateTime',
  showFormate:string = "'YYYY-MM-DD HH:mm:ss'"
): any => {
  if (format === 'UTC') {
    return moment(date).utc().valueOf();
  } else if (format === 'DateTime') {
    return moment.utc(date).format(showFormate);
  }
};

export { ConvertToUTC, GetToday };

