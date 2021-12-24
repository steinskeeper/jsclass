const express = require("express");
const res = require("express/lib/response");

let app = express();

app.use(express.json());

// api creation - route creation

app.get("/student", student);
app.get("/", withoutslash);

app.post("/posty", (req, res) => {
  let username = req.body.username;
  let passwd = req.body.password;
  console.log(username, passwd);
  res.send("sending res backkkkk wooohohohohohoho");
});

function student(req, res) {
  let blablabla = "gayathri";

  res.send("hi" + blablabla);
}
function withoutslash(req, res) {
  res.send("this is home");
}

app.listen(3000, () => {
  console.log("sever online");
});
