const people = [];
const table = document.querySelector("tbody");

document.forms.add.addEventListener("submit", (e) => {
  e.preventDefault();

  const fullName = e.target.elements.fname.value.trim();

  const name = fullName.split(" ")[0];
  const surname = fullName.replace(name, "").trim();

  const person = {
    name: name,
    surname: surname,
  };

  people.push(person);

  displayTable();
});

function displayTable() {
  table.innerHTML = "";

  people.forEach((person) => {
    const tr = table.insertRow();

    const td1 = tr.insertCell();
    td1.textContent = person.name;

    const td2 = tr.insertCell();
    td2.textContent = person.surname;
  });
}
