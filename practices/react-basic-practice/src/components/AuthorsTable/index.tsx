import { Author } from '@/types';
import AuthorItem from './AuthorItem';

export interface AuthorTableProps {
  authors: Author[];
  onEditAuthor: (updatedAuthor: Author) => void;
  onDeleteAuthor: (id: string) => void;
}

const AuthorTable = ({ authors, onEditAuthor, onDeleteAuthor }: AuthorTableProps) => (
  <div className="w-full">
    {/* Header */}
    <ul className="flex border-b border-input font-helveticaBold font-bold text-[#a0aec0]">
      <li className="flex-1 py-3.5">Author</li>
      <li className="flex-1 py-3.5">Function</li>
      <li className="flex-1 py-3.5">Status</li>
      <li className="flex-1 py-3.5">Employed</li>
      <li className="w-32 py-3.5"></li>
    </ul>

    {/* Body */}
    {authors.map((author) => (
      <AuthorItem key={author.id} author={author} onEdit={onEditAuthor} onDelete={onDeleteAuthor} />
    ))}
  </div>
);

export default AuthorTable;
