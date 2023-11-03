import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./Employeedetails.css";
import { Create_data } from "../url/url";
<link
  href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap"
  rel="stylesheet"
></link>;

function AddEmployee({ onAddEmployee, onAddEmployee2, onAddEmployee3 }) {
  const [firstname, setName] = useState("");
  const [lastname, setPosition] = useState("");
  const [fathername, setFathername] = useState("");
  const [mothername, setMothername] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");
  const [contact, setContact] = useState("");
  const [fathernumber, setFathernumber] = useState("");
  const [maritalstatus, setMaritalstatus] = useState("");
  const [gender, setGender] = useState("");
  const [Qualification, setQualification] = useState("");
  const [hscMarks, setHSCMarks] = useState("");
  const [hscSchoolName, setHSCSchoolName] = useState("");
  const [hscPassedYear, setHSCPassedYear] = useState("");
  const [hscPercentage, setHSCPercentage] = useState("");
  const [diplomaMarks, setDiplomaMarks] = useState("");
  const [diplomaCollegeName, setDiplomaCollegeName] = useState("");
  const [diplomaPassedYear, setDiplomaPassedYear] = useState("");
  const [diplomaSpecialization, setDiplomaSpecialization] = useState("");
  const [diplomaPercentage, setDiplomaPercentage] = useState("");
  const [diplomaClass, setDiplomaClass] = useState("");
  const [degree, setDegree] = useState("");
  const [cgpa, setCgpa] = useState("");
  const [passedout, setPassedout] = useState("");
  const [photo, setPhoto] = useState("");
  const [totalAmount, setTotalAmount] = useState(30000);
  const [paidAmount, setPaidAmount] = useState(0);
  const [remainingAmount, setRemainingAmount] = useState(30000);
  const [employeeCount, setEmployeeCount] = useState(0);

  let post_datas = async () => {
    await axios.post(Create_data, {
      firstname,
      lastname,
      fathername,
      mothername,
      email,
      address,
      dob,
      contact,
      fathernumber,
      maritalstatus,
      gender,
      Qualification,
      hscMarks,
      hscSchoolName,
      hscPassedYear,
      hscPercentage,
      diplomaMarks,
      diplomaCollegeName,
      diplomaPassedYear,
      diplomaSpecialization,
      diplomaPercentage,
      diplomaClass,
      degree,
      cgpa,
      passedout,
      photo,
      totalAmount,
      paidAmount,
      remainingAmount,
    });
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

  useEffect(() => {
    const newRemainingAmount = totalAmount - paidAmount;
    setRemainingAmount(newRemainingAmount);
  }, [totalAmount, paidAmount]);

  const handleRadioChange = (e) => {
    const value = e.target.value;
    setQualification(value);

    if (value === "HSC");
    setHSCMarks("");
    setHSCSchoolName("");
    setHSCPassedYear("");
    setHSCPercentage("");
    setDiplomaMarks("");
    setDiplomaCollegeName("");
    setDiplomaPassedYear("");
    setDiplomaSpecialization("");
    setDiplomaPercentage("");
    setDiplomaClass("");
  };

  const handleDiplomaClassChange = (e) => {
    setDiplomaClass(e.target.value);
  };

  const handleTotalAmountChange = () => {
    setTotalAmount(30000);
  };

  const handlePaidAmountChange = (e) => {
    setPaidAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setEmployeeCount(employeeCount + 1);

    const id = `STU${employeeCount.toString().padStart(3, "0")}`;

    const newEmployee = {
      id,
      firstname,
      lastname,
      fathername,
      mothername,
      email,
      address,
      dob,
      contact,
      fathernumber,
      maritalstatus,
      gender,
      Qualification,
      hscMarks,
      hscSchoolName,
      hscPassedYear,
      hscPercentage,
      diplomaMarks,
      diplomaCollegeName,
      diplomaPassedYear,
      diplomaSpecialization,
      diplomaPercentage,
      diplomaClass,
      degree,
      cgpa,
      passedout,
      photo,
    };
    onAddEmployee(newEmployee);
    setName("");
    setPosition("");
    setFathername("");
    setMothername("");
    setEmail("");
    setAddress("");
    setDob("");
    setContact("");
    setFathernumber("");
    setMaritalstatus("");
    setGender("");
    setQualification("");
    setDegree("");
    setCgpa("");
    setPassedout("");
    setPhoto("");
    localStorage.setItem("employeeCount", employeeCount + 1);
  };

  return (
    <div className="Container">
      <h2>STUDENT ENTRY FORM</h2>
      <div className="box">
        <Link className="one" to="/EmployeeDetails">
          <i id="add" class="fa-solid fa-users"></i>
          <h2>Add Student</h2>
        </Link>
        <Link className="two" to="/Employeelist">
          <i id="view" class="fa-solid fa-users"></i>
          <h2>View Student</h2>
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
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="contact">Contact:</label>
          <input
            type="tel"
            id="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="fathernumber">Father Number:</label>
          <input
            type="tel"
            id="fathernumber"
            value={fathernumber}
            onChange={(e) => setFathernumber(e.target.value)}
          />
        </div>
        <div>
          <label>Marital Status:</label>
          <label htmlFor="maritalYes">
            <input
              type="checkbox"
              id="maritalYes"
              value="yes"
              checked={maritalstatus === "yes"}
              onChange={(e) =>
                setMaritalstatus(e.target.checked ? "yes" : "no")
              }
            />
            Yes
          </label>
          <label htmlFor="maritalNo">
            <input
              type="checkbox"
              id="maritalNo"
              value="no"
              checked={maritalstatus === "no"}
              onChange={(e) =>
                setMaritalstatus(e.target.checked ? "no" : "yes")
              }
            />
            No
          </label>
        </div>

        <div>
          <label>Gender:</label>
          <label htmlFor="male">
            <input
              type="checkbox"
              id="male"
              value="male"
              checked={gender === "male"}
              onChange={(e) => setGender(e.target.checked ? "male" : "")}
            />
            Male
          </label>
          <label htmlFor="female">
            <input
              type="checkbox"
              id="female"
              value="female"
              checked={gender === "female"}
              onChange={(e) => setGender(e.target.checked ? "female" : "")}
            />
            Female
          </label>
        </div>

        <div>
          <label>Qualification:</label>
          <label>
            <input
              type="radio"
              name="qualification"
              value="HSC"
              checked={Qualification === "HSC"}
              onChange={handleRadioChange}
            />
            HSC
          </label>
          <label>
            <input
              type="radio"
              name="qualification"
              value="Diploma"
              checked={Qualification === "Diploma"}
              onChange={handleRadioChange}
            />
            Diploma
          </label>

          {Qualification === "HSC" && (
            <div>
              <label htmlFor="hscMarks">HSC Marks:</label>
              <input
                type="number"
                id="hscMarks"
                value={hscMarks}
                onChange={(e) => setHSCMarks(e.target.value)}
              />
              <label htmlFor="hscSchoolName">HSC School Name:</label>
              <input
                type="text"
                id="hscSchoolName"
                value={hscSchoolName}
                onChange={(e) => setHSCSchoolName(e.target.value)}
              />
              <label htmlFor="hscPassedYear">HSC Passed Year:</label>
              <input
                type="number"
                id="hscPassedYear"
                value={hscPassedYear}
                onChange={(e) => setHSCPassedYear(e.target.value)}
              />
              <label htmlFor="hscPercentage">HSC Percentage:</label>
              <input
                type="number"
                id="hscPercentage"
                value={hscPercentage}
                onChange={(e) => setHSCPercentage(e.target.value)}
              />
            </div>
          )}

          {Qualification === "Diploma" && (
            <div>
              <label htmlFor="diplomaMarks">Diploma Marks:</label>
              <input
                type="number"
                id="diplomaMarks"
                value={diplomaMarks}
                onChange={(e) => setDiplomaMarks(e.target.value)}
              />
              <label htmlFor="diplomaCollegeName">Diploma CollegeName:</label>
              <input
                type="text"
                id="diplomaCollegeName"
                value={diplomaCollegeName}
                onChange={(e) => setDiplomaCollegeName(e.target.value)}
              />
              <label htmlFor="diplomaPassedYear">Diploma PassedYear:</label>
              <input
                type="number"
                id="diplomaPassedYear"
                value={diplomaPassedYear}
                onChange={(e) => setDiplomaPassedYear(e.target.value)}
              />
              <label htmlFor="diplomaSpecialization">
                Diploma Specialization:
              </label>
              <input
                type="text"
                id="diplomaSpecialization"
                value={diplomaSpecialization}
                onChange={(e) => setDiplomaSpecialization(e.target.value)}
              />

              <label htmlFor="diplomaPercentage">Diploma Percentage:</label>
              <input
                type="text"
                id="diplomaPercentage"
                value={diplomaPercentage}
                onChange={(e) => setDiplomaPercentage(e.target.value)}
              />

              <label htmlFor="diplomaClass">Diploma Class:</label>
              <select
                id="diplomaClass"
                value={diplomaClass}
                onChange={handleDiplomaClassChange}
              >
                <option value="">Select</option>
                <option value="First">First</option>
                <option value="Second">Second</option>
              </select>
            </div>
          )}
        </div>

        <div>
          <label htmlFor="cgpa">CGPA (Percentage):</label>
          <input
            type="number"
            id="cgpa"
            min="0"
            max="100"
            step="0.01"
            value={cgpa}
            onChange={(e) => setCgpa(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="passedout">PassedOut Year:</label>
          <input
            type="number"
            id="passedout"
            value={passedout}
            onChange={(e) => setPassedout(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="totalAmount">Total Amount:</label>
          <input
            type="number"
            id="totalAmount"
            value={totalAmount}
            readOnly
            onChange={handleTotalAmountChange}
          />
        </div>
        <div>
          <label htmlFor="paidAmount">Paid Amount:</label>
          <input
            type="number"
            id="paidAmount"
            value={paidAmount}
            onChange={handlePaidAmountChange}
          />
        </div>
        <div>
          <label htmlFor="remainingAmount">Remaining Amount:</label>
          <input
            type="number"
            id="remainingAmount"
            value={remainingAmount}
            readOnly
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
        <button type="submit" onClick={post_datas}>
          Add{" "}
        </button>
      </form>
    </div>
  );
}

export default AddEmployee;
