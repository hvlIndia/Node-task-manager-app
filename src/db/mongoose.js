const mongoose = require("mongoose");
const validator = require ("validator");


mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true
});

// // const User = mongoose.model("User", {
// //   name: {
// //     type: String,
// //     required: true, 
// //     trim: true
// //   },
// //   email: {
// //     type: String,
// //     required: true,
// //     trim: true,
// //     lowercase: true, 
// //     validate(value) {
// //         if (!validator.isEmail(value)) {
// //             throw new Error ('email is invalid') 
// //         }
// //     }
//   },
//   password: {
//     type: String,
//     required: true,
//     minlength: 7 ,
//     trim: true,
   
//     validate(value) {
//         if (value.toLowerCase().includes("password")) {
//             throw new Error ('Password is invalid') 
//         }
//     } 
//   },
//   age: {
//     type: Number,
//     default: 0,
//     validate(value) {
//         if(value < 0) {
//             throw new Error ('age must required positive')
//         }
//     }
//   }
// });

// const me = new User({
//   name: "kumud  ",
//   email: " KUMJUD1@GMAIL.COM  ",
//   password: "readr23@"
// });

// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch(error => {
//     console.log("Error!", error);
//   });


//   const Task = mongoose.model("Task", {
//     description: {
//       type: String,
//       trim: true, 
//       required: true
//     },
//     completed: {
//       type: Boolean,
//       default:false
//     }
//   });
  
//   const task = new Task({
//     description: "learn the mongoose db",
//     completed: false, 
//     trim: true
//   });
  
//   task.save()
//     .then(() => {
//       console.log(task);
//     })
//     .catch(error => {
//       console.log("Error!", error);
//     });
