//DOM variable
const result = $("#result");

let people = [];

const fetchAPI = () => {
  for (let i = 1; i < 11; i++) {
    fetch(`https://swapi.co/api/people/${i}/`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        people.push(data);
      });
  }
};

const template = (detail, index) => {
  let no = index + 1;
  return `<div>No.${no}</div>
          <div>Name: ${detail.name}</div>
          <div>Height: ${detail.height}</div>
          <div>Hair Color: ${detail.hair_color}</div>
          <hr>`;
};

const getPeople = () => {
  result.html("");
  people.map((detail, index) => {
    const details = template(detail, index);

    result.append(details);
  });
};

window.addEventListener("load", function() {
  fetchAPI();
  this.setTimeout(getPeople, 3000);
});
