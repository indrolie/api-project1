fetch("https://swapi.co/api/people/1/")
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data);
  });
