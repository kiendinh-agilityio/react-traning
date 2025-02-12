import dayjs from 'dayjs';
import { formatDate, currentYear, profileAuthor, validateDate } from '@/utils';
import { DATE_FORMAT } from '@/constants';

describe('Utils Functions', () => {
  test('formatDate should format date correctly', () => {
    const date = '2024-02-12T10:00:00.000Z';
    const formattedDate = formatDate(date, DATE_FORMAT.SECONDARY);
    expect(formattedDate).toBe(dayjs(date).format(DATE_FORMAT.SECONDARY));
  });

  test('currentYear should return the correct year', () => {
    expect(currentYear).toBe(new Date().getFullYear());
  });

  test('profileAuthor should have default values and valid date format', () => {
    expect(profileAuthor).toEqual({
      id: '',
      name: '',
      email: '',
      avatarUrl: '',
      position: 'Organization',
      roles: 'Manager',
      status: 'Active',
      date: expect.any(String),
    });
    expect(validateDate(profileAuthor.date, DATE_FORMAT.SECONDARY)).toBe(true);
  });

  test('validateDate should return true for valid date format', () => {
    const validDate = '2024-02-12';
    expect(validateDate(validDate, 'YYYY-MM-DD')).toBe(true);
  });

  test('validateDate should return false for invalid date', () => {
    const invalidDate = '2024-02-30';
    expect(validateDate(invalidDate, 'YYYY-MM-DD')).toBe(false);
  });

  test('validateDate should return false for incorrect format', () => {
    const incorrectFormatDate = '12-02-2024';
    expect(validateDate(incorrectFormatDate, 'YYYY-MM-DD')).toBe(false);
  });

  test('validateDate should return false for year < 1000', () => {
    const oldDate = '0999-12-31';
    expect(validateDate(oldDate, 'YYYY-MM-DD')).toBe(false);
  });
});
