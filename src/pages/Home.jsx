import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import '../pages/Home.css'

const Home = () => {
    const [inpValue,setInpValue] = useState("")
    const [todos,setTodos] = useState([])
    // const [count,setCount] = useState(0)

    // const Add = () => {
    //     setCount(count + 1)
    // }

    // const dec = () => {
    //     if(count > 0){
    //         setCount(count - 1)
    //     }
    //     console.log("tssadsa")
    // }
    
    const addTodo = () => {
   
        setTodos([...todos,inpValue])
    }
    console.log(todos,"test")


    

  return (
    <>
    <Navbar />
<div className='todo'>
    <div className='todo-list'>
        <div className='card'>  
          <div className="head">
            <h1>To-do List</h1>
          </div>
          <div className="todo-input">
            <input type="text" name="Add Todo" id="addTodo" placeholder='What have you planned today?' onChange={(e)=>setInpValue(e.target.value)} />
            <button className='add-btn' onClick={addTodo}>Add Item</button>
            </div>
        </div>
            
    </div>
    </div>
    </>
  )
}

export default Home