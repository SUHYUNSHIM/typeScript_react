import React, {useState} from 'react'
import produce from 'immer'

export type TodoListItemType = {
    no : number;
    todo : string;
    done: boolean;
};

//provider로 전달한 value의 타입 정의
export type TodoListContextValueType = {
    state : {todoList : Array<TodoListItemType>};
    actions : {
        addTodo : (todo : string) => void;
        deleteTodo : (no : number) => void;
        toggleDone : (no : number) => void;
    };
};

//context 객체 생성
const TodoContext = React.createContext<TodoListContextValueType | null>(null);

//자식 컴포넌트의 타입을 정의
type PropsType = {
    children : JSX.Element | JSX.Element[];
}

export const TodoProvider = (props : PropsType) => {
    const [todoList, setTodoList] = useState<Array<TodoListItemType>>([
        { no : 1, todo : "학습", done : false},
        { no : 2, todo : "React학습2", done : false},
        { no: 3, todo: "React학습3", done: true },
        { no: 4, todo: "React학습4", done: false },
    ]);
    const addTodo = (todo: string) => {
        const newTodoList = produce(todoList, (draft: Array<TodoListItemType>) => {
            draft.push({no: new Date().getTime(), todo : todo, done :false});        
        });
        setTodoList(newTodoList)
    };
    const deleteTodo = (no:number) => {
        const index = todoList.findIndex((item) => item.no === no);
        const newTodoList = produce(todoList, (draft:Array<TodoListItemType>) => {
            draft.splice(index,1)
        });
        setTodoList(newTodoList)
    };

    const toggleDone = (no:number) => {
        const index = todoList.findIndex((item) => item.no === no);
        const newTodoList = produce(todoList, (draft : Array<TodoListItemType>) => {
            draft[index].done = !draft[index].done;
        });
        setTodoList(newTodoList)
    };

    const values : TodoListContextValueType = {
        state : {todoList},
        actions : {addTodo, deleteTodo,toggleDone},
    };

    return(
        <TodoContext.Provider value={values}>
            {props.children}
        </TodoContext.Provider>
    )
}

export default TodoContext;