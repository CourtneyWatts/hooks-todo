import React, { useContext } from 'react';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { TodosContext } from './context/todos.context';

import Todo from './Todo';

function TodoList() {
    const todos = useContext(TodosContext);
    if (todos.length)
        return (
            <Paper>
                <List>
                    {todos.map((todo, idx) => (
                        <React.Fragment key={todo.id}>
                            <Todo {...todo} key={todo.id} />
                            {idx < todos.length - 1 && <Divider />}
                        </React.Fragment>
                    ))}
                </List>
            </Paper>
        );
    return null;
}

export default TodoList;
