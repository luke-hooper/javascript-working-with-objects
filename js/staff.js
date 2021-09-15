(function () {
  var staff = JSON.parse(localStorage.getItem("staffList"));
  if (staff === null) {
    staff = [];
  }

  document
    .getElementById("addStaffForm")
    .addEventListener("submit", function (ev) {
      ev.preventDefault();
      let newStaffName = document.getElementById("staffName").value;
      let newStaffEmail = document.getElementById("staffEmail").value;
      staff.push({ name: newStaffName, email: newStaffEmail });
      console.dir(staff);
      rebuildList();
    });
  var rebuildList = function () {
    document.getElementById("staffTable").innerHTML = "";
    staff.forEach(function (element) {
      var newStaffRow = document.createElement("tr");
      var newStaffName = document.createElement("td");
      newStaffName.innerHTML = element.name;
      var newStaffEmail = document.createElement("td");
      newStaffEmail.innerHTML = element.email;
      newStaffRow.appendChild(newStaffName);
      newStaffRow.appendChild(newStaffEmail);
      document.getElementById("staffTable").appendChild(newStaffRow);
    });

    localStorage.setItem("staffList", JSON.stringify(staff));
  };
  rebuildList();
})();
