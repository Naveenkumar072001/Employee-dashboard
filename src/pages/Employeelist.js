import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Employeelist.css";

function EmployeeList({ employees, onDeleteEmployee, onUpdateEmployee }) {
  const [searchInput, setSearchInput] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editedEmployee, setEditedEmployee] = useState(null);
  const [viewEmployeeId, setViewEmployeeId] = useState(null);

  // Filter employees based on the search input
  const filteredEmployees = employees.filter((employee) => {
    const searchValue = searchInput.toLowerCase();
    return (
      employee.firstname.toLowerCase().includes(searchValue) ||
      employee.lastname.toLowerCase().includes(searchValue) ||
      employee.contact.includes(searchValue)
    );
  });

  const handleSaveClick = (editedEmployee, index) => {
    onUpdateEmployee(editedEmployee, index); // Call the update function with updated data and index
    setIsEditing(false);
    setEditedEmployee(null);
  };
  const handleEditClick = (employee) => {
    setIsEditing(true);
    setEditedEmployee(employee);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setEditedEmployee(null);
  };
  const handleViewClick = (employeeId) => {
    setViewEmployeeId(employeeId);
  };

  const handleBackToEmployeeListClick = () => {
    setViewEmployeeId(null);
  };
  return (
    <>
      {viewEmployeeId === null ? (
        <div>
          <input
            type="text"
            placeholder="Search by name or contact"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
      ) : (
        <button onClick={handleBackToEmployeeListClick}>
          Back to Student List
        </button>
      )}

      {viewEmployeeId === null ? (
        <div>
          <h2>STUDENTS LIST</h2>
          <div className="box">
            <Link className="one" to="/Employeelist">
              <i class="fa-solid fa-users"></i>
              <h2>View Studentlist</h2>
            </Link>
            <Link className="two" to="/Employeelist1">
              <i class="fa-solid fa-users"></i>
              <h2>View Employeelist</h2>
            </Link>
          </div>

          <table className="EmployeeTable">
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Father Name</th>
                <th>Mother Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>DOB</th>
                <th>Contact</th>
                <th>Father Number</th>
                <th>Marital Status</th>
                <th>Gender</th>
                <th>Qualification</th>
                <th>Hsc Marks</th>
                <th>Hsc School Name</th>
                <th>Hsc PassedYear</th>
                <th>Hsc Percentage</th>
                <th>Diploma Marks</th>
                <th>Diploma CollegeName</th>
                <th>Diploma PassedYear</th>
                <th>Diploma Specialization</th>
                <th>Diploma Percentage</th>
                <th>Diploma Class</th>
                <th>Degree</th>
                <th>CGPA</th>
                <th>PassedOut Year</th>
                <th>Photo</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredEmployees.map((employee, index) => (
                <tr key={index}>
                  <td>{employee.id}</td>
                  <td>
                    {isEditing &&
                    editedEmployee &&
                    editedEmployee.id === employee.id ? (
                      <input
                        type="text"
                        value={editedEmployee.firstname}
                        onChange={(e) =>
                          setEditedEmployee({
                            ...editedEmployee,
                            firstname: e.target.value,
                          })
                        }
                      />
                    ) : (
                      employee.firstname
                    )}
                  </td>
                  <td>
                    {isEditing &&
                    editedEmployee &&
                    editedEmployee.id === employee.id ? (
                      <input
                        type="text"
                        value={editedEmployee.lastname}
                        onChange={(e) =>
                          setEditedEmployee({
                            ...editedEmployee,
                            lastname: e.target.value,
                          })
                        }
                      />
                    ) : (
                      employee.lastname
                    )}
                  </td>
                  <td>
                    {isEditing &&
                    editedEmployee &&
                    editedEmployee.id === employee.id ? (
                      <input
                        type="text"
                        value={editedEmployee.fathername}
                        onChange={(e) =>
                          setEditedEmployee({
                            ...editedEmployee,
                            fathername: e.target.value,
                          })
                        }
                      />
                    ) : (
                      employee.fathername
                    )}
                  </td>
                  <td>
                    {isEditing &&
                    editedEmployee &&
                    editedEmployee.id === employee.id ? (
                      <input
                        type="text"
                        value={editedEmployee.mothername}
                        onChange={(e) =>
                          setEditedEmployee({
                            ...editedEmployee,
                            mothername: e.target.value,
                          })
                        }
                      />
                    ) : (
                      employee.mothername
                    )}
                  </td>
                  <td>
                    {isEditing &&
                    editedEmployee &&
                    editedEmployee.id === employee.id ? (
                      <input
                        type="text"
                        value={editedEmployee.email}
                        onChange={(e) =>
                          setEditedEmployee({
                            ...editedEmployee,
                            email: e.target.value,
                          })
                        }
                      />
                    ) : (
                      employee.email
                    )}
                  </td>
                  <td>
                    {isEditing &&
                    editedEmployee &&
                    editedEmployee.id === employee.id ? (
                      <textarea
                        value={editedEmployee.address}
                        onChange={(e) =>
                          setEditedEmployee({
                            ...editedEmployee,
                            address: e.target.value,
                          })
                        }
                      />
                    ) : (
                      employee.address
                    )}
                  </td>
                  <td>
                    {isEditing &&
                    editedEmployee &&
                    editedEmployee.id === employee.id ? (
                      <input
                        type="date"
                        value={editedEmployee.dob}
                        onChange={(e) =>
                          setEditedEmployee({
                            ...editedEmployee,
                            dob: e.target.value,
                          })
                        }
                      />
                    ) : (
                      employee.dob
                    )}
                  </td>
                  <td>
                    {isEditing &&
                    editedEmployee &&
                    editedEmployee.id === employee.id ? (
                      <input
                        type="tel"
                        value={editedEmployee.contact}
                        onChange={(e) =>
                          setEditedEmployee({
                            ...editedEmployee,
                            contact: e.target.value,
                          })
                        }
                      />
                    ) : (
                      employee.contact
                    )}
                  </td>
                  <td>
                    {isEditing &&
                    editedEmployee &&
                    editedEmployee.id === employee.id ? (
                      <input
                        type="tel"
                        value={editedEmployee.fathernumber}
                        onChange={(e) =>
                          setEditedEmployee({
                            ...editedEmployee,
                            fathernumber: e.target.value,
                          })
                        }
                      />
                    ) : (
                      employee.fathernumber
                    )}
                  </td>
                  <td>
                    {isEditing &&
                    editedEmployee &&
                    editedEmployee.id === employee.id ? (
                      <label>
                        <input
                          type="checkbox"
                          checked={editedEmployee.maritalstatus === "yes"}
                          onChange={() =>
                            setEditedEmployee({
                              ...editedEmployee,
                              maritalstatus:
                                editedEmployee.maritalstatus === "yes"
                                  ? "no"
                                  : "yes",
                            })
                          }
                        />
                        Yes
                      </label>
                    ) : (
                      employee.maritalstatus
                    )}
                  </td>
                  <td>
                    {isEditing &&
                    editedEmployee &&
                    editedEmployee.id === employee.id ? (
                      <label>
                        <input
                          type="checkbox"
                          checked={editedEmployee.gender === "male"}
                          onChange={() =>
                            setEditedEmployee({
                              ...editedEmployee,
                              gender:
                                editedEmployee.gender === "male" ? "" : "male",
                            })
                          }
                        />
                        Male
                      </label>
                    ) : (
                      employee.gender
                    )}
                  </td>
                  <td>
                    {isEditing &&
                    editedEmployee &&
                    editedEmployee.id === employee.id ? (
                      <input
                        type="text"
                        value={editedEmployee.Qualification}
                        onChange={(e) =>
                          setEditedEmployee({
                            ...editedEmployee,
                            Qualification: e.target.value,
                          })
                        }
                      />
                    ) : (
                      employee.Qualification
                    )}
                  </td>
                  <td>
                    {isEditing &&
                    editedEmployee &&
                    editedEmployee.id === employee.id ? (
                      <input
                        type="number"
                        value={editedEmployee.hscMarks}
                        onChange={(e) =>
                          setEditedEmployee({
                            ...editedEmployee,
                            hscMarks: e.target.value,
                          })
                        }
                      />
                    ) : (
                      employee.hscMarks
                    )}
                  </td>
                  <td>
                    {isEditing &&
                    editedEmployee &&
                    editedEmployee.id === employee.id ? (
                      <input
                        type="text"
                        value={editedEmployee.hscSchoolName}
                        onChange={(e) =>
                          setEditedEmployee({
                            ...editedEmployee,
                            hscSchoolName: e.target.value,
                          })
                        }
                      />
                    ) : (
                      employee.hscSchoolName
                    )}
                  </td>
                  <td>
                    {isEditing &&
                    editedEmployee &&
                    editedEmployee.id === employee.id ? (
                      <input
                        type="number"
                        value={editedEmployee.hscPassedYear}
                        onChange={(e) =>
                          setEditedEmployee({
                            ...editedEmployee,
                            hscPassedYear: e.target.value,
                          })
                        }
                      />
                    ) : (
                      employee.hscPassedYear
                    )}
                  </td>
                  <td>
                    {isEditing &&
                    editedEmployee &&
                    editedEmployee.id === employee.id ? (
                      <input
                        type="number"
                        value={editedEmployee.hscPercentage}
                        onChange={(e) =>
                          setEditedEmployee({
                            ...editedEmployee,
                            hscPercentage: e.target.value,
                          })
                        }
                      />
                    ) : (
                      employee.hscPercentage
                    )}
                  </td>
                  <td>
                    {isEditing &&
                    editedEmployee &&
                    editedEmployee.id === employee.id ? (
                      <input
                        type="number"
                        value={editedEmployee.diplomaMarks}
                        onChange={(e) =>
                          setEditedEmployee({
                            ...editedEmployee,
                            diplomaMarks: e.target.value,
                          })
                        }
                      />
                    ) : (
                      employee.diplomaMarks
                    )}
                  </td>
                  <td>
                    {isEditing &&
                    editedEmployee &&
                    editedEmployee.id === employee.id ? (
                      <input
                        type="text"
                        value={editedEmployee.diplomaCollegeName}
                        onChange={(e) =>
                          setEditedEmployee({
                            ...editedEmployee,
                            diplomaCollegeName: e.target.value,
                          })
                        }
                      />
                    ) : (
                      employee.diplomaCollegeName
                    )}
                  </td>
                  <td>
                    {isEditing &&
                    editedEmployee &&
                    editedEmployee.id === employee.id ? (
                      <input
                        type="number"
                        value={editedEmployee.diplomaPassedYear}
                        onChange={(e) =>
                          setEditedEmployee({
                            ...editedEmployee,
                            diplomaPassedYear: e.target.value,
                          })
                        }
                      />
                    ) : (
                      employee.diplomaPassedYear
                    )}
                  </td>
                  <td>
                    {isEditing &&
                    editedEmployee &&
                    editedEmployee.id === employee.id ? (
                      <input
                        type="text"
                        value={editedEmployee.diplomaSpecialization}
                        onChange={(e) =>
                          setEditedEmployee({
                            ...editedEmployee,
                            diplomaSpecialization: e.target.value,
                          })
                        }
                      />
                    ) : (
                      employee.diplomaSpecialization
                    )}
                  </td>
                  <td>
                    {isEditing &&
                    editedEmployee &&
                    editedEmployee.id === employee.id ? (
                      <input
                        type="number"
                        value={editedEmployee.diplomaPercentage}
                        onChange={(e) =>
                          setEditedEmployee({
                            ...editedEmployee,
                            diplomaPercentage: e.target.value,
                          })
                        }
                      />
                    ) : (
                      employee.diplomaPercentage
                    )}
                  </td>
                  <td>
                    {isEditing &&
                    editedEmployee &&
                    editedEmployee.id === employee.id ? (
                      <select
                        value={editedEmployee.diplomaClass}
                        onChange={(e) =>
                          setEditedEmployee({
                            ...editedEmployee,
                            diplomaClass: e.target.value,
                          })
                        }
                      >
                        <option value="First">First</option>
                        <option value="Second">Second</option>
                      </select>
                    ) : (
                      employee.diplomaClass
                    )}
                  </td>
                  <td>
                    {isEditing &&
                    editedEmployee &&
                    editedEmployee.id === employee.id ? (
                      <input
                        type="text"
                        value={editedEmployee.degree}
                        onChange={(e) =>
                          setEditedEmployee({
                            ...editedEmployee,
                            degree: e.target.value,
                          })
                        }
                      />
                    ) : (
                      employee.degree
                    )}
                  </td>
                  <td>
                    {isEditing &&
                    editedEmployee &&
                    editedEmployee.id === employee.id ? (
                      <input
                        type="number"
                        value={editedEmployee.cgpa}
                        onChange={(e) =>
                          setEditedEmployee({
                            ...editedEmployee,
                            cgpa: e.target.value,
                          })
                        }
                      />
                    ) : (
                      `${employee.cgpa}%`
                    )}
                  </td>
                  <td>
                    {isEditing &&
                    editedEmployee &&
                    editedEmployee.id === employee.id ? (
                      <input
                        type="number"
                        value={editedEmployee.passedout}
                        onChange={(e) =>
                          setEditedEmployee({
                            ...editedEmployee,
                            passedout: e.target.value,
                          })
                        }
                      />
                    ) : (
                      employee.passedout
                    )}
                  </td>
                  <td>
                    {isEditing &&
                    editedEmployee &&
                    editedEmployee.id === employee.id ? (
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files[0];
                          if (file) {
                            const reader = new FileReader();
                            reader.onload = (event) => {
                              setEditedEmployee({
                                ...editedEmployee,
                                photo: event.target.result,
                              });
                            };
                            reader.readAsDataURL(file);
                          }
                        }}
                      />
                    ) : (
                      employee.photo && (
                        <img src={employee.photo} alt={` ${employee.name}`} />
                      )
                    )}
                  </td>
                  <td>
                    {isEditing &&
                    editedEmployee &&
                    editedEmployee.id === employee.id ? (
                      <>
                        <button
                          className="savebtn"
                          onClick={() => handleSaveClick(editedEmployee, index)}
                        >
                          Save
                        </button>
                        <button
                          className="cancelbtn"
                          onClick={handleCancelClick}
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <button
                        className="editbtn"
                        onClick={() => handleEditClick(employee)}
                      >
                        Edit
                      </button>
                    )}

                    {viewEmployeeId === null ? (
                      <button
                        onClick={() => handleViewClick(employee.id)}
                        className="viewbtn"
                      >
                        View
                      </button>
                    ) : null}
                    <button
                      className="deletebtn"
                      onClick={() => onDeleteEmployee(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div>
          <h2>Student Details</h2>

          {viewEmployeeId !== null ? (
            <>
              {employees.map((employee) => {
                if (employee.id === viewEmployeeId) {
                  return (
                    <div key={employee.id} className="student-details">
                      <div className="student-photo">
                        {employee.photo && (
                          <img
                            src={employee.photo}
                            alt={`${employee.firstname} ${employee.lastname}`}
                          />
                        )}
                      </div>
                      <div className="student-info">
                        <p>
                          {" "}
                          <span className="bold-text">Name:</span>{" "}
                          {employee.firstname} {employee.lastname}
                        </p>
                        <p>
                          <span className="bold-text">Email: </span>
                          {employee.email}
                        </p>
                        <p>
                          <span className="bold-text">Father Name:</span>{" "}
                          {employee.fathername}
                        </p>
                        <p>
                          <span className="bold-text">Mother Name:</span>{" "}
                          {employee.mothername}
                        </p>
                        <p>
                          <span className="bold-text">Address:</span>{" "}
                          {employee.address}
                        </p>
                        <p>
                          <span className="bold-text">Date of Birth:</span>{" "}
                          {employee.dob}
                        </p>
                        <p>
                          <span className="bold-text">Contact: </span>
                          {employee.contact}
                        </p>
                        <p>
                          <span className="bold-text">Father Number:</span>{" "}
                          {employee.fathernumber}
                        </p>
                        <p>
                          <span className="bold-text">Marital Status: </span>
                          {employee.maritalstatus}
                        </p>
                        <p>
                          <span className="bold-text">Gender:</span>{" "}
                          {employee.gender}
                        </p>
                        <p>
                          <span className="bold-text">Gender: </span>
                          {employee.gender}
                        </p>
                        <p>
                          <span className="bold-text">Qualification:</span>{" "}
                          {employee.Qualification}
                        </p>
                        <p>
                          <span className="bold-text">HSC Marks: </span>
                          {employee.hscMarks}
                        </p>
                        <p>
                          <span className="bold-text">HSC School Name: </span>
                          {employee.hscSchoolName}
                        </p>
                        <p>
                          <span className="bold-text">HSC Passed Year: </span>
                          {employee.hscPassedYear}
                        </p>
                        <p>
                          <span className="bold-text">HSC Percentage:</span>{" "}
                          {employee.hscPercentage}
                        </p>
                        <p>
                          <span className="bold-text">Diploma Marks:</span>{" "}
                          {employee.diplomaMarks}
                        </p>
                        <p>
                          <span className="bold-text">
                            Diploma College Name:
                          </span>{" "}
                          {employee.diplomaCollegeName}
                        </p>
                        <p>
                          <span className="bold-text">
                            Diploma Passed Year:
                          </span>{" "}
                          {employee.diplomaPassedYear}
                        </p>
                        <p>
                          <span className="bold-text">
                            Diploma Specialization:
                          </span>{" "}
                          {employee.diplomaSpecialization}
                        </p>
                        <p>
                          <span className="bold-text">
                            Diploma Percentage:{" "}
                          </span>
                          {employee.diplomaPercentage}
                        </p>
                        <p>
                          <span className="bold-text">Diploma Class:</span>{" "}
                          {employee.diplomaClass}
                        </p>
                        <p>
                          <span className="bold-text">Degree:</span>{" "}
                          {employee.degree}
                        </p>
                        <p>
                          <span className="bold-text">CGPA:</span>{" "}
                          {employee.cgpa}
                        </p>
                        <p>
                          <span className="bold-text">Passed Out Year:</span>{" "}
                          {employee.passedout}
                        </p>
                        {/* <p>
                        Photo:{" "}
                        {employee.photo && (
                          <img
                            src={employee.photo}
                            alt={`${employee.firstname} ${employee.lastname}`}
                          />
                        )}
                      </p> */}
                      </div>
                    </div>
                  );
                }
                return null;
              })}
            </>
          ) : (
            <p>No employee selected.</p>
          )}
        </div>
      )}
    </>
  );
}

export default EmployeeList;
