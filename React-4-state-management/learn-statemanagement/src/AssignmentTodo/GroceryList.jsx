import React from 'react'

const GroceryList = ({curdata, deleteItem}) => {

    let {title, status, id} = curdata

    

    return (
        <>
            
                <div>{title}</div>
                <button onClick={() => deleteItem(id)}>Purchased</button>
        
        </>
    )
}

export default GroceryList
