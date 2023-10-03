import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Employeedetails.css";
<link
  href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap"
  rel="stylesheet"
></link>;

function AddEmployee1({ onAddEmployee1 }) {
  const [firstname, setName] = useState("");
  const [lastname, setPosition] = useState("");
  const [fathername, setFathername] = useState("");
  const [mothername, setMothername] = useState("");
  const [employeeCount, setEmployeeCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    setEmployeeCount(employeeCount + 1);

    const id = `EMP${employeeCount.toString().padStart(3, "0")}`;

    const newEmployee = {
      id,
      firstname,
      lastname,
      fathername,
      mothername,
    };
    onAddEmployee1(newEmployee);
    setName("");
    setPosition("");
    setFathername("");
    setMothername("");

    localStorage.setItem("employeeCount", employeeCount + 1);
  };

  return (
    <div className="Container">
      <h2>EMPLOYEE ENTRY FORM</h2>
      <div className="box">
        <Link className="one" to="/EmployeeDetails">
          <i class="fa-solid fa-users"></i>
          <h2>Add Student</h2>
        </Link>
        <Link className="two" to="/EmployeeDetails1">
          <i class="fa-solid fa-users"></i>
          <h2>Add Employee</h2>
        </Link>
      </div>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstname">First Name:</label>
          <input
            type="text"
            id="firstname"
            value={firstname}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lastname">Last Name:</label>
          <input
            type="text"
            id="lastname"
            value={lastname}
            onChange={(e) => setPosition(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="fathername">Father Name:</label>
          <input
            type="text"
            id="fathername"
            value={fathername}
            onChange={(e) => setFathername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="mothername">Mother Name:</label>
          <input
            type="text"
            id="mothername"
            value={mothername}
            onChange={(e) => setMothername(e.target.value)}
          />
        </div>

        <button type="submit">Add </button>
      </form>
    </div>
  );
}

export default AddEmployee1;
