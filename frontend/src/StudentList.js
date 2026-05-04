import React, { useState, useEffect } from "react";
import axios from "axios";
import "./StudentList.css";

const API = "http://127.0.0.1:5000/students";

function StudentList() {
    const [students, setStudents] = useState([]);
    const [name, setName] = useState("");
    const [course, setCourse] = useState("");

// get all learners
    const fetchStudents = async () => {
        try {
          const response = await axios.get(API);
          setStudents(response.data);
        } catch (error) {
          console.error(error);
        }
    };
    
    useEffect(() => {
        fetchStudents();
    }, []);
    
// add learners
    const addStudent = async () => {
        console.log("Button clicked", name, course);
        if (!name || !course) return;

        try {
            await axios.post(API, { name, course });
            setName("");
            setCourse("");
            fetchStudents();
        } catch (error) {
            console.error(error);
        }
    };

// delete learners
    const deleteStudent = async (id) => {
        try {
            await axios.delete(`${API}/${id}`);
            fetchStudents();
        } catch (error) {
            console.error(error);
        }
    };

// update learners
    const updateStudent = async (id) => {
        const newName = prompt("Enter new name:");
        const newCourse = prompt("Enter new course:");

        if (!newName || !newCourse) return;

        try {
            await axios.put(`${API}/${id}`, { 
                name: newName, 
                course: newCourse,
             });
             fetchStudents();
        } catch (error) {
            console.error(error);
        }
    };  
    
// get individual learner 
    const getStudent = async (id) => {
        try {
            const res = await axios.get(`${API}/${id}`);
            alert(`${res.data.name} - ${res.data.course}`);
        } catch (error) {
            console.error(error);
        }
    };

  return (
    <div className="container">
      <h1>Student Management System</h1>

      <h2>Add Student</h2>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />

      <button className="add-btn" onClick={addStudent}>
        Add
      </button>

      <h2>Students</h2>

      <ul>
        {students.map((s) => (
          <li key={s.id}>
            <span>
              {s.name} ({s.course})
            </span>

            <div className="actions">
              <button className="view-btn" onClick={() => getStudent(s.id)}>
                View
              </button>

              <button className="edit-btn" onClick={() => updateStudent(s.id)}>
                Edit
              </button>

              <button className="delete-btn" onClick={() => deleteStudent(s.id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;

