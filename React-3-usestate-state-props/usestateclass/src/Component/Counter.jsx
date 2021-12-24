import React from 'react'

const Counter = ({fn, mult}) => {
    return (
        <div>
            <button onClick={() => fn(1)}>INCREMENT</button>
            <button onClick={() => fn(-1)}>DECREMENT</button>
            <button onClick={() => mult(2)}>DOUBLE</button>
        </div>
    )
}

export default Counter
