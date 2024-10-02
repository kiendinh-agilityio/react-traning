// Import types
import { Author } from '@/types';

// Import AuthorItem
import AuthorItem from './AuthorItem';

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
      <AuthorItem key={author.id} author={author} />
    ))}
  </div>
);

export default AuthorTable;
