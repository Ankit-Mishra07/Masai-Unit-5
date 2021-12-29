import React,{useState, useEffect} from 'react'
import TableItem from './TableItem'
import "./Table.css"

const Table = ({data, handleDelete}) => {


    // const [list, setList] = useState(data)
    

    // const InSort = () => {
    //     let newData = list.sort((x, y) => x.salary - y.salary)
    //     console.log(newData)
    //     setList([...newData, list])
    //   }
  
    //   const DeSort = () => {
        
    //   }


    return (
        <>

        <div className='showbox'>
            <div className='HeadingTab'>
                <div>Name</div>
                <div>Age</div>
                <div>Address</div>
                <div>Department</div>
                <div>Salary</div>
                <div>Marital Status</div>
                <div>Profile Photo</div>
                <div>Remove</div>
            </div>


            <div className='listItems'>
            {  data.map((elem) => (
                <TableItem key={elem.id} form={elem} handleDelete={handleDelete}/>
            ))

            }
                
            </div>
        </div>

        {/* <div>
        <button onClick={InSort}>Accending</button>
    <button onClick={() => DeSort}>Decending</button>
        </div> */}
            
        </>
    )
}

export default Table
