import React, { useState } from 'react';
import { computeHeadingLevel } from '@testing-library/react';
import Item from '../Item';
import './index.css'
const List = (props) => {
    const todos = props.todos
    
    
    return (
        <ul className="todo-main">
          {
            todos.map((todo) => {
              return <Item key={todo.id} {...todo}/>
            })
          }
        </ul>
    );
}

export default List;