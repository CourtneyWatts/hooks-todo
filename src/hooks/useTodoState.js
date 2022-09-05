import UseLocalStorageState from './useLocalStorageState';
import { v4 as uuidv4 } from 'uuid';

// eslint-disable-next-line import/no-anonymous-default-export
export default (initialTodos) => {
    const [todos, setTodos] = UseLocalStorageState('todos', initialTodos);
    return {
        todos,
        addTodo: (newTodoText) => {
            setTodos([
                ...todos,
                { id: uuidv4(), task: newTodoText, completed: false },
            ]);
        },
        removeTodo: (todoId) => {
            const updatedTodos = todos.filter((todo) => todo.id !== todoId);
            setTodos(updatedTodos);
        },
        toggleTodo: (todoId) => {
            const updatedTodos = todos.map((todo) =>
                todo.id === todoId
                    ? { ...todo, completed: !todo.completed }
                    : todo
            );
            setTodos(updatedTodos);
        },
        editTodo: (todoId, newtask) => {
            const updatedTodos = todos.map((todo) =>
                todo.id === todoId ? { ...todo, task: newtask } : todo
            );
            setTodos(updatedTodos);
        },
    };
};
