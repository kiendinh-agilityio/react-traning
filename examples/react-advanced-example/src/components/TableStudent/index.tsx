import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Table, Spinner, Button } from '@radix-ui/themes';
import { BASE_API } from '@/constants';

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
}

const fetchStudents = async (): Promise<Student[]> => {
  const response = await fetch(BASE_API);
  if (!response.ok) {
    throw new Error('Failed to fetch students');
  }
  return response.json();
};

const RowItem = ({ fullName, email, group, status }: TableStudentProps) => (
  <Table.Row>
    <Table.RowHeaderCell>{fullName}</Table.RowHeaderCell>
    <Table.Cell>{email}</Table.Cell>
    <Table.Cell>{group}</Table.Cell>
    <Table.Cell>{status}</Table.Cell>
  </Table.Row>
);

const TableStudent = () => {
  const [filter, setFilter] = useState<'all' | 'active' | 'inactive'>('all');
  const { data, isLoading, error } = useQuery<Student[], Error>({
    queryKey: ['students'],
    queryFn: fetchStudents,
  });

  const filteredData = data?.filter((student) => {
    if (filter === 'all') return true;
    return student.status === filter;
  });

  const handleActiveFilter = () =>
    setFilter(filter === 'active' ? 'all' : 'active');

  const handleInactiveFilter = () =>
    setFilter(filter === 'inactive' ? 'all' : 'inactive');

  return (
    <>
      {isLoading && (
        <Spinner size='3' style={{ margin: 'auto', display: 'block' }} />
      )}
      {error && <p>Get data failed</p>}
      {!isLoading && !error && (
        <>
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

          <Table.Root style={{ marginTop: '30px' }}>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell>Full name</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Group</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>{' '}
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {filteredData?.map((student) => (
                <RowItem
                  key={student.id}
                  fullName={student.fullName}
                  email={student.email}
                  group={student.group}
                  status={student.status}
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
