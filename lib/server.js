const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("public"));
app.use(express.static(path.resolve(__dirname, "assets")));

app.get("/", (req, res) => {
  res.send("index.html");
});

app.get("/download", (req, res) => {
  const file = `${__dirname}/assets/bg.jpg`;
  res.download(file);
});

app.listen(PORT, () => console.log(`[server] - running on port ${PORT}`));
