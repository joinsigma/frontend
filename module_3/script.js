fetch("https://reqres.in/api/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "Tim",
    job: "Software Engineer",
  }),
})
  .then((res) => {
    return res.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

fetch("https://reqres.in/api/users/5", {
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
    email: "eve.holt@reqres.in",
    password: "pistol",
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
    email: "eve.holt@reqres.in",
    password: "pistol",
  }),
})
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    let { token } = data;
    console.log(`Token = ${token}`);
  })
  .catch((error) => console.log(error));
