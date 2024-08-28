import Student from "./Student";

const StudentList = ({ students, getStudents }) => {
  return (
    <div>
      <h1>Student List</h1>
      <ul className="students">
        {students.map((student) => {
          return (
            <Student
              getStudents={getStudents}
              key={student.id}
              student={student}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default StudentList;
