import './Css/Todoitems.css';
import tick from './assets/tick.png';
import not_tick from './assets/not_tick.png';
import cross from './assets/cross.png';

const Todoitems = ({ no, display, text, setTodos }) => {
  
  const Tododelete = () => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.filter((todo) => todo.no !== no);
      localStorage.setItem("todos", JSON.stringify(updatedTodos)); // Update localStorage
      return updatedTodos;
    });
  };

  const toggle = () => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((todo) => 
        todo.no === no ? { ...todo, display: todo.display === "" ? "line-through" : "" } : todo
      );
      localStorage.setItem("todos", JSON.stringify(updatedTodos)); // Update localStorage
      return updatedTodos;
    });
  };

  return (
    <div className="todoitems">
      <div className={`todoitems-container ${display}`} onClick={toggle}>
        <img src={display === "" ? not_tick : tick} alt="Toggle" />
        <div className="todoitems-text">{text}</div>
      </div>
      <img className="todoitem-cross-icon" src={cross} alt="Delete" onClick={Tododelete} />
    </div>
  );
};

export default Todoitems;


