import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Table, Spinner, Button } from '@radix-ui/themes';
import { fetchStudents, deleteStudent } from '@/services';

// Define the structure for a Student object
interface Student {
  id: string;
  fullName: string;
  email: string;
  group: string;
  status: 'active' | 'inactive';
}

// Props for each row in the student table
interface TableStudentProps {
  fullName: string;
  email: string;
  group: string;
  status: 'active' | 'inactive';
  id: string;
  onDelete: (id: string) => void;
}

const TableStudent = () => {
  // State to track the selected filter ('all', 'active', or 'inactive')
  const [filter, setFilter] = useState<'all' | 'active' | 'inactive'>('all');

  // Query client used to invalidate queries after mutations
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
      // Invalidate the 'students' query after a successful delete
      queryClient.invalidateQueries({ queryKey: ['students'] });
    },
  });

  // Filter students based on the selected status (active, inactive, or all)
  const filteredData = data?.filter((student) => {
    if (filter === 'all') return true;
    return student.status === filter;
  });

  // Toggle filter between active and all students
  const handleActiveFilter = () =>
    setFilter(filter === 'active' ? 'all' : 'active');

  // Toggle filter between inactive and all students
  const handleInactiveFilter = () =>
    setFilter(filter === 'inactive' ? 'all' : 'inactive');

  // Handle deletion of a student
  const handleDelete = (id: string) => {
    deleteStudentMutation(id);
  };

  const handleDeleteClick = (id: string, onDelete: (id: string) => void) => {
    onDelete(id); // Call the onDelete function passed as a prop with the id
  };

  // RowItem component renders each student row in the table
  const RowItem = ({
    fullName,
    email,
    group,
    status,
    id,
    onDelete,
  }: TableStudentProps) => (
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
              {/* Map over filtered students and render each row */}
              {filteredData?.map((student) => (
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
