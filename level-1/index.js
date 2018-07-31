let i = 1;
people = [];

while (i < 11) {
  fetch(`https://swapi.co/api/people/${i}/`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      people.push(data);
    });
  i++;
}

console.log(people);
