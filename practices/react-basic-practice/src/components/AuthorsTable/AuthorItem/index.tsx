// Import components
import { EditIcon, DeleteIcon } from '@/components/common/Icons';

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
            <p className="font-helveticaBold font-bold">{name}</p>
            <a href={`mailto:${email}`} className="text-gray">
              {email}
            </a>
          </div>
        </div>
      </div>

      {/* Function */}
      <div className="flex-1 py-[11px]">
        <p className="font-helveticaBold font-bold">{roles}</p>
        <p className="text-gray">{position}</p>
      </div>

      {/* Status */}
      <div className="flex-1 py-[11px]">
        <div
          className={`flex justify-center items-center w-[70px] h-[25px] border rounded-lg font-helveticaBold font-bold text-white ${
            status === 'Active' ? 'border-active bg-active' : 'border-inactive bg-inactive'
          }`}
        >
          <p>{status}</p>
        </div>
      </div>

      {/* Employed Date */}
      <div className="flex-1 py-[11px] font-helveticaBold font-bold">
        {formatDate(date, DATE_FORMAT)}
      </div>

      {/* Actions */}
      <div className="w-32 flex justify-between items-center font-helveticaBold font-bold text-xs leading-base">
        {/* Button Edit */}
        <button className="flex items-center gap-0.5" onClick={handleEditClick}>
          <EditIcon /> <span className="text-[#718096]">Edit</span>
        </button>

        {/* Button Delete */}
        <button className="flex items-center gap-0.5" onClick={handleDeleteClick}>
          <DeleteIcon /> <span className="text-danger">Delete</span>
        </button>
      </div>
    </div>
  );
};

export default AuthorItem;
