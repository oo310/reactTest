import React, { useState } from 'react';
//import logo from '../logo.svg';
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Foooter';

import './Todolist.css';

function Todolist() {
  const [todos, setTodos] = useState([
    {id:4,name:'吃飯',done:true},
    {id:3,name:'睡覺',done:true},
    {id:2,name:'寫程式',done:false},
    {id:1,name:'逛街',done:false}
  ]);
  const addtodo = (data)=>{
    if(todos.length!==0){
      data.id = todos[0].id+1;
    }
    //console.log(todos[0].id);
    const newtodos=[data,...todos];
    setTodos(newtodos);

  }
  const changetodo=(id,done)=>{
    const newtodos = todos.map((todoObj)=>{
        if(todoObj.id===id) return {...todoObj,done}//{...todoObj,done:done}一樣可以簡寫
        else return todoObj
    })
    setTodos(newtodos)
  }
  const deletetodo=(id)=>{
    const newtodos = todos.filter((todoObj)=>{
        return todoObj.id !== id
    })
    setTodos(newtodos)
  }
  const chackAlltodos = (done)=>{
    const newtodos = todos.map((todoObj)=>{
      return {...todoObj,done}//{...todoObj,done:done}一樣可以簡寫
    })
    setTodos(newtodos)
  }
  const clearDone=()=>{
    const newtodos = todos.filter((todoObj)=>{
      return !todoObj.done //todoObj.done=== false
    })
    setTodos(newtodos)
  }

  return (
    
    <div className="todo-container">
      <div className="todo-wrap">
        <Header addtodo={addtodo}/>
        <List todos={todos} changetodo={changetodo} deletetodo={deletetodo}/>
        <Footer todos={todos} chackAlltodos={chackAlltodos} clearDone={clearDone}/>    
      </div>
    </div>
  );
}

export default Todolist;
