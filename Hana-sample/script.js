// Define an array to store form submissions
let formSubmissions = [];

// Function to handle form submission
function handleFormSubmission(event) {
  event.preventDefault();

  // Capture the form data
  let formData = {
    name: document.getElementById("inputName").value,
    workContent: document.getElementById("inputTask").value,
    workDate: document.getElementById("inputDate").value,
    // Capture other form fields as needed
  };

  // Store the form data in the array
  formSubmissions.push(formData);

  // Redirect to calendar.html with formSubmissions as query parameter
  window.location.href = `calendar.html?submissions=${encodeURIComponent(
    JSON.stringify(formSubmissions)
  )}`;
}

// Add event listener to form submission
document.querySelector("form").addEventListener("submit", handleFormSubmission);

// Example data for applicants
const applicants = [
  {
    requester: "김어른",
    workContent: "고추 심기",
    workDate: "2023-06-05 - 2023-06-10",
    applicant: "지원자 1",
    name: "홍길동",
    age: 30,
    durationOfResidence: "5년",
  },
  {
    requester: "박성인",
    workContent: "모내기",
    workDate: "2023-06-10 - 2023-06-20",
    applicant: "지원자 2",
    name: "김철수",
    age: 25,
    durationOfResidence: "3년",
  },
  // Add more applicant data as needed
];

// Function to generate table rows dynamically
function generateApplicantRows() {
  const tableBody = document.getElementById("applicantList");

  applicants.forEach((applicant) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${applicant.requester}</td>
      <td>${applicant.workContent}</td>
      <td>${applicant.workDate}</td>
      <td>${applicant.applicant}</td>
      <td>${applicant.name}</td>
      <td>${applicant.age}</td>
      <td>${applicant.durationOfResidence}</td>
    `;

    tableBody.appendChild(row);
  });
}

// Call the function to generate table rows
generateApplicantRows();
