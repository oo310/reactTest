import React, { useState } from 'react';
import logo from '../logo.svg';
import Header from '../Todolist/components/Header';
import List from '../Todolist/components/List';
import Footer from '../Todolist/components/Foooter';

import './App.css';

function App() {
  const [todos, setTodos] = useState([
    {id:1,name:'吃飯',done:true},
    {id:2,name:'睡覺',done:true},
    {id:3,name:'寫程式',done:false},
    {id:4,name:'逛街',done:false}
  ]);
  const addtodo = (data)=>{
    data.id = todos.length+1;
    const newtodos=[data,...todos];
    setTodos(newtodos);

  }

  return (
    
    <div className="todo-container">
      <div className="todo-wrap">
        <Header addtodo={addtodo}/>
        <List todos={todos}/>
        <Footer/>    
      </div>
    </div>
  );
}

export default App;
