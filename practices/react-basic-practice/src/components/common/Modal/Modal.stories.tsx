import { Meta, StoryObj } from '@storybook/react';
import Modal from './';
import { AuthorsForm, ConfirmModal } from '@/components';

// import styles
import './modal.css';

// Define metadata for the story
const meta: Meta<typeof Modal> = {
  title: 'Modal',
  component: Modal,
  decorators: [
    (Story) => (
      <div className="relative w-full h-screen">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    children: {
      control: false,
    },
  },
};

export default meta;

// Story type definition
type Story = StoryObj<typeof Modal>;

export const ModalUpdateAuthors: Story = {
  render: (args) => {
    const handleClose = () => {
      // Logic to handle closing the modal
      alert('Modal closed');
    };

    const handleChange = () => {
      // Simple success alert for any input change
      alert('Update successful');
    };

    const handleSubmit = () => {
      // Logic to handle form submission
      alert('Form submitted successfully');

      // Optionally close the modal after submission
      handleClose();
    };

    const selectedAuthor = {
      id: '1',
      name: 'John Doe',
      email: 'johndoe@example.com',
      avatarUrl: 'https://example.com/avatar.jpg',
      position: 'Author',
      roles: 'Editor',
      status: 'Active',
      date: '2024-10-01',
    };

    return (
      <Modal {...args}>
        <AuthorsForm
          isUpdate={true}
          selectedAuthor={selectedAuthor}
          closeModal={handleClose}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </Modal>
    );
  },
};

export const ModalConfirmAuthors: Story = {
  render: (args) => {
    const handleClose = () => {
      // Logic to handle closing the modal
      alert('Modal closed');
    };

    const handleDelete = () => {
      // Logic to handle author deletion
      alert('Author deleted successfully');

      // Optionally close the modal after submission
      handleClose();
    };

    return (
      <Modal {...args}>
        <ConfirmModal onClose={handleClose} onSubmit={handleDelete} />
      </Modal>
    );
  },
};
