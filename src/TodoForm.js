import React from 'react';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import useInputState from './hooks/useInputState';
function TodoForm({ addTodo }) {
    const [value, handleChange, reset] = useInputState('');
    return (
        <Paper>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    addTodo(value);
                    reset();
                }}
            >
                <TextField value={value} onChange={handleChange} />
            </form>
        </Paper>
    );
}
export default TodoForm;
