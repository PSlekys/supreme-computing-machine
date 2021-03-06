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

const sort = document.querySelector("div.container > button");

sort.addEventListener("click", () => {
  displayTable(
    people
      .sort((a, b) => (a.surname < b.surname ? -1 : 1))
      .sort((a, b) => (a.name < b.name ? -1 : 1))
  );
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

const all = document.querySelector("div.container > button:last-child");

all.addEventListener("click", () => {
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
