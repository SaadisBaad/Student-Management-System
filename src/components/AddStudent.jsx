import React, { useRef, useState } from "react";
import { IoAdd } from "react-icons/io5";
import { db } from "../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";

const AddStudent = ({ getStudents }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [isCreatingStudent, setIsCreatingStudent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsCreatingStudent(true);
      await addDoc(collection(db, "students"), {
        rollNo: Number(rollNo),
        name: name,
        age: Number(age),
      });
      setName("");
      setAge("");
      setRollNo("");
      console.log("User Created Successfully.");
      setIsCreatingStudent(false);
      await getStudents();
    } catch (error) {
      console.log("Error in creating user!");
      setIsCreatingStudent(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name : "
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <input
        type="number"
        placeholder="Age : "
        onChange={(e) => setAge(e.target.value)}
        value={age}
      />
      <input
        type="number"
        placeholder="Roll No : "
        onChange={(e) => setRollNo(e.target.value)}
        value={rollNo}
      />
      <button type="submit">
        <IoAdd />
      </button>
    </form>
  );
};

export default AddStudent;
