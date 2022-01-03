import React from 'react'
import styled from "styled-components"




const Card = styled.div`
box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
background-color: #fff;
margin-top : 20px;
display: flex;
justify-content: space-evenly;
padding: 20px;

`


// const Button = styled.button`
// padding:5px 10px;
// font-size: 16px;
// background-color: #548CFF;
// color: #fff;
// font-weight: 600;
// margin-top: 10px;
// width: 60px;
// `


const RecipeList = ({List, handleBottom}) => {

    let {id , time, title} = List
    return (
        <>
            <Card onClick={() =>handleBottom(id)}>
                <div>{title}</div>
                <div>{time}</div>
            </Card>
        </>
    )
}

export default RecipeList
