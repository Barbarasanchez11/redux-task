import { useSelector ,useDispatch} from "react-redux";
import { useState } from "react";
import { addTodo, removeTodo } from "../redux/todosSlice";

let tasks = 1;

function Tasks () {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [newTask, setNewTask] = useState(''); 

  const handleAddTodo = () => {
    if (newTask) { 
      dispatch(addTodo({ id: tasks++, text: newTask }));
      setNewTask(''); 
    }
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo({ id }));
  };

  return (
    <>
    
      <div>
        <input 
          type="text" 
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)} 
        />
        <button onClick={handleAddTodo}>Añadir</button>
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>
              {todo.text} 
              <button onClick={() => handleRemoveTodo(todo.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Tasks