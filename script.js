 

let counter = 1;

document.getElementById("userForm").addEventListener("submit", function (event) {
  event.preventDefault(); 

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  const tableBody = document.getElementById("userTableBody");

  const newRow = document.createElement("tr");

  newRow.innerHTML = `
    <td class="border px-4 py-2">${counter++}</td>
    <td class="border px-4 py-2">${name}</td>
    <td class="border px-4 py-2">${email}</td>
  `;

  tableBody.appendChild(newRow);

  
  document.getElementById("userForm").reset();
});
