import React from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';   //for unique id

// export default function TodoList(){
//     let [todos,setTodos]=useState(["Sample Task"]);
//     let [newTodo,setNewTodo]=useState("");

//     let addNewTask=()=>{
//         setTodos([...todos,newTodo]);
//         setNewTodo("");   //call krke value ko reset kr do
//     };
//     let updateTodoValue=(event)=>{
//       setNewTodo(event.target.value);
//     };



//   return (
//     <div>
//         <input placeholder='Add a Task'  value={newTodo} onChange={updateTodoValue}/>
//         <br /><br />
//         <button onClick={addNewTask}>Add TAsk</button>
//         <br />
//         <br /><br />
//         <h4>Tasks ToDo</h4>
//         {/* todo ko print krne k liye map use kre hai */}
//         <ul>
//             {todos.map((todo)=>(
//                 <li>{todo}</li>
//             ))}
//         </ul>
//     </div>
//   )
// }







// now we store todo with Unique by generated by uuid












export default function TodoList(){
  let [todos,setTodos]=useState([{task:"Simple Task",id:uuidv4()}]);   //array of object bnaaye hai
  let [newTodo,setNewTodo]=useState("");

  let addNewTask=()=>{
      setTodos([...todos,{task:newTodo,id:uuidv4()}]);
      setNewTodo("");   //call krke value ko reset kr do
  };
  let updateTodoValue=(event)=>{
    setNewTodo(event.target.value);
  };

let deletTodo=(id)=>{
  let filteredTodo=todos.filter((todo)=>todo.id != id);
  setTodos(filteredTodo);
}

return (
  <div>
      <input placeholder='Add a Task'  value={newTodo} onChange={updateTodoValue}/>
      <br /><br />
      <button onClick={addNewTask}>Add TAsk</button>
      <br />
      <br /><br />
      <h4>Tasks ToDo</h4>
      
      <ul>
          {todos.map((todo)=>(
              <li key={todo.id}>
                                        {/* //todo ab object ho gya id aa jane se,so task ko print kro */}
                <span>{todo.task}</span>
                &nbsp; &nbsp; &nbsp;
                                    {/* id  pass kr rhe dlt krne ke liye,jb kuch pass krn hota hai to arrow function me pass kro */}
                <button onClick={()=>deletTodo(todo.id)}>delte</button>   
                                      {/* delete means filter lgaa diyehai */}
                </li>  
          ))}
      </ul>
  </div>
)
}

