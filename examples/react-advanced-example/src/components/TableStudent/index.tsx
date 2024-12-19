import { memo, useState, useMemo, useCallback } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Table, Spinner, Button } from '@radix-ui/themes';
import { fetchStudents, deleteStudent } from '@/services';

interface Student {
  id: string;
  fullName: string;
  email: string;
  group: string;
  status: 'active' | 'inactive';
}

interface TableStudentProps {
  fullName: string;
  email: string;
  group: string;
  status: 'active' | 'inactive';
  id: string;
  onDelete: (id: string) => void;
}

const TableStudent = () => {
  const [filter, setFilter] = useState<'all' | 'active' | 'inactive'>('all');
  const queryClient = useQueryClient();

  // Fetch students data using React Query
  const { data, isLoading, error } = useQuery<Student[], Error>({
    queryKey: ['students'],
    queryFn: fetchStudents,
  });

  // Mutation to handle deleting a student
  const { mutate: deleteStudentMutation } = useMutation<void, Error, string>({
    mutationFn: deleteStudent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['students'] });
    },
  });

  // Memoized filtered data
  const filteredData = useMemo(() => {
    if (!data) return [];
    if (filter === 'all') return data;
    return data.filter((student) => student.status === filter);
  }, [data, filter]);

  const handleActiveFilter = useCallback(() => {
    setFilter((prevFilter) => (prevFilter === 'active' ? 'all' : 'active'));
  }, []);

  const handleInactiveFilter = useCallback(() => {
    setFilter((prevFilter) => (prevFilter === 'inactive' ? 'all' : 'inactive'));
  }, []);

  const handleDelete = useCallback(
    (id: string) => {
      deleteStudentMutation(id);
    },
    [deleteStudentMutation]
  );

  const handleDeleteClick = useCallback(
    (id: string, onDelete: (id: string) => void) => {
      onDelete(id);
    },
    []
  );

  const RowItem = memo(
    ({ fullName, email, group, status, id, onDelete }: TableStudentProps) => (
      <Table.Row>
        <Table.RowHeaderCell>{fullName}</Table.RowHeaderCell>
        <Table.Cell>{email}</Table.Cell>
        <Table.Cell>{group}</Table.Cell>
        <Table.Cell>{status}</Table.Cell>
        <Table.Cell>
          <Button
            color='red'
            variant='outline'
            onClick={handleDeleteClick.bind(null, id, onDelete)}
          >
            Delete
          </Button>
        </Table.Cell>
      </Table.Row>
    )
  );

  return (
    <>
      {/* Show a loading spinner while data is being fetched */}
      {isLoading && (
        <Spinner size='3' style={{ margin: 'auto', display: 'block' }} />
      )}

      {/* Show error message if data fetching fails */}
      {error && <p>Failed to retrieve data</p>}

      {/* Render the student list once data is loaded and no error */}
      {!isLoading && !error && (
        <>
          {/* Filter buttons to toggle between active and inactive students */}
          <Button style={{ marginRight: '10px' }} onClick={handleActiveFilter}>
            Filter Active
          </Button>
          <Button
            color='gray'
            variant='outline'
            highContrast
            onClick={handleInactiveFilter}
          >
            Filter Inactive
          </Button>

          {/* Render the table of students */}
          <Table.Root style={{ marginTop: '30px' }}>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell>Full name</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Group</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Actions</Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {filteredData.map((student) => (
                <RowItem
                  key={student.id}
                  id={student.id}
                  fullName={student.fullName}
                  email={student.email}
                  group={student.group}
                  status={student.status}
                  onDelete={handleDelete}
                />
              ))}
            </Table.Body>
          </Table.Root>
        </>
      )}
    </>
  );
};

export default TableStudent;
