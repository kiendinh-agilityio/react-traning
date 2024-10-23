// Import icons
import { EditIcon, DeleteIcon } from '@/components/common/Icons';

// Import common components
import { Button, Paragraph, Link, Box } from '@/components/common';

// Import types
import { Author } from '@/types';

// Import utils
import { formatDate } from '@/utils';

// Import constants
import { DATE_FORMAT } from '@/constants';

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
      <Box>
        <div className="flex items-center">
          <img className="w-10 h-10 rounded-[12px] mr-3.5" src={avatarUrl} alt={`${name} avatar`} />
          <div>
            <Paragraph text={name} />
            <Link href={`mailto:${email}`} text={email} className="text-gray" />
          </div>
        </div>
      </Box>

      {/* Function */}
      <Box>
        <Paragraph text={roles} />
        <Paragraph variant="regular" text={position} className="text-gray" />
      </Box>

      {/* Status */}
      <Box>
        <div
          className={`flex justify-center items-center w-[70px] h-[25px] border rounded-lg font-helveticaBold font-bold text-white ${
            status === 'Active' ? 'border-active bg-active' : 'border-inactive bg-inactive'
          }`}
        >
          <Paragraph text={status} />
        </div>
      </Box>

      {/* Employed Date */}
      <Box>
        <Paragraph text={formatDate(date, DATE_FORMAT)} />
      </Box>

      {/* Actions */}
      <div className="w-32 flex justify-between items-center font-helveticaBold font-bold text-xs leading-base">
        {/* Button Edit */}
        <Button
          variant="transparent"
          className="text-gray"
          icon={<EditIcon />}
          label="Edit"
          onClick={handleEditClick}
        />

        {/* Button Delete */}
        <Button
          variant="transparent"
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
