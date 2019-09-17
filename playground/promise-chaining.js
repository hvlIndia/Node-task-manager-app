require("../src/db/mongoose");
const User = require("../src/models/user");

// User.findByIdAndUpdate("5d68e8e3e541d84c5c29eb22", { age: 1 })
//   .then(user => {
//     console.log(user);
//     return User.countDocuments({ age: 1 });
//   })
//   .then(result => {
//     console.log(result);
//   })
//   .catch(e => {
//     console.log(e);
//   });

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
};

updateAgeAndCount("5d68e8e3e541d84c5c29eb22", 2)
  .then(count => {
    console.log(count);
  })
  .catch(e => {
    console.log(e);
  });
