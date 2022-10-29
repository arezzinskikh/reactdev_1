const express = require("express");
const cors = require("cors");

const app = express();

const jsonMock = {
  first_name: "Bob",
  last_name: "Smith",
  age: 88,
  email: "example@mock.com",
};

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.send(JSON.parse(JSON.stringify(process.env)));
});

app.get("/users", (req, res) => {
  res.send(jsonMock);
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
