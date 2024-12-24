const Student = ({ name, grade }: { name: string; grade: string }) => (
  <div className='student'>
    <h3>{name}</h3>
    <p>Grade: {grade}</p>
  </div>
);

const StudentList = () => {
  const students = [
    { name: 'Alice', grade: 'A' },
    { name: 'Bob', grade: 'B' },
    { name: 'Charlie', grade: 'C' },
  ];

  return (
    <div className='student-list'>
      {students.map((student, index) => (
        <Student key={index} name={student.name} grade={student.grade} />
      ))}
    </div>
  );
};

export default StudentList;
