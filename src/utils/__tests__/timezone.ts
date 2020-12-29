import { getGMToffset, getCity } from '../timezone';
import dayjs from 'libs/dayjs';

jest.mock('../../libs/dayjs', () => {
  const format = jest.fn();
  const guess = jest.fn();
  const mockDayjs = function () {
    return { format };
  };
  mockDayjs.tz = {
    guess,
  };
  return mockDayjs;
});

describe('getGMToffset', () => {
  test('get the offset successfully', () => {
    (dayjs().format as jest.Mock).mockImplementation(
      () => '2020-12-26T18:30:00+08:00',
    );
    expect(getGMToffset()).toBe('+08:00');
  });

  test('get the default offset', () => {
    (dayjs().format as jest.Mock).mockImplementation(() => '2020-12-26T18:30+');
    expect(getGMToffset()).toBe('+00:00');
  });
});

describe('getCity', () => {
  test('get the city successfully', () => {
    (dayjs.tz.guess as jest.Mock).mockImplementation(() => 'Asia/Taipei');
    expect(getCity()).toBe('Taipei');
  });

  test('get the empty string if can not guess the timezone', () => {
    (dayjs.tz.guess as jest.Mock).mockImplementation(() => 'Asia/');
    expect(getCity()).toBe('');
  });
});
