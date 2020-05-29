import {TodoList} from "../stores/todo-list";
import {createContext} from "preact";

export const StoreContext = createContext<TodoList>({} as TodoList);
export const StoreProvider = StoreContext.Provider;
