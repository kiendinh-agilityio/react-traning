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

// Function to validate the entire form
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

  // Validate for email
  errorMessages.email = validateField(
    formValues.email,
    REGEX.EMAIL,
    PROFILE_AUTHOR.EMAIL,
    MESSAGE_ERROR.INVALID_EMAIL,
  );

  // Validate for avatar url
  errorMessages.avatarUrl = validateField(
    formValues.avatarUrl,
    REGEX.AVATAR_URL,
    PROFILE_AUTHOR.AVATAR_URL,
    MESSAGE_ERROR.INVALID_AVATAR_URL,
  );

  // Validate for date
  errorMessages.date = validateField(formValues.date, null, PROFILE_AUTHOR.DATE, '');

  // Validate for date
  errorMessages.roles = validateField(formValues.roles, null, PROFILE_AUTHOR.ROLES, '');

  // Validate for date
  errorMessages.position = validateField(formValues.position, null, PROFILE_AUTHOR.POSITIONS, '');

  // Validate for date
  errorMessages.status = validateField(formValues.status, null, PROFILE_AUTHOR.STATUS, '');

  // Check if any error messages were set
  isValid = Object.values(errorMessages).every((message) => message === '');

  return { isValid, errorMessages };
};
