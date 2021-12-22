import "./index.css"

if(localStorage.getItem("notePad") === null) {
    localStorage.setItem("notePad", JSON.stringify([]))
}


let save_btn = document.getElementById("save_btn")
save_btn.addEventListener("click", SaveData)
function SaveData() {
let getLocal = JSON.parse(localStorage.getItem("notePad"))

    let textArea = document.getElementById("note_box")
    let title_box = document.getElementById("title_box")
    let obj = {
        title : title_box.value,
        mytext : textArea.value
    }
    if(title_box.value !== "" && textArea.value !== "") {

        getLocal.push(obj)
        title_box.value = ""

        textArea.value = ""
    }else {
        alert("Title and content is required")
    }



    localStorage.setItem("notePad", JSON.stringify(getLocal))  
    location.reload(true)
} 



let output_box = document.querySelector(".output_box")
let getData = JSON.parse(localStorage.getItem("notePad"))
function Appendto(getData) {
getData.forEach((ele, index) => {
    let div = document.createElement("div")
    div.setAttribute("class", "showingTitle")

    let p = document.createElement("p")
    p.innerText = ele.title

    let button = document.createElement("button")
    button.innerText = "Delete"
    button.onclick = function() {
        DeleteData(index, div)
    }
    div.append(p,button)
    div.onclick = function () {
        
        ShowThatData(ele)
    }

    output_box.appendChild(div)



})
}
Appendto(getData)
localStorage.setItem("notePad", JSON.stringify(getData))  





function DeleteData(index, div) {

   let getDLocal = JSON.parse(localStorage.getItem("notePad"))

   console.log(index)
   getDLocal.splice(index, 1)
   localStorage.setItem("notePad", JSON.stringify(getDLocal))  
   div.remove()

   
}
function ShowThatData(ele) {
    let textArea = document.getElementById("note_box")
    let title_box = document.getElementById("title_box")
    textArea.value = ele.mytext
    title_box.value = ele.title
}