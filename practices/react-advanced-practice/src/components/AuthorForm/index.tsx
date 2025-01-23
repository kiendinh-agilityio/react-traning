// Import react hook form
import { useForm, Controller } from 'react-hook-form';

// Import radix ui
import { Grid, Flex } from '@radix-ui/themes';

// Import common components
import { Select, Button, Heading } from '@/components/common';

// Import components
import { InputGroup } from '@/components';

// Import constants for roles, status, and positions options
import {
  ROLES,
  STATUS,
  POSITIONS,
  MESSAGE_ERROR,
  REGEX,
  PROFILE_AUTHOR,
  DATE_FORMAT,
} from '@/constants';

// Import types for Author data model
import { Author, ButtonVariant } from '@/types';

// Import validation function for form validation
import { today, validateDate } from '@/utils';

interface AuthorsFormProps {
  isUpdate: boolean;
  selectedAuthor: Author;
  closeModal: () => void;
  onChange: (author: Author) => void;
  onSubmit: () => void;
}

const AuthorForm = ({
  isUpdate,
  selectedAuthor,
  closeModal,
  onChange,
  onSubmit,
}: AuthorsFormProps) => {
  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors, isDirty, dirtyFields },
  } = useForm<Author>({
    defaultValues: selectedAuthor,
    mode: 'onBlur',
  });

  const handleFormAction = (name: keyof Author, value: string) => {
    setValue(name, value, { shouldValidate: true, shouldDirty: true });
    onChange({ ...getValues(), [name]: value });
  };

  // Handle input fields change
  const handleFieldChange =
    (name: keyof Author) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const value = e.target.value;
      handleFormAction(name, value);
    };

  // Validate for date
  const handleValidateDate = (value: string): string | boolean =>
    validateDate(value, DATE_FORMAT.SECONDARY) || MESSAGE_ERROR.INVALID_DATE;

  // Handle function check isDisabled
  const handleCheckIsDisabled = (
    isUpdate: boolean,
    isDirty: boolean,
    dirtyFields: Record<string, boolean>,
  ): boolean => {
    return isUpdate && !isDirty && Object.keys(dirtyFields).length === 0;
  };

  return (
    <>
      <Heading
        as="h2"
        text={`${isUpdate ? 'EDIT' : 'ADD'} AUTHOR`}
        className="font-helveticaBold font-bold justify-end"
      />
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <Controller
          name="name"
          control={control}
          rules={{
            required: MESSAGE_ERROR.REQUIRED_ERROR(PROFILE_AUTHOR.NAME),
            pattern: {
              value: REGEX.NAME,
              message: MESSAGE_ERROR.INVALID_NAME,
            },
          }}
          render={({ field }) => (
            <InputGroup
              label="Name"
              {...field}
              type="text"
              placeholder="Please enter name"
              errorMessage={errors.name?.message}
              onChange={handleFieldChange('name')}
              onBlur={handleFieldChange('name')}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          rules={{
            required: MESSAGE_ERROR.REQUIRED_ERROR(PROFILE_AUTHOR.EMAIL),
            pattern: {
              value: REGEX.EMAIL,
              message: MESSAGE_ERROR.INVALID_EMAIL,
            },
          }}
          render={({ field }) => (
            <InputGroup
              label="Email"
              {...field}
              type="email"
              placeholder="Please enter email address"
              errorMessage={errors.email?.message}
              onChange={handleFieldChange('email')}
              onBlur={handleFieldChange('email')}
            />
          )}
        />
        <Controller
          name="avatarUrl"
          control={control}
          rules={{
            required: MESSAGE_ERROR.REQUIRED_ERROR(PROFILE_AUTHOR.AVATAR_URL),
            pattern: {
              value: REGEX.AVATAR_URL,
              message: MESSAGE_ERROR.INVALID_AVATAR_URL,
            },
          }}
          render={({ field }) => (
            <InputGroup
              label="Avatar"
              {...field}
              type="text"
              placeholder="Please enter link image"
              errorMessage={errors.avatarUrl?.message}
              onChange={handleFieldChange('avatarUrl')}
              onBlur={handleFieldChange('avatarUrl')}
            />
          )}
        />
        <Controller
          name="date"
          control={control}
          rules={{
            validate: handleValidateDate,
          }}
          render={({ field }) => (
            <InputGroup
              label="Employed"
              {...field}
              type="date"
              value={field.value || today}
              errorMessage={errors.date?.message}
              onChange={handleFieldChange('date')}
              onBlur={handleFieldChange('date')}
            />
          )}
        />
        <Grid columns="3" className="gap-5">
          <Controller
            name="roles"
            control={control}
            render={({ field }) => (
              <Select
                label="Roles"
                {...field}
                optionsList={ROLES}
                onChange={handleFieldChange('roles')}
                onBlur={handleFieldChange('roles')}
              />
            )}
          />
          <Controller
            name="position"
            control={control}
            render={({ field }) => (
              <Select
                label="Positions"
                {...field}
                optionsList={POSITIONS}
                onChange={handleFieldChange('position')}
                onBlur={handleFieldChange('position')}
              />
            )}
          />
          <Controller
            name="status"
            control={control}
            render={({ field }) => (
              <Select
                label="Status"
                {...field}
                optionsList={STATUS}
                onChange={handleFieldChange('status')}
                onBlur={handleFieldChange('status')}
              />
            )}
          />
        </Grid>
        <Flex justify="center" align="center" className="gap-6 mt-6">
          <Button
            onClick={handleSubmit(onSubmit)}
            isDisabled={handleCheckIsDisabled(isUpdate, isDirty, dirtyFields)}
            className="w-[150px]"
          >
            {isUpdate ? 'Save' : 'Submit'}
          </Button>
          <Button
            variant={ButtonVariant.Tertiary}
            onClick={closeModal}
            className="w-[150px]"
          >
            Cancel
          </Button>
        </Flex>
      </form>
    </>
  );
};

export default AuthorForm;
