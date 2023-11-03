import React, { useState } from "react";
import "./attendance.css";

const AttendanceForm = ({ employees, onAttendanceSubmit }) => {
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [status, setStatus] = useState("");
  const [inDate, setInDate] = useState("");
  const [inTime, setInTime] = useState("");
  const [outDate, setOutDate] = useState("");
  const [comments, setComments] = useState("");

  const handleStudentSelection = (studentId) => {
    if (selectedStudents.includes(studentId)) {
      setSelectedStudents(selectedStudents.filter((id) => id !== studentId));
    } else {
      setSelectedStudents([...selectedStudents, studentId]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const attendanceRecord = {
      students: selectedStudents.map((studentId) => {
        const student = employees.find((employee) => employee.id === studentId);
        return `${student.firstname} ${student.lastname}`;
      }),
      status,
      inDate,
      inTime,
      outDate,
      comments,
    };
    onAttendanceSubmit(attendanceRecord);

    setStatus("");
    setInDate("");
    setInTime("");
    setOutDate("");
    setComments("");
    setSelectedStudents([]);
  };

  return (
    <div className="Sanbox">
      <h2>Attendance Form</h2>
      <br />
      <form onSubmit={handleSubmit}>
        <div className="san1">
          <label>Student Names:</label>
          <div className="student-checkboxes">
            {employees.map((employee) => (
              <label key={employee.id}>
                <input
                  type="checkbox"
                  value={employee.id}
                  checked={selectedStudents.includes(employee.id)}
                  onChange={() => handleStudentSelection(employee.id)}
                />
                {`${employee.firstname} ${employee.lastname}`}
              </label>
            ))}
          </div>
        </div>
        <br />
        <hr />
        <div className="san1">
          <label htmlFor="selectedStudents">Selected Students:</label>
          <input
            type="text"
            id="selectedStudents"
            value={selectedStudents
              .map((studentId) => {
                const student = employees.find(
                  (employee) => employee.id === studentId
                );
                return `${student.firstname} ${student.lastname}`;
              })
              .join(", ")}
            readOnly
          />
        </div>
        <br />

        <div className="san1">
          <label htmlFor="status">Status:</label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Present">Present</option>
            <option value="Absent with permission">
              Absent with permission
            </option>
          </select>
        </div>
        <br />
        <div className="san1">
          <label htmlFor="inDate">In Date:</label>
          <input
            type="date"
            id="inDate"
            value={inDate}
            onChange={(e) => setInDate(e.target.value)}
          />
        </div>
        <br />
        <div className="san1">
          <label htmlFor="inTime">In Time:</label>
          <input
            type="time"
            id="inTime"
            value={inTime}
            onChange={(e) => setInTime(e.target.value)}
          />
        </div>
        <br />
        <div className="san1">
          <label htmlFor="outDate">Out Date:</label>
          <input
            type="date"
            id="outDate"
            value={outDate}
            onChange={(e) => setOutDate(e.target.value)}
          />
          <br />
        </div>
        <div className="san1">
          <label htmlFor="comments">Comments:</label>
          <input
            type="text"
            id="comments"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          />
        </div>
        <br />
        <div className="san1">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AttendanceForm;
