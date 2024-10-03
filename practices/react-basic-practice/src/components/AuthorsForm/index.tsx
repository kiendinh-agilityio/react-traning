// Import React hooks
import { useState, useEffect } from 'react';

// Import components
import { Input, Select, Button } from '@/components/common';

// Import constants for roles, status, and positions options
import { ROLES, STATUS, POSITIONS } from '@/constants';

// Import types for Author data model
import { Author } from '@/types';

// Import validation function for form validation
import { validateForm } from '@/utils/validations';

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
    roles: '',
    position: '',
    status: '',
  });

  // Update form values when the selectedAuthor prop changes (typically when editing an existing author)
  useEffect(() => {
    if (selectedAuthor) {
      setFormValues(selectedAuthor);
    }
  }, [selectedAuthor]);

  // Handle input changes in form fields
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    // Update form values
    setFormValues({ ...formValues, [name]: value });

    // Propagate changes to parent component
    onChange({ ...formValues, [name]: value });

    // Clear error message for the changed field
    setErrorMessages({ ...errorMessages, [name]: '' });
  };

  // Validate form on blur (when user leaves the field)
  const handleBlur = () => {
    const { isValid, errorMessages: validationErrors } = validateForm(formValues);

    // Set error messages if validation fails
    if (!isValid) {
      setErrorMessages(validationErrors);
    }
  };

  // Handle form submission (called when the user submits the form)
  const handleSubmit = () => {
    const { isValid } = validateForm(formValues);

    // Call the onSubmit function if the form is valid
    if (isValid) {
      onSubmit();
    }
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

        {/* Roles and Position dropdowns */}
        <div className="grid grid-cols-2 gap-5">
          <div>
            <Select
              label="Roles"
              name="roles"
              value={formValues.roles}
              optionsList={ROLES}
              onChange={handleChange}
              onBlur={handleBlur}
              errorMessage={errorMessages.roles}
            />
            {errorMessages.roles && <p className="text-danger">{errorMessages.roles}</p>}
          </div>
          <div>
            <Select
              label="Positions"
              name="position"
              value={formValues.position}
              optionsList={POSITIONS}
              onChange={handleChange}
              onBlur={handleBlur}
              errorMessage={errorMessages.position}
            />
            {errorMessages.position && <p className="text-danger">{errorMessages.position}</p>}
          </div>
        </div>

        {/* Status and Date fields */}
        <div className="grid grid-cols-2 gap-5">
          <div>
            <Select
              label="Status"
              name="status"
              value={formValues.status}
              optionsList={STATUS}
              onChange={handleChange}
              onBlur={handleBlur}
              errorMessage={errorMessages.status}
            />
            {errorMessages.status && <p className="text-danger">{errorMessages.status}</p>}
          </div>
          <div className="flex flex-col gap-1.5">
            <label>Employed</label>
            <Input
              name="date"
              type="date"
              value={formValues.date}
              onChange={handleChange}
              onBlur={handleBlur}
              errorMessage={errorMessages.date}
            />
            {errorMessages.date && <p className="text-danger">{errorMessages.date}</p>}
          </div>
        </div>
      </form>

      {/* Submit and Cancel buttons */}
      <div className="flex justify-center items-center gap-6 mt-6">
        <Button variant="primary" label={isUpdate ? 'Save' : 'Submit'} onClick={handleSubmit} />
        <Button variant="secondary" label="Cancel" onClick={closeModal} />
      </div>
    </>
  );
};

export default AuthorsForm;
