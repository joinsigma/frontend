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
  .then((res) => console.log(data))
  .catch((error) => console.log(error));
