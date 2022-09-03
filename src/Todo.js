import React from 'react';
import useToggleState from './hooks/useToggleState';
import EditTodoForm from './EditTodoForm';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Checkbox } from '@mui/material';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function Todo({ task, id, completed, removeTodo, toggleTodo, editTodo }) {
    const [isEditing, toggleIsEditing] = useToggleState();
    return (
        <ListItem style={{ height: '64px' }}>
            {isEditing ? (
                <EditTodoForm
                    editTodo={editTodo}
                    id={id}
                    task={task}
                    toggleEditForm={toggleIsEditing}
                />
            ) : (
                <>
                    <Checkbox
                        tabIndex={-1}
                        checked={completed}
                        onClick={() => toggleTodo(id)}
                    />
                    <ListItemText
                        style={{
                            textDecoration: completed ? 'line-through' : 'none',
                        }}
                    >
                        {task}
                    </ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton
                            aria-label="Delete"
                            onClick={() => removeTodo(id)}
                        >
                            <DeleteIcon />
                        </IconButton>
                        <IconButton aria-label="Edit" onClick={toggleIsEditing}>
                            <EditIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </>
            )}
        </ListItem>
    );
}

export default Todo;
