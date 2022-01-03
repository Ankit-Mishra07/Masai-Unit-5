import React,{useState, useEffect} from 'react'
import Bottom from './Bottom'
import RecipeList from './RecipeList'
import styled from "styled-components"

const Div = styled.div`
background-color:#CFFFDC;
display : flex;
flex-direction:column;
padding: 20px;
width:30%;
margin:20px 10% ;
box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
border-radius: 10px;

`

const Input = styled.input`
margin-top: 20px;
padding: 2px 5px;
font-size: 16px;
box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
`
const Button = styled.button`
padding:5px 10px;
font-size: 16px;
background-color: #548CFF;
color: #fff;
font-weight: 600;
margin-top: 10px;
width: 60px;
cursor: pointer;
border: none;
border-radius: 5px;
`

const Button2 = styled.button`
padding:5px 10px;
font-size: 16px;
background-color: #548CFF;
color: #fff;
font-weight: 600;
margin-top: 10px;
width: 190px;
cursor: pointer;
border: none;
border-radius: 5px;
`

const ListBox = styled.div`
display: flex;
flex-direction : column;
margin-top: 20px;
background-color: rgba(0, 0, 0, 0.2);
width: 40%;
padding: 20px;
overflow: auto;
height: 300px;
`

const OneItemBox = styled.div`
background-color: #7900FF;
color:#fff;
font-weight: 600;
width: 60%;
margin: auto;
margin-top: 40px;

`


const Recipe = () => {

    const [form, setForm] = useState({})
    const [data, setData] = useState([])
    const [flag, setFlag] = useState(false)
    const [oneData, setOneData] = useState({})

    const handleChange = (e) => {

        let {name, value} = e.target

        setForm({
            ...form,
            [name] : value
        })

        console.log(form)
    }

    const saveData = () => {
        fetch("http://localhost:5000/todo", {
            method: "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(form)
        })

        setForm({})
        getAlldata()
    }

    const getAlldata = async () => {
        let res = await fetch("http://localhost:5000/todo")
        let dat = await res.json()
        console.log(dat)
        setData(dat)

    }
// getAlldata()
    useEffect(() => {
        
        getAlldata()
    },[])

    const handleBottom = async (id) => {
        let res = await fetch(`http://localhost:5000/todo/${id}`)
        let dat = await res.json()
        console.log(dat)
        setOneData(dat)
        setFlag(true)
    }

    const sort = async () => {
        let res = await fetch("http://localhost:5000/todo?_sort=time&_order=ASC")
        let dat = await res.json()
        console.log(dat)
        setData(dat)
    }

    return (
        <div>
            
        <div style={{display:"flex"}}>
        <Div>
            <Input type="text" placeholder='title' name='title' onChange={(e) => handleChange(e)}/>
            <Input type="text" placeholder='ingredients' name='ingredients' onChange={(e) => handleChange(e)}/>
            <Input type="text" placeholder='time' name='time'onChange={(e) => handleChange(e)}/>
            <Input type="text" placeholder='image' name='image'onChange={(e) => handleChange(e)}/>
            <Input type="text" placeholder='instructions' name='instructions' onChange={(e) => handleChange(e)}/>
            <Button onClick={saveData}>Save</Button>
        </Div>

        <ListBox>

            <Button2 onClick={sort}>Sort on basis of Time </Button2>

        {
            data.map((e) => (
                <RecipeList key={e.id} List={e} handleBottom={handleBottom}/>
            ))
        }

        </ListBox>


        </div>

        <OneItemBox>
            {
                flag &&
                <Bottom PData={oneData}/>
            }
        </OneItemBox>


        </div>
    )
}

export default Recipe
