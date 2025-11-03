import { Component } from "react";

export default class StudentEnrollmentSystem extends Component {
  render() {
    return (
      <div>
        <h2>Student Enrollment System</h2>
        <div class="container">
          <div class="column">
            <h3>Enrollment Form</h3>
            <form id="enrollmentForm">
              <label for="id">ID:</label>
              <input type="text" id="id" required onkeyup="validateForm()" />

              <label for="name">Name:</label>
              <input type="text" id="name" required onkeyup="validateForm()" />

              <label for="age">Age:</label>
              <input type="number" id="age" min="1" required onkeyup="validateForm()" />

              <label for="gender">Gender:</label>
              <select id="gender" required onchange="validateForm()">
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>

              <label for="coursesEnrolled">Courses Enrolled:</label>
              <input type="text" id="coursesEnrolled" required onkeyup="validateForm()" />

              <label for="enrollmentDate">Enrollment Date:</label>
              <input type="date" id="enrollmentDate" required onchange="validateForm()" />

              <button type="button" disabled onclick="addStudent()">Submit</button>
            </form>
          </div>

          <div class="column">
            <br />
            <hr />
            <h3>Enrolled Students</h3>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Courses</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody id="studentTableBody"></tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}