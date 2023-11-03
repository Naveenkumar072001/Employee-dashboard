import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import "./Employeedetails.css";
<link
  href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap"
  rel="stylesheet"
></link>;

function AddEmployee1({ onAddEmployee1 }) {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const studentName = decodeURIComponent(searchParams.get("studentName"));
  const [firstname, setName] = useState(studentName || "");

  const [lastname, setLastName] = useState("");
  const [fathername, setFatherName] = useState("");
  const [mothername, setMotherName] = useState("");
  const [designation, setDesignation] = useState("");
  const [salary, setSalary] = useState("");
  const [dateOfJoining, setDateOfJoining] = useState("");
  const [dateOfRelieving, setDateOfRelieving] = useState("");
  const [experience, setExperience] = useState("");
  const [employeeCount, setEmployeeCount] = useState(0);
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");

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
      dateOfBirth,
      email,
      contactNumber,
      designation,
      salary,
      dateOfJoining,
      dateOfRelieving,
      experience,
      photo,
    };
    onAddEmployee1(newEmployee);
    setName("");
    setLastName("");
    setFatherName("");
    setMotherName("");
    setContactNumber("");
    setDesignation("");
    setSalary("");
    setDateOfJoining("");
    setDateOfRelieving("");
    setExperience("");
    setDateOfBirth("");
    setEmployeeCount("");
    setEmail("");
    setPhoto("");

    localStorage.setItem("employeeCount", employeeCount + 1);
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setPhoto(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="Container">
      <h2>EMPLOYEE ENTRY FORM</h2>
      <div className="box">
        <Link className="one" to="/EmployeeDetails1">
          <i id="add" class="fa-solid fa-users"></i>
          <h2>Add Employee</h2>
        </Link>
        <Link className="two" to="/Employeelist1">
          <i id="view" class="fa-solid fa-users"></i>
          <h2>View Employee</h2>
        </Link>
      </div>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstname">Student Name:</label>
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
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="fathername">Father Name:</label>
          <input
            type="text"
            id="fathername"
            value={fathername}
            onChange={(e) => setFatherName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="mothername">Mother Name:</label>
          <input
            type="text"
            id="mothername"
            value={mothername}
            onChange={(e) => setMotherName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="dateOfBirth">Date of Birth:</label>
          <input
            type="date"
            id="dateOfBirth"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="contactNumber">Contact Number:</label>
          <input
            type="tel"
            id="contactNumber"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="designation">Designation:</label>
          <input
            type="text"
            id="designation"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="salary">Salary:</label>
          <input
            type="text"
            id="salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="dateOfJoining">Date of Joining:</label>
          <input
            type="date"
            id="dateOfJoining"
            value={dateOfJoining}
            onChange={(e) => setDateOfJoining(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="dateOfRelieving">Date of Relieving:</label>
          <input
            type="date"
            id="dateOfRelieving"
            value={dateOfRelieving}
            onChange={(e) => setDateOfRelieving(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="experience">Experience:</label>
          <input
            type="text"
            id="experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="photo">Photo:</label>
          <input
            type="file"
            accept="image/*"
            id="photo"
            onChange={handlePhotoChange}
          />
        </div>

        <button type="submit">Add </button>
      </form>
    </div>
  );
}

export default AddEmployee1;
