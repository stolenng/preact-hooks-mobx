import {h, render} from 'preact';
import {StoreProvider} from "./helpers/store-provider";

import App from './App';
import {TodoList} from "./stores/todo-list";

import 'style/index.css';

const todoList = new TodoList([
    'Should Starting Writing in React',
    'Should Learn MobX',
    'Should Watch Once Piece :)'
]);

const Wrap = () => (
    <StoreProvider value={todoList}>
        <App/>
    </StoreProvider>
);

render(<Wrap/>, document.body);
