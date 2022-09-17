import React, { useContext } from 'react';
import useInputState from './hooks/useInputState';
import TextField from '@mui/material/TextField';
import { DispatchContext } from './context/todos.context';

function EditTodoForm({ id, task, toggleEditForm }) {
    const dispatch = useContext(DispatchContext);
    const [value, handleChange, reset] = useInputState(task);
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                dispatch({ type: 'EDIT', id: id, newTask: value });
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
