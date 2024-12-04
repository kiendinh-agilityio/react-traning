import { Table } from '@radix-ui/themes';

import { STUDENT_LIST } from '@/constants';

interface TableStudentProps {
  fullName: string;
  email: string;
  group: string;
}

const RowItem = ({ fullName, email, group }: TableStudentProps) => (
  <Table.Row>
    <Table.RowHeaderCell>{fullName}</Table.RowHeaderCell>
    <Table.Cell>{email}</Table.Cell>
    <Table.Cell>{group}</Table.Cell>
  </Table.Row>
);

const TableStudent = () => (
  <Table.Root>
    <Table.Header>
      <Table.Row>
        <Table.ColumnHeaderCell>Full name</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell>Group</Table.ColumnHeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {STUDENT_LIST.map((student) => (
        <RowItem
          key={student.id}
          fullName={student.name}
          email={student.email}
          group={student.group}
        />
      ))}
    </Table.Body>
  </Table.Root>
);

export default TableStudent;
