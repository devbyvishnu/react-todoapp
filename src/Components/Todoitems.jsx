import './Css/Todoitems.css';
import tick from './assets/tick.png';
import not_tick from './assets/not_tick.png';
import cross from './assets/cross.png';

const Todoitems = ({ no, display, text, setTodos }) => {
  
  const Tododelete = (no) => {
    let data = JSON.parse(localStorage.getItem("todos")) || [];
    data = data.filter((todo) => todo.no !== no);
    
    setTodos(data);
    localStorage.setItem("todos", JSON.stringify(data)); // Update localStorage
  };

  const toggle = (no) => {
    let data = JSON.parse(localStorage.getItem("todos")) || [];

    data = data.map((todo) => 
      todo.no === no ? { ...todo, display: todo.display === "" ? "line-through" : "" } : todo
    );

    setTodos(data);
    localStorage.setItem("todos", JSON.stringify(data)); // Update localStorage
  };

  return (
    <div className="todoitems">
      <div className={`todoitems-container ${display}`} onClick={() => toggle(no)}>
        {display === "" ? <img src={not_tick} alt="" /> : <img src={tick} alt="" />}
        <div className="todoitems-text">{text}</div>
      </div>
      <img className="todoitem-cross-icon" src={cross} alt="" onClick={() => Tododelete(no)} />
    </div>
  );
};

export default Todoitems;

