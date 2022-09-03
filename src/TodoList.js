import React from 'react';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';

import Todo from './Todo';

function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
    if (todos.length)
        return (
            <Paper>
                <List>
                    {todos.map((todo, idx) => (
                        <React.Fragment key={todo.id}>
                            <Todo
                                {...todo}
                                removeTodo={removeTodo}
                                toggleTodo={toggleTodo}
                                editTodo={editTodo}
                            />
                            {idx < todos.length - 1 && <Divider />}
                        </React.Fragment>
                    ))}
                </List>
            </Paper>
        );
    return null;
}

export default TodoList;
