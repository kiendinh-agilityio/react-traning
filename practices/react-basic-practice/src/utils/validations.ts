// Import dayjs
import dayjs from 'dayjs';

// Import types
import { Author, ErrorMessages } from '@/types';

// Import constants
import { MESSAGE_ERROR, REGEX, PROFILE_AUTHOR } from '@/constants';

// Interface to represent the validation result
interface ValidationResult {
  isValid: boolean;
  errorMessages: ErrorMessages;
}

// Helper function to validate required fields and regex
const validateField = (
  fieldValue: string,
  regex: RegExp | null = null,
  errorMessageRequired: string,
  errorMessageInvalid: string,
): string => {
  if (!fieldValue) {
    return MESSAGE_ERROR.REQUIRED_ERROR(errorMessageRequired);
  } else if (regex && !regex.test(fieldValue)) {
    return errorMessageInvalid;
  }
  return '';
};

// Dayjs date validation function using arrow function
const validateDate = (date: string, format: string): boolean => {
  const parsedDate = dayjs(date, format);
  const year = parsedDate.year();

  // Check if the date is valid and the year is within the valid range (>= 1000)
  return parsedDate.isValid() && year >= 1000 && parsedDate.format(format) === date;
};

// Function to validate the entire form using arrow function
export const validateForm = (formValues: Author): ValidationResult => {
  let isValid = true;

  // Initialize errorMessages with empty strings
  const errorMessages: ErrorMessages = {
    name: '',
    email: '',
    avatarUrl: '',
    date: '',
    roles: '',
    position: '',
    status: '',
  };

  // Validate each field using the simplified helper function
  errorMessages.name = validateField(
    formValues.name,
    REGEX.NAME,
    PROFILE_AUTHOR.NAME,
    MESSAGE_ERROR.INVALID_NAME,
  );

  // Validate email
  errorMessages.email = validateField(
    formValues.email,
    REGEX.EMAIL,
    PROFILE_AUTHOR.EMAIL,
    MESSAGE_ERROR.INVALID_EMAIL,
  );

  // Validate avatar URL
  errorMessages.avatarUrl = validateField(
    formValues.avatarUrl,
    REGEX.AVATAR_URL,
    PROFILE_AUTHOR.AVATAR_URL,
    MESSAGE_ERROR.INVALID_AVATAR_URL,
  );

  // Validate date using dayjs with arrow function
  const isDateValid = validateDate(formValues.date, 'YYYY-MM-DD');
  errorMessages.date = !formValues.date
    ? MESSAGE_ERROR.REQUIRED_ERROR(PROFILE_AUTHOR.DATE)
    : !isDateValid
      ? MESSAGE_ERROR.INVALID_DATE
      : '';

  // Validate roles
  errorMessages.roles = validateField(formValues.roles, null, PROFILE_AUTHOR.ROLES, '');

  // Validate position
  errorMessages.position = validateField(formValues.position, null, PROFILE_AUTHOR.POSITIONS, '');

  // Validate status
  errorMessages.status = validateField(formValues.status, null, PROFILE_AUTHOR.STATUS, '');

  // Check if any error messages were set
  isValid = Object.values(errorMessages).every((message) => message === '');

  return { isValid, errorMessages };
};
