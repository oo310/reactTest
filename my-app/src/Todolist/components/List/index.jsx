import React from 'react';
//import { computeHeadingLevel } from '@testing-library/react';
import Item from '../Item';
import './index.css'
const List = (props) => {
    const {todos,changetodo,deletetodo} = props
    
    
    return (
        <ul className="todo-main">
          {
            todos.map((todo) => {
              return <Item key={todo.id} {...todo} changetodo={changetodo} deletetodo={deletetodo}/>
            })
          }
        </ul>
    );
}

export default List;