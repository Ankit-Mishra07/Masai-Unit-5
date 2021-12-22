// function add(first, second) {
//     return first + second
// }

// function mult(first, second) {
//     return first * second
// }

 import {add, mult} from "./calc.js"
 import "./index.css"
console.log(add(5, 15))
console.log(mult(3, 5))

const h1 = document.createElement("h1")

h1.innerText = "Hello WebPack"
h1.classList.add("redcolor");
document.getElementById("root").appendChild(h1)
