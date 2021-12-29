import React,{useState, useEffect, useRef} from "react";
import Table from "./Table"
import "./Form2.css"

const Form2 = () => {

    const ref = useRef(null)


    const [data, setData] = useState([])

    const [form, setForm] = useState({
    username : "",
    age : "",
    address : "",
    department : "",
    salary : "",
    marital : ""
    })


    const handleChange = (e) => {
    let file = URL.createObjectURL(ref.current.files[0])
    let  {name , value, checked, type} = e.target
    value = type === "checkbox" ? checked : value;
    setForm({
        ...form,
        [name] : value,
        file : file
    })
    }


    const getData = () => {
        fetch("http://localhost:5000/users")
        .then(d => d.json())
        .then((res) => setData(res))
    }

    useEffect(() => {
        getData()
    })

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/users/${id}`, {
            method: "DELETE",
            headers : {
              "Content-type" : "application/json"
            }
          }).then(() => {
          
            getData()

          })
    }


    const PostData = () => {
        console.log("form:" , form)

        const payload = {
                username : form.username,
                age : form.age,
                address : form.address,
                department : form.department,
                salary : form.salary,
                marital : form.marital,
                file : form.file
          }
            fetch("http://localhost:5000/users", {
            method: "POST",
            body : JSON.stringify(payload),
            headers : {
              "Content-type" : "application/json"
            }
          }).then(() => {
          
            getData()

          })
    }


  return (

    <>
    <div className="input_boxes">
      <input
      className="input-text"
        type="text"
        name="username"
        onChange={handleChange}
        placeholder="Enter Name"
      />{" "}
      <br />
      
      <input
      className="input-text"
        type="number"
        name="age"
        onChange={handleChange}
        placeholder="Enter Age"
      />{" "}
      <br />
      
      <input
      className="input-text"
        type="text"
        name="address"
        onChange={handleChange}
        placeholder="Enter Address"
      />{" "}
      <br />
      
  
      
      <input
      className="input-text"
        type="number"
        name="salary"
        onChange={handleChange}
        placeholder="Enter Salary"
      />{" "}
      <br />

      <select className="inputdepart" name="department" id="" onChange={handleChange}>
        <option value="" selected>
          Choose Department
        </option>
        <option value="d1">D1</option>
        <option value="d2">D2</option>
        <option value="d3">D3</option>
      </select>
      <br />
      
      <span>Married</span>
      <input type="checkbox" name="marital" onChange={handleChange} /> <br />
      
      <input
        type="file"
        name="profile"
        onChange={handleChange}
        ref={ref}
        accept="image/png image/jpg"
      />{" "}
      <br />
      
      <button onClick={PostData}>Add Data</button>
    </div>

<Table data={data} handleDelete={handleDelete}/>

</>
  );
};

export default Form2;
