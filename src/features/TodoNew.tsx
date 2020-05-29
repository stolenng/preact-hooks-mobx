import {h} from 'preact';
import {onEnterPress} from "../helpers/use-enter";
import {useState} from "preact/hooks";
import {useStore} from "../helpers/use-store";

export const TodoNew = () => {
    const [newTodo, setTodo] = useState('');
    const todoList = useStore();

    const addTodo = () => {
        todoList.addTodo(newTodo);
        setTodo('');
    };

    return (
        <div className="todo-new">
            <input type="text" value={newTodo} onKeyDown={onEnterPress(addTodo)} onChange={(e) => setTodo((e.target as any).value)}/>
            <button onClick={addTodo}>Add Todo</button>
        </div>
    )
};
