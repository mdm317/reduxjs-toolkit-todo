import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo, selectTodoList } from "./redux/todo";

function App() {
  const todoList = useSelector(selectTodoList);
  const dispatch = useDispatch();
  const [input, setinput] = useState<string>("");
  const handleClick = (e:any)=>{
    console.log(input);
    dispatch(addTodo(input))
  }
  const handleChange = (e:any)=>{
    setinput(e.target.value);
  }
  const clickDelete = (e:any)=>{
    console.log(e.target.tagName);
    console.log(e.currentTarget);
    if(e.target.tagName ==="BUTTON"){
      dispatch(removeTodo(Number(e.currentTarget.id)))
    }
  }
  return (
    <>
      <h1>hello</h1>
      <label>enter your todo</label>
      <input onChange={handleChange} ></input>
      <button onClick={handleClick}>submit</button>
      {todoList.map((todo)=>
      (<div onClick={clickDelete} key={todo.id.toString()} id={todo.id.toString()}>
        <div>{todo.content}</div>
        <button >❌</button>
      </div>))}
    </>

  );
}

export default App;
