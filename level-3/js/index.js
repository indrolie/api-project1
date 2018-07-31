let followers = [];
result = $("#result");
submit = $("#submit");

const fetchAPI = () => {
  fetch("https://api.github.com/users/indrolie/followers")
    .then(response => {
      return response.json();
    })
    .then(data => {
      followers = data;
      console.log(followers);
    });
};

const showTemplate = (person, index) => {
  return `
    <div class="col-sm">
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${
          person.avatar_url
        }" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${person.login}</h5>
          <a href="${person.html_url}" class="btn btn-primary">Go to profile</a>
        </div>
      </div>
    </div>
`;
};

const showFollowers = () => {
  result.html("");
  followers.map((person, index) => {
    const card = showTemplate(person, index);

    result.append(card);
  });
};

window.addEventListener("load", function() {
  fetchAPI();
});

submit.on("click", function() {
  showFollowers();
});