import { useState, useEffect } from 'react';

// Import components
import { Input, Select, Button } from '@/components/common';

// Import constants
import { ROLES, STATUS, POSITIONS, MESSAGE_ERROR } from '@/constants';

// Import types
import { Author } from '@/types';

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
  const [formValues, setFormValues] = useState<Author>(
    selectedAuthor || {
      id: '',
      name: '',
      email: '',
      avatarUrl: '',
      position: '',
      roles: '',
      status: 'Active',
      date: '',
    },
  );

  const [errorMessages, setErrorMessages] = useState({
    name: '',
    email: '',
    avatarUrl: '',
  });

  // Update form values when selectedAuthor changes
  useEffect(() => {
    if (selectedAuthor) {
      setFormValues(selectedAuthor);
    }
  }, [selectedAuthor]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    onChange({ ...formValues, [name]: value });
    setErrorMessages({ ...errorMessages, [name]: '' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit();
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrorMessages = {
      name: '',
      email: '',
      avatarUrl: '',
    };

    if (!formValues.name) {
      newErrorMessages.name = MESSAGE_ERROR.REQUIRED_ERROR('Name');
      isValid = false;
    }

    if (!formValues.email || !/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrorMessages.email = MESSAGE_ERROR.INVALID_EMAIL;
      isValid = false;
    }

    if (
      !formValues.avatarUrl ||
      !/^https?:\/\/.*\.(jpg|jpeg|png|gif)$/.test(formValues.avatarUrl)
    ) {
      newErrorMessages.avatarUrl = MESSAGE_ERROR.INVALID_AVATAR_URL;
      isValid = false;
    }

    setErrorMessages(newErrorMessages);
    return isValid;
  };

  return (
    <>
      <h2 className="text-lg font-helveticaBold font-bold">
        {isUpdate ? 'EDIT AUTHOR' : 'ADD AUTHOR'}
      </h2>
      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-1.5">
          <label>Name</label>
          <Input
            name="name"
            type="text"
            value={formValues.name}
            onChange={handleChange}
            placeholder="Please enter name"
          />
          {errorMessages.name && <p className="text-danger">{errorMessages.name}</p>}
        </div>
        <div className="flex flex-col gap-1.5">
          <label>Email</label>
          <Input
            name="email"
            type="email"
            value={formValues.email}
            onChange={handleChange}
            placeholder="Please enter email address"
          />
          {errorMessages.email && <p className="text-danger">{errorMessages.email}</p>}
        </div>
        <div className="flex flex-col gap-1.5">
          <label>Avatar</label>
          <Input
            name="avatarUrl"
            type="text"
            value={formValues.avatarUrl}
            onChange={handleChange}
            placeholder="Please enter link image"
          />
          {errorMessages.avatarUrl && <p className="text-danger">{errorMessages.avatarUrl}</p>}
        </div>
        <div className="grid grid-cols-2 gap-5">
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
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div>
            <Select
              label="Status"
              name="status"
              value={formValues.status}
              optionsList={STATUS}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label>Employed</label>
            <Input name="date" type="date" value={formValues.date} onChange={handleChange} />
          </div>
        </div>
        <div className="flex justify-center items-center gap-6 mt-6">
          <Button variant="primary" label="Submit" onClick={handleSubmit} />
          <Button variant="secondary" label="Cancel" onClick={closeModal} />
        </div>
      </form>
    </>
  );
};

export default AuthorsForm;
