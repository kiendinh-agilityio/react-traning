// Import types
import { Author } from '@/types';

// Import author item
import AuthorItem from './AuthorItem';

// Import constants
import { TABLE_TITLES } from '@/constants';

export interface AuthorTableProps {
  authors: Author[];
  onEditAuthor: (updatedAuthor: Author) => void;
  onDeleteAuthor: (id: string) => void;
}

const AuthorTable = ({ authors, onEditAuthor, onDeleteAuthor }: AuthorTableProps) => (
  <div className="w-full">
    {/* Header */}
    <ul className="flex border-b border-input font-helveticaBold font-bold text-[#a0aec0]">
      {TABLE_TITLES.map((title) => (
        <li key={title} className={`flex-1 py-3.5`}>
          {title}
        </li>
      ))}
      <li className="w-32 py-3.5"></li>
    </ul>

    {/* Body */}
    {authors.map((author) => (
      <AuthorItem key={author.id} author={author} onEdit={onEditAuthor} onDelete={onDeleteAuthor} />
    ))}
  </div>
);

export default AuthorTable;
