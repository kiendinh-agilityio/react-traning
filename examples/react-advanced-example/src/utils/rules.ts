import { object, string } from 'zod';

// Constants
import { MESSAGES_ERROR, REGEX } from '@/constants';

export const authSchema = object({
  email: string({ required_error: MESSAGES_ERROR.FIELD_REQUIRED })
    .min(1, MESSAGES_ERROR.FIELD_REQUIRED)
    .email(MESSAGES_ERROR.EMAIL_INVALID),
  password: string({ required_error: MESSAGES_ERROR.FIELD_REQUIRED })
    .min(1, MESSAGES_ERROR.FIELD_REQUIRED)
    .regex(REGEX.PASSWORD, MESSAGES_ERROR.PASSWORD_INVALID),
});
