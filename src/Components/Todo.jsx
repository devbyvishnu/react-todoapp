import { useEffect, useRef, useState } from "react";
import "./Css/Todo.css";
import Todoitems from "./Todoitems";

let count = Number(localStorage.getItem("TODOS_COUNT")) || 0;

const Todo = () => {
   const [Todos, setTodos] = useState([]);
   const inputRef = useRef(null);

   const add = () => {
      if (!inputRef.current.value.trim()) return;
    
      const newCount = count + 1;
      const newTodo = { no: newCount, text: inputRef.current.value, display: "" };
    
      setTodos((prevTodos) => {
        return [...prevTodos, newTodo];
      });
    
      localStorage.setItem("TODOS_COUNT", newCount);
      count = newCount;
    
      inputRef.current.value = "";
    };
    

   useEffect(() => {
      const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
      setTodos(storedTodos);
   }, []);

   useEffect(() => {
      if (Todos.length > 0) {
         localStorage.setItem("todos", JSON.stringify(Todos));
      }
   }, [Todos]);

   return (
      <div className="todo">
         <div className="todo-header">To-Do List</div>
         <div className="todo-add">
            <input ref={inputRef} type="text" placeholder="Add Your Task" className="todo-input" />
            <button onClick={add} className="todo-add-btn">ADD</button>
         </div>

         <div className="todo-list">
            {Todos.length === 0 ? (
               <div className="empty-list-message">
                  No tasks yet. Add a task to get started!
               </div>
            ) : (
               Todos.map((item) => (
                  <Todoitems 
                     key={item.no} 
                     setTodos={setTodos} 
                     no={item.no} 
                     display={item.display} 
                     text={item.text} 
                  />
               ))
            )}
         </div>

         <div className="devby">
            <span>Devbyvishnu</span>
         </div>
      </div>
   );
};

export default Todo

