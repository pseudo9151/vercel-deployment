const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 3000;
const app = express();
app.use(cors());
let count = 0;
app.use(express.json());
app.get("/", (req, res) => {
  count++;
  if (count <= 5) {
    return res.json({ status: true });
  } else {
    return res.json({ status: false });
  }
});
app.listen(port, () => {
  console.log("port is running at ", port);
});
