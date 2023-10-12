import {useState} from "react"

function App() {
  const [todo, setTodo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault()
    if(todo === ""){
      return;
    }
    setToDos((currentArray) => [todo, ...currentArray])
    setTodo("")
  }
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input 
          onChange={onChange}
          value={todo}
          type="text" 
          placeholder="Write your to do"
        />
        <button>Add todo</button>
       </form>
       <hr/>
       <ul>{toDos.map((item,index) => (<li key={index}>{item}</li>))}</ul>
    </div>  
  )
}

export default App;
