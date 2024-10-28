// Import icons
import { EditIcon, DeleteIcon } from '@/components/common/Icons';

// Import common components
import { Button, Paragraph, Link, Avatar, Status } from '@/components/common';

// Import types
import { Author, Variant } from '@/types';

// Import utils
import { formatDate } from '@/utils';

// Import constants
import { DATE_FORMAT } from '@/constants';

// Import TableCell
import TableCell from '../TableCell/index';

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
    <div key={id} className="flex items-center border-b border-input text-sm">
      {/* Author Info */}
      <TableCell>
        <div className="flex items-center">
          <Avatar src={avatarUrl} alt={`${name} avatar`} />
          <div>
            <Paragraph value={name} />
            <Link href={`mailto:${email}`} text={email} className="text-gray" />
          </div>
        </div>
      </TableCell>

      {/* Function */}
      <TableCell>
        <Paragraph value={roles} />
        <Paragraph variant={Variant.Regular} value={position} className="text-gray" />
      </TableCell>

      {/* Status */}
      <TableCell>
        <Status value={status} />
      </TableCell>

      {/* Employed Date */}
      <TableCell>
        <Paragraph value={formatDate(date, DATE_FORMAT)} />
      </TableCell>

      {/* Actions */}
      <div className="w-32 flex justify-between items-center font-helveticaBold font-bold text-xs leading-base">
        {/* Button Edit */}
        <Button
          variant={Variant.Transparent}
          className="text-gray"
          icon={<EditIcon />}
          label="Edit"
          onClick={handleEditClick}
        />

        {/* Button Delete */}
        <Button
          variant={Variant.Transparent}
          className="text-danger"
          icon={<DeleteIcon />}
          label="Delete"
          onClick={handleDeleteClick}
        />
      </div>
    </div>
  );
};

export default AuthorItem;
