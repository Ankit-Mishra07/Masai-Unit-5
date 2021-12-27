import React, {useState} from 'react'

const GroceryInput = ({getInput}) => {

    const [inputText, setInputText] = useState("")


    const handleInput = () => {
            getInput(inputText)
            setInputText("")
    }

    return (
        <>

        <div>
            <input type="text" placeholder='Enter Grocery Items' value={inputText} onChange={(e) =>setInputText(e.target.value)}/>
            <button onClick={handleInput}>Save</button>
        </div>
            
        </>
    )
}

export default GroceryInput
