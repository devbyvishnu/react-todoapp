import { useEffect, useRef, useState } from "react";
import "./Css/Todo.css";
import Todoitems from "./Todoitems";
let count = 0;

const Todo = () => {
    
   const [Todos,setTodos] = useState([]);
   const inputRef = useRef(null);

   const add = () => {
      setTodos([...Todos,{no:count++,text:inputRef.current.value,display: ""}])
      inputRef.current.value = "";
      localStorage.setItem("TODOS_COUNT",count)
   }

   useEffect(()=>{
      setTodos(JSON.parse(localStorage.getItem("todos")))
      count = localStorage.getItem("TODOS_COUNT")
   },[])

   useEffect(()=>{
    setTimeout(()=>{
      console.log(Todos);
      localStorage.setItem("todos",JSON.stringify(Todos))
    },100)
   },[Todos])

  return (
    <div className="todo">
       <div className="todo-header">To-Do List</div>
       <div className="todo-add">
         <input ref={inputRef} type="text" placeholder="Add Your Task" className="todo-input" />
         <button onClick={add} className="todo-add-btn">ADD</button>
       </div>

       <div className="todo-list">
           {Todos.map((items,index) => { return <Todoitems key={index} setTodos={setTodos} no={items.no} display={items.display} text={items.text}/>})}
        </div>
        
         <div className="devby">
             <span>Devbyvishnu</span>
         </div>
  
    </div>

    
  )
}

export default Todo
