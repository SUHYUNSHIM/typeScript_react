import React, { useState,useContext } from "react";
import TodoContext from "../TodoContext";


const InputTodo = () => {
  const [todo, setTodo] = useState<string>("");
  //useContext 훅으로 TodoContext의 value 값을 받아냄
  const value = useContext(TodoContext)

  //value의 속성의 actoins의 addTodo 함수 호출 
  const addHandler = () => {
    value?.actions.addTodo(todo); //선택적 속성으로 작성. 
    setTodo("");
  };

  const enterInput = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      addHandler();
    }
  };

  const changeTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  return (
    <div className="row">
      <div className="col">
        <div className="input-group">
          <input
            id="msg"
            type="text"
            className="form-control"
            name="msg"
            placeholder="할일을 여기에 입력!"
            value={todo}
            onChange={changeTodo}
            onKeyUp={enterInput}
          />
          <span className="btn btn-primary input-group-addon" onClick={addHandler}>
            추가
          </span>
        </div>
      </div>
    </div>
  );
};

export default InputTodo;
