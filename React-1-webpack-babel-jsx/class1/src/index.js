// function add(first, second) {
//     return first + second
// }

// function mult(first, second) {
//     return first * second
// }

//  import {add, mult} from "./calc.js"
 import "./index.css"
import React from "react"
import ReactDom from "react-dom"

// const h1 = document.createElement("h1")

// h1.innerText = "Hello WebPack"
// h1.classList.add("redcolor");
// document.getElementById("root").appendChild(h1)

// ReactDom.render(
//     React.createElement("h1", {className : "first"}, [
//         "Hello webpack ",
//         React.createElement("i", null, "React"),
//     ]),
//     document.getElementById("root")
// )

ReactDom.render(
    <h1 className="first">Hello
    <i>React</i>
    </h1>
    ,

    document.getElementById("root")
)