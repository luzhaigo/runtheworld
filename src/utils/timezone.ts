import dayjs from 'libs/dayjs';

export const getGMToffset = () =>
  dayjs()
    .format()
    .match(/(\+\d{2}:\d{2})/)?.[1] ?? '+00:00';

export const getCity = () => dayjs.tz.guess().match(/\/(\w+)/)?.[1] ?? '';
