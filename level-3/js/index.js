let followers = [];
result = $("#result");

const fetchAPI = () => {
  fetch("https://api.github.com/users/indrolie/followers")
    .then(response => response.json())
    .then(showFollowers);
};

const showTemplate = person => {
  return `
  <div class="card" style="width: 18rem;">
    <img class="card-img-top" src="${person.avatar_url}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${person.login}</h5>
      <a href="${person.html_url}" class="btn btn-primary">Go to profile</a>
    </div>
  </div>
`;
};

const showFollowers = data => {
  data.forEach(person => {
    const card = showTemplate(person);

    result.append(card);
  });
};

window.addEventListener("load", function() {
  fetchAPI();
});
