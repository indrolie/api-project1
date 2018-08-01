//DOM variable
const result = $("#result");

const fetchAPI = () => {
  for (let i = 1; i < 11; i++) {
    fetch(`https://swapi.co/api/people/${i}/`)
      .then(response => response.json())
      .then(showPeople);
  }
};

const template = person => {
  return `<div>
          <div>No.</div>
          <div>Name: ${person.name}</div>
          <div>Height: ${person.height}</div>
          <div>Hair Color: ${person.hair_color}</div>
          <hr>
          </div>`;
};

const showPeople = data => {
  const peopleDOM = template(data);

  result.append(peopleDOM);
};

window.addEventListener("load", function() {
  fetchAPI();
});
