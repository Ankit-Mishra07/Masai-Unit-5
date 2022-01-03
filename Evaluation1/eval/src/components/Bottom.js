import React from 'react'
import styled from "styled-components"



const Divv = styled.div`
display : grid;
grid-template-columns: 45% 45%;
grid-gap : 5%;
padding: 2.5%;

`

const Bottom = ({PData}) => {

    let {title, time, ingredients, instructions, image} = PData
    return (
        <>
        <Divv>
            <div>
            <div>Title : {title}</div>
            <div>Cooking Time : {time}</div>
            <div>Ingredients : {ingredients}</div>
            <div>Instructions : {instructions}</div>
            </div>
            <div>
                <img src={image} alt="" />
            </div>

            </Divv>
        </>
    )
}

export default Bottom
