import { Meta, StoryObj } from '@storybook/react';
import Modal from './';
import { AuthorsForm } from '@/components';
import { Author } from '@/types';

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
      // Logic to close the modal, e.g., resetting state or updating props
    };

    const handleChange = (author: Author) => {
      // Logic to handle changes to the author
      console.log(author);
    };

    const handleSubmit = () => {
      // Logic to handle form submission
      console.log('Form submitted');
      handleClose(); // Optionally close the modal after submission
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
