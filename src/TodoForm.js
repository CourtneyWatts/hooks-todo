import React, { useContext } from 'react';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import useInputState from './hooks/useInputState';
import { DispatchContext } from './context/todos.context';
function TodoForm() {
    const [value, handleChange, reset] = useInputState('');
    const dispatch = useContext(DispatchContext);
    return (
        <Paper style={{ marginBottom: '1rem', padding: '0 rem' }}>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    dispatch({ type: 'ADD', task: value });
                    reset();
                }}
            >
                <TextField
                    value={value}
                    onChange={handleChange}
                    margin="normal"
                    label="Add New Todo"
                    fullWidth
                />
            </form>
        </Paper>
    );
}
export default TodoForm;
