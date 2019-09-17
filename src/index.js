const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");
const app = express();
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//   //console.log(req.method, req.path)

//   if (req.method === "GET") {
//     res.send("GET request is disabled");
//   } else {
//     next();
//   }
// });

// app.use((req, res, next) => {
//   res.status(503).send('site is currently down. check back soon!')
// })

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Server is run on port " + port);
});

// const bcrypt = require ("bcryptjs");

// const myFunction = async() => {
//   const password = "readr23@"
//   const hashedPassword = await bcrypt.hash(password, 8)

//   console.log(password)
//   console.log(hashedPassword)

//   const isMatch = await bcrypt.compare("eadr23@", hashedPassword)
//   console.log(isMatch)
// }

// myFunction()

// const jwt = require("jsonwebtoken");

// const myFunction = async () => {
//   const token = jwt.sign({ _id: "abc123" }, "this is my new course", {
//     expiresIn: "7 days"
//   });
//   console.log(token);

//   const data = jwt.verify(token, "this is my new course");
//   console.log(data);
// };

// myFunction();

const Task = require("./models/task");

const main = async () => {
  const task = await Task.findById("5d7f9e24c5256948786e1683");
  await task.populate("owner").execPopulate();
  console.log(task.owner);
};

main();
