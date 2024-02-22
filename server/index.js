const express = require("express");

const app = express();
const PORT = 5050;

app.get("/", (req, res) => {
  res.status(201).send((msg = "Get method at home page"));
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
