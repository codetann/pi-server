const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("index.html");
});

app.listen(PORT, () => console.log(`[server] - running on port ${PORT}`));
