require('../src/db/mongoose');
const Task = require('../src/models/task');


// Task.findByIdAndDelete('5d69268cf7a7a825d8d29b8b').then((task) => {
//     console.log(task)
//     return Task.countDocuments ({completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })


const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({ completed: false });
    return count;
  };
  
  deleteTaskAndCount("5d68dbbcec3bbb5bd84a4201")
    .then(count => {
      console.log(count);
    })
    .catch(e => {
      console.log(e);
    });