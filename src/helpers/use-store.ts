import { StoreContext } from './store-provider';
import {TodoList} from "../stores/todo-list";
import {useContext} from "preact/hooks";

export const useStore = (): TodoList => useContext(StoreContext);
