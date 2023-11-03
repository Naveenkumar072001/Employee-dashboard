import React from "react";
import "./viewattendance.css";

const ViewAttendance = ({ attendanceRecords, onDeleteRecord }) => {
  return (
    <div>
      <h2>View Attendance</h2>
      <table>
        <thead>
          <tr>
            <th>Students</th>
            <th>Status</th>
            <th>In Date</th>
            <th>In Time</th>
            <th>Out Date</th>
            <th>Comments</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {attendanceRecords.map((attendanceRecord, index) => (
            <tr key={index}>
              <td>{attendanceRecord.students.join(", ")}</td>
              <td>{attendanceRecord.status}</td>
              <td>{attendanceRecord.inDate}</td>
              <td>{attendanceRecord.inTime}</td>
              <td>{attendanceRecord.outDate}</td>
              <td>{attendanceRecord.comments}</td>
              <td>
                <button onClick={() => onDeleteRecord(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewAttendance;
