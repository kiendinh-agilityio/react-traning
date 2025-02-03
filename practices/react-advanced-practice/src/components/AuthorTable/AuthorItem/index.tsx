// Import radix-ui
import { Box, Table } from '@radix-ui/themes';

// Import icons
import { EditIcon, DeleteIcon } from '@/components/common/Icons';

// Import common components
import { Button, Status, Text } from '@/components/common';

// Import components
import { Profile } from '@/components';

// Import types
import { Author, ButtonVariant } from '@/types';

// Import constants
import { DATE_FORMAT } from '@/constants';

// Import utils
import { formatDate } from '@/utils';

interface AuthorItemProps {
  author: Author;
  onEdit: (author: Author) => void;
  onDelete: (id: string) => void;
}

const AuthorItem = ({ author, onEdit, onDelete }: AuthorItemProps) => {
  const { id, avatarUrl, name, email, roles, position, status, date } = author;

  // Handle edit button click
  const handleEditClick = () => onEdit(author);

  // Handle delete button click
  const handleDeleteClick = () => onDelete(id);

  return (
    <Table.Row key={id} className="text-sm">
      {/* Author Info */}
      <Table.RowHeaderCell className="py-[11px]">
        <Profile fullName={name} email={email} avatarUrl={avatarUrl} />
      </Table.RowHeaderCell>

      {/* Function */}
      <Table.Cell className="py-[13px]">
        <Text weight="bold" className="font-bold text-dark dark:text-light">
          {roles}
        </Text>
        <Text className="font-regular text-gray">{position}</Text>
      </Table.Cell>

      {/* Status */}
      <Table.Cell className="py-[18px]">
        <Status value={status} />
      </Table.Cell>

      {/* Employed Date */}
      <Table.Cell className="py-[22px]">
        <Text weight="bold" className="font-bold">
          {formatDate(date, DATE_FORMAT.PRIMARY)}
        </Text>
      </Table.Cell>

      {/* Actions */}
      <Table.Cell className="py-[22px] font-bold text-xs leading-base">
        <Box className="flex gap-5">
          {/* Button Edit */}
          <Button
            variant={ButtonVariant.Transparent}
            className="text-gray"
            onClick={handleEditClick}
          >
            <EditIcon /> Edit
          </Button>

          {/* Button Delete */}
          <Button
            variant={ButtonVariant.Transparent}
            className="text-danger"
            onClick={handleDeleteClick}
          >
            <DeleteIcon /> Delete
          </Button>
        </Box>
      </Table.Cell>
    </Table.Row>
  );
};

export default AuthorItem;
