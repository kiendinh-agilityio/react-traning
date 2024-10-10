// Import React hooks
import { useState, useEffect } from 'react';

// Import components
import { Input, Select, Button } from '@/components/common';

// Import constants for roles, status, and positions options
import { ROLES, STATUS, POSITIONS } from '@/constants';

// Import types for Author data model
import { Author } from '@/types';

// Import validation function for form validation
import { validateForm, today } from '@/utils';

interface AuthorsFormProps {
  isUpdate: boolean;
  selectedAuthor: Author;
  closeModal: () => void;
  onChange: (author: Author) => void;
  onSubmit: () => void;
}

const AuthorsForm = ({
  isUpdate,
  selectedAuthor,
  closeModal,
  onChange,
  onSubmit,
}: AuthorsFormProps) => {
  // Local state for form values initialized with the selectedAuthor data
  const [formValues, setFormValues] = useState<Author>(selectedAuthor);

  // Local state for error messages for each form field
  const [errorMessages, setErrorMessages] = useState({
    name: '',
    email: '',
    avatarUrl: '',
    date: '',
  });

  // State changes made in the form
  const [hasChanges, setHasChanges] = useState<boolean>(false);

  // Update form values when the selectedAuthor prop changes
  useEffect(() => {
    if (selectedAuthor) {
      setFormValues({
        ...selectedAuthor,
      });
    }
  }, [selectedAuthor]);

  // Handle input changes in form fields
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    // Mark form as having changes
    setHasChanges(true);

    // Update form values
    setFormValues({ ...formValues, [name]: value });

    // Propagate changes to parent component
    onChange({ ...formValues, [name]: value });

    // Clear error message for the changed field
    setErrorMessages({ ...errorMessages, [name]: '' });
  };

  // Validate form on blur (when user leaves the field)
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const field = e.target.name;
    const { isValid, errorMessages: validationErrors } = validateForm(formValues);

    // Only set error message for the current field being interacted with
    if (!isValid && validationErrors[field]) {
      setErrorMessages((prevErrors) => ({
        ...prevErrors,
        [field]: validationErrors[field],
      }));
    }
  };

  // Handle form submission (called when the user submits the form)
  const handleSubmit = () => {
    const { isValid, errorMessages: validationErrors } = validateForm(formValues);

    // If the form is invalid, display all error messages
    !isValid
      ? setErrorMessages(validationErrors)
      : (setErrorMessages(validationErrors), onSubmit());
  };

  return (
    <>
      {/* Display form title based on whether we are adding or editing an author */}
      <h2 className="text-lg font-helveticaBold font-bold">{isUpdate ? 'EDIT' : 'ADD'} AUTHOR</h2>
      <form className="flex flex-col gap-6">
        {/* Name input field */}
        <div className="flex flex-col gap-1.5">
          <label>Name</label>
          <Input
            name="name"
            type="text"
            value={formValues.name}
            onChange={handleChange}
            placeholder="Please enter name"
            onBlur={handleBlur}
            errorMessage={errorMessages.name}
          />
          {errorMessages.name && <p className="text-danger">{errorMessages.name}</p>}
        </div>
        {/* Email input field */}
        <div className="flex flex-col gap-1.5">
          <label>Email</label>
          <Input
            name="email"
            type="email"
            value={formValues.email}
            onChange={handleChange}
            placeholder="Please enter email address"
            onBlur={handleBlur}
            errorMessage={errorMessages.email}
          />
          {errorMessages.email && <p className="text-danger">{errorMessages.email}</p>}
        </div>
        {/* Avatar URL input field */}
        <div className="flex flex-col gap-1.5">
          <label>Avatar</label>
          <Input
            name="avatarUrl"
            type="text"
            value={formValues.avatarUrl}
            onChange={handleChange}
            placeholder="Please enter link image"
            onBlur={handleBlur}
            errorMessage={errorMessages.avatarUrl}
          />
          {errorMessages.avatarUrl && <p className="text-danger">{errorMessages.avatarUrl}</p>}
        </div>
        {/* Date fields */}
        <div className="flex flex-col gap-1.5">
          <label>Employed</label>
          <Input
            name="date"
            type="date"
            defaultValue={formValues.date || today}
            onChange={handleChange}
            onBlur={handleBlur}
            errorMessage={errorMessages.date}
          />
          {errorMessages.date && <p className="text-danger">{errorMessages.date}</p>}
        </div>
        {/* Roles and Position dropdowns */}
        <div className="grid grid-cols-3 gap-5">
          <div>
            <Select
              label="Roles"
              name="roles"
              value={formValues.roles}
              optionsList={ROLES}
              onChange={handleChange}
            />
          </div>
          <div>
            <Select
              label="Positions"
              name="position"
              value={formValues.position}
              optionsList={POSITIONS}
              onChange={handleChange}
            />
          </div>
          <div>
            <Select
              label="Status"
              name="status"
              value={formValues.status}
              optionsList={STATUS}
              onChange={handleChange}
            />
          </div>
        </div>
      </form>
      {/* Submit and Cancel buttons */}
      <div className="flex justify-center items-center gap-6 mt-6">
        <Button
          variant="primary"
          label={isUpdate ? 'Save' : 'Submit'}
          onClick={handleSubmit}
          isDisabled={isUpdate && !hasChanges}
        />
        <Button variant="tertiary" label="Cancel" onClick={closeModal} />
      </div>
    </>
  );
};

export default AuthorsForm;
