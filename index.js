const express = require("expresss");

const app = express();

//routes
app.get("/", (req, res) => {
  res.json({ success: "true" });
});

//start listening to thhe server
app.listen(3000, () => {
  console.log("Server Started :white_check_mark:");
});
