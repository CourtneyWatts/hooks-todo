import React from 'react';
import useInputState from './hooks/useInputState';
import TextField from '@mui/material/TextField';

function EditTodoForm({ id, task, editTodo, toggleEditForm }) {
    const [value, handleChange, reset] = useInputState(task);
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                editTodo(id, value);
                reset();
                toggleEditForm();
            }}
            style={{ marginLeft: '1rem', width: '100%' }}
        >
            <TextField
                margin="normal"
                value={value}
                onChange={handleChange}
                fullWidth
                autoFocus
                variant="standard"
            />
        </form>
    );
}
export default EditTodoForm;
