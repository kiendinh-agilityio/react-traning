// Import components
import { EditIcon, DeleteIcon } from '@/components/common/Icons';

// Import types
import { Author } from '@/types';

// Import utils
import { formatDate } from '@/utils';

interface AuthorItemProps {
  author: Author;
}

const AuthorItem = ({ author }: AuthorItemProps) => (
  <div key={author.id} className="flex items-center border-b border-input text-sm">
    {/* Author Info */}
    <div className="flex-1 py-3.5">
      <div className="flex items-center">
        <img
          className="w-10 h-10 rounded-[12px] mr-3.5"
          src={author.avatarUrl}
          alt={`${author.name} avatar`}
        />
        <div>
          <p className="font-helveticaBold font-bold">{author.name}</p>
          <p className="text-gray">{author.email}</p>
        </div>
      </div>
    </div>

    {/* Function */}
    <div className="flex-1 py-3.5">
      <p className="font-helveticaBold font-bold">{author.roles}</p>
      <p className="text-gray">{author.position}</p>
    </div>

    {/* Status */}
    <div className="flex-1 py-3.5">
      <span
        className={`flex justify-center items-center w-[70px] h-[25px] border rounded-lg font-helveticaBold font-bold text-white ${
          author.status === 'Active' ? 'border-active bg-active' : 'border-inactive bg-inactive'
        }`}
      >
        {author.status}
      </span>
    </div>

    {/* Employed Date */}
    <div className="flex-1 py-3.5 font-helveticaBold font-bold">{formatDate(author.date)}</div>

    {/* Actions */}
    <div className="w-32 flex justify-between items-center font-helveticaBold font-bold">
      {/* Button Edit */}
      <button className="flex items-center gap-0.5">
        <EditIcon /> <span>Edit</span>
      </button>

      {/* Button Delete */}
      <button className="flex items-center gap-0.5">
        <DeleteIcon /> <span className="text-danger">Delete</span>
      </button>
    </div>
  </div>
);

export default AuthorItem;
