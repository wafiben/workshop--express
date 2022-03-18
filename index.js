const { response } = require("express");
const express = require("express");
const midelware=require('./midelware.js')
const app = express();
const port = 5000;
//midelware global
app.use(express.json());

const users = [
  { id: 0, name: "hamza", email: "hamza@gmail.com" },
  { id: 1, name: "houcine", email: "houcine@gmail.com" },
  { id: 2, name: "wafi", email: "wafi@gmail.com" },
  { id: 3, name: "leith", email: "leith@gmail.com" },
];
//http request
//no body
app.get("/users",midelware, (request, response) => {
  response.send(users);
});
//body
app.post("/users", (req, res) => {
  const user = req.body;
  users.push(user);
  res.status(200).json({ users: users });
});
//delete
//params
app.delete("/users/:id", (req, res) => {
  const id = req.params.id;
  const searchedUser = users.find((user) => user.id == id);

  if (searchedUser) {
    const userAfterDelete = users.filter((elt) => elt.id != id);
    res
      .status(200)
      .json({ msg: "user is sucuusfylly deleted", users: userAfterDelete });
  } else {
    res.status(400).json({ msg: "this user not found" });
  }
});
//put
//parapms
//body
app.put("/users/:id", (req, res) => {
  const id = req.params.id;
  const updatedUse = req.body;
  users.map((elt) => {
    if (elt.id == id) {
      return updatedUse;
    } else {
      return elt;
    }
  });
  res.status(200).json({updatedUser:updatedUse})
});
app.listen(port, (error) => {
  if (error) {
    console.log("server failed");
  } else {
    console.log(`server is running on port ${port}`);
  }
});
