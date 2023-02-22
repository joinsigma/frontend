fetch("https://reqres.in/api/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "Tim",
    job: "Software Engineer",
  }),
});

fetch("https://reqres.in/api/users/5", {
  method: "DELETE",
})
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

fetch("https://reqres.in/api/users/2", {
  method: "DELETE",
})
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

fetch("https://reqres.in/api/register", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "eve.holt@reqres.in",
    job: "pistol",
  }),
})
  .then((res) => {
    return res.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

fetch("https://reqres.in/api/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "eve.holt@reqres.in",
    job: "pistol",
  }),
})
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    // a common form of authentication where the API returns a unique token
    let { token } = data;
    console.log(token);
  })
  .catch((error) => console.log(error));
