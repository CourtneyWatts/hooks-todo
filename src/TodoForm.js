import React from 'react';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import useInputState from './hooks/useInputState';
function TodoForm({ addTodo }) {
    const [value, handleChange, reset] = useInputState('');
    return (
        <Paper style={{ marginBottom: '1rem', padding: '0 rem' }}>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    addTodo(value);
                    reset();
                }}
            >
                <TextField
                    value={value}
                    onChange={handleChange}
                    margin="0"
                    label="Add New Todo"
                    fullWidth
                />
            </form>
        </Paper>
    );
}
export default TodoForm;
