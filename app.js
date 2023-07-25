let studentData = [];
document
  .getElementById("studentForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let dob = document.getElementById("dob").value;
    let parentName = document.getElementById("parentName").value;
    let address = document.getElementById("address").value;
    let city = document.getElementById("city").value;
    let phone = document.getElementById("phone").value;

    studentData.push({
      firstName: firstName,
      lastName: lastName,
      dob: dob,
      parentName: parentName,
      address: address,
      city: city,
      phone: phone,
    });

    // Show success message
    let successMessage = document.getElementById("successMessage");
    successMessage.style.display = "block";
    setTimeout(function () {
      successMessage.style.display = "none";
    }, 1000);
  });

document.getElementById("viewReportBtn").addEventListener("click", function () {
  let tableData =
    "<tr><th>First Name</th><th>Last Name</th><th>Date of Birth</th><th>Parent's Name</th><th>Address</th><th>City</th><th>Phone Number</th></tr>";
  studentData.forEach(function (student) {
    tableData += `<tr><td>${student.firstName}</td><td>${student.lastName}</td><td>${student.dob}</td><td>${student.parentName}</td><td>${student.address}</td><td>${student.city}</td><td>${student.phone}</td></tr>`;
  });
  let myWindow = window.open("", "MsgWindow", "width=500,height=500");
  myWindow.document.write(`<table>${tableData}</table>`);
});
