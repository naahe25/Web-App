let counter = 1;

document.getElementById("userForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // Input values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const age = document.getElementById("age").value;
  const phone = document.getElementById("phone").value;

  // Add to table
  const tableBody = document.getElementById("userTableBody");
  const newRow = document.createElement("tr");

  newRow.innerHTML = `
    <td class="border px-4 py-2">${counter++}</td>
    <td class="border px-4 py-2">${name}</td>
    <td class="border px-4 py-2">${email}</td>
    <td class="border px-4 py-2">${age}</td>
    <td class="border px-4 py-2">${phone}</td>
  `;

  tableBody.appendChild(newRow);

  // Reset form
  document.getElementById("userForm").reset();
});
