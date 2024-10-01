// Import component
import { EditIcon, DeleteIcon } from '@/components/common/Icons';

// Import types
import { Author } from '@/types';

export interface AuthorTableProps {
  authors: Author[];
}

const AuthorTable = ({ authors }: AuthorTableProps) => (
  <div className="w-full">
    {/* Header */}
    <div className="flex border-b border-input font-helveticaBold font-bold text-[#a0aec0]">
      <div className="flex-1 py-3.5">Author</div>
      <div className="flex-1 py-3.5">Function</div>
      <div className="flex-1 py-3.5">Status</div>
      <div className="flex-1 py-3.5">Employed</div>
      <div className="w-32 py-3.5"></div>
    </div>

    {/* Body */}
    {authors.map((author) => (
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
              author.status === 'active' ? 'border-active bg-active' : 'border-inactive bg-inactive'
            }`}
          >
            {author.status}
          </span>
        </div>

        {/* Employed Date */}
        <div className="flex-1 py-3.5 font-helveticaBold font-bold">
          {new Date(author.date).toLocaleDateString()}
        </div>

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
    ))}
  </div>
);

export default AuthorTable;
