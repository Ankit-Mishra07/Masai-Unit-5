import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

const UserDetail = () => {

    const {id} = useParams();
    const [data, setdata] = useState({})

    const getData = async() => {
        let res = await fetch(`https://reqres.in/api/users/${id}`)
        let dat = await res.json()
        console.log(dat)
        setdata(dat.data)
    }
    useEffect(() => {
       getData()
    }, [])
    return (
        <div>
            <div>
                <img src={data.avatar} alt="" />
            </div>
            <div>{data.first_name}</div>
            <div>{data.email}</div>
        </div>
    )
}

export default UserDetail
