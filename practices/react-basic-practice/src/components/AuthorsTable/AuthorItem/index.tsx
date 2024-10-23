// Import icons
import { EditIcon, DeleteIcon } from '@/components/common/Icons';

// Import common components
import { Button, Paragraph, Link } from '@/components/common';

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
      <div className="flex-1 py-[11px]">
        <div className="flex items-center">
          <img className="w-10 h-10 rounded-[12px] mr-3.5" src={avatarUrl} alt={`${name} avatar`} />
          <div>
            <Paragraph variant="bold" size="sm" text={name} />
            <Link href={`mailto:${email}`} text={email} className="text-gray" />
          </div>
        </div>
      </div>

      {/* Function */}
      <div className="flex-1 py-[11px]">
        <Paragraph variant="bold" size="sm" text={roles} />
        <Paragraph variant="regular" size="sm" text={position} className="text-gray" />
      </div>

      {/* Status */}
      <div className="flex-1 py-[11px]">
        <div
          className={`flex justify-center items-center w-[70px] h-[25px] border rounded-lg font-helveticaBold font-bold text-white ${
            status === 'Active' ? 'border-active bg-active' : 'border-inactive bg-inactive'
          }`}
        >
          <Paragraph variant="bold" size="sm" text={status} />
        </div>
      </div>

      {/* Employed Date */}
      <div className="flex-1 py-[11px]">
        <Paragraph variant="bold" size="sm" text={formatDate(date, DATE_FORMAT)} />
      </div>

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
