// Import radix ui
import { Table } from '@radix-ui/themes';

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

const AuthorTable = ({ authors, onEditAuthor, onDeleteAuthor }: AuthorTableProps) => {
  const renderTableHeaderContent = () =>
    TABLE_TITLES.map((title) => (
      <Table.ColumnHeaderCell key={title} className="py-3.5 text-sm">
        {title}
      </Table.ColumnHeaderCell>
    ));

  const renderTableBodyContent = (
    authors: Author[],
    onEditAuthor: (updatedAuthor: Author) => void,
    onDeleteAuthor: (id: string) => void,
  ) =>
    authors.map((author) => (
      <AuthorItem
        key={author.id}
        author={author}
        onEdit={onEditAuthor}
        onDelete={onDeleteAuthor}
      />
    ));

  return (
    <Table.Root className="w-full">
      {/* Header */}
      <Table.Header>
        <Table.Row className="font-bold text-base">
          {renderTableHeaderContent()}
          <Table.ColumnHeaderCell className="w-32 py-3.5"></Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      {/* Body */}
      <Table.Body>
        {renderTableBodyContent(authors, onEditAuthor, onDeleteAuthor)}
      </Table.Body>
    </Table.Root>
  );
};

export default AuthorTable;
