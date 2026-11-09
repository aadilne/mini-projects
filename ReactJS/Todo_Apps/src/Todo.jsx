import { useState } from "react"


function Todo() {

    const [newtodo, setNewtodo] = useState("");
    const [todos , setTodos] = useState([]);

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(newtodo){
            setTodos([...todos, {text: newtodo , completed : false}]);
            setNewtodo("");
        }

    }

    const handleDelet = (index) =>{

    }

  return (
 <div>
    <div>Todo</div>

    <form onSubmit={handleSubmit}>

       < input type="text" placeholder="Enter your task" 
            value={newtodo}
            onChange ={(e) => setNewtodo(e.target.value)}
       />
       <br />
       <button type="submit">Add Task</button>

    </form>

    <ul>
        {
            todos.map((todo , index) => (
                <li key ={index}>
                    <span>{todo.text}</span>
                    <button onClick = {() => handleDelet(index)}>Delete</button>
                </li>
            ))
        }
        
    </ul>

 </div>

  )
}

export default Todo