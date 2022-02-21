import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

// const citrus = ["Lime", "Lemon", "Orange"];
// const fruits = ["Apple", ...citrus, "Banana", "Coconut"];
// console.log(fruits);
//The {...citrus} is a spread operator {...} what it does
//is that it extends the array through the called const from where
//it gets pushed then completes the called array via spread and once
//that called array is done it gets back to the originally
//called array and finishes it.

// const fullName = {
//   fName: "James",
//   lName: "Bond"
// };

// const user = {
//   ...fullName, //This will now therefore extract the object elements of {fullName}
//   id: 1,
//   username: "jamesbond007"
// };

// console.log(user);
