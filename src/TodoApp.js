import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import ToolBar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';

function TodoApp() {
    const initialTodos = [
        { id: 1, task: 'Clean Fishtank', completed: false },
        { id: 2, task: 'Wash Car', completed: true },
        { id: 3, task: 'Clean Fishtank', completed: false },
    ];
    const [todos, setTodos] = useState(initialTodos);
    const addTodo = (newTodoText) => {
        setTodos([...todos, { id: 4, task: newTodoText, completed: false }]);
    };
    return (
        <Paper
            style={{
                padding: 0,
                margin: 0,
                height: '100vh',
                backgroundColor: '#fafafa',
            }}
            elevation={0}
        >
            <AppBar
                color="primary"
                position="static"
                style={{ height: '64px' }}
            >
                <ToolBar>
                    <Typography color="inherit">TODOD WITH HOOKS</Typography>
                </ToolBar>
            </AppBar>
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} />
        </Paper>
    );
}
export default TodoApp;