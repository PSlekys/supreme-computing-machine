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

  displayTable(people);
});

const filterInput = document.querySelector("div.container > input");

filterInput.addEventListener("keyup", () => {
  displayTable(
    people.filter((value) =>
      (value.name + " " + value.surname)
        .toLowerCase()
        .includes(filterInput.value.toLowerCase())
    )
  );
});

document
  .querySelector("div.container > button:last-child")
  .addEventListener("click", () => {
    displayTable(people);
  });

function displayTable(array) {
  table.innerHTML = "";

  array.forEach((person) => {
    const tr = table.insertRow();

    const td1 = tr.insertCell();
    td1.textContent = person.name;

    const td2 = tr.insertCell();
    td2.textContent = person.surname;
  });
}
