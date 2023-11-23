app.post("/users", (request, response) => {
  const { name, email, password } = request.body;
  response.send(`User: ${name}. E-mail: ${email}. senha ${password}`);
});
