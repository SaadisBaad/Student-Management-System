import AddStudent from "./components/AddStudent";
import "./App.css";
import StudentList from "./components/StudentList";
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";

const App = () => {
  const [students, setStudents] = useState([]);
  const studentsCollection = collection(db, "students");

  async function getStudents() {
    const studentsSnapshot = await getDocs(studentsCollection);
    const studentsList = studentsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setStudents(studentsList);
  }

  useEffect(() => {
    try {
      getStudents();
    } catch (error) {
      console.log("Error creating student.");
    }
  }, []);
  return (
    <div className="app-container">
      <h1>Student Management System</h1>
      <AddStudent getStudents={getStudents} />
      <StudentList getStudents={getStudents} students={students} />
    </div>
  );
};

export default App;