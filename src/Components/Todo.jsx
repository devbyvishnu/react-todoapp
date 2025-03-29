import { useEffect, useRef, useState } from "react";
import "./Css/Todo.css";
import Todoitems from "./Todoitems";

let count = Number(localStorage.getItem("TODOS_COUNT")) || 0;

const Todo = () => {
   const [Todos, setTodos] = useState([]);
   const inputRef = useRef(null);

   const add = () => {
      if (!inputRef.current.value.trim()) return; // Prevent empty todos

      setTodos((prevTodos) => {
         const newTodo = { no: count, text: inputRef.current.value, display: "" };
         localStorage.setItem("TODOS_COUNT", count + 1);
         count++; // Increment after saving
         return [...prevTodos, newTodo];
      });

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
            {Todos.map((items) => (
               <Todoitems key={items.no} setTodos={setTodos} no={items.no} display={items.display} text={items.text} />
            ))}
         </div>

         <div className="devby">
            <span>Devbyvishnu</span>
         </div>
      </div>
   );
};

export default Todo;

