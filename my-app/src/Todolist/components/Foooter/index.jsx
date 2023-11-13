import React from 'react';
import './index.css'
const Footer = (props) => {
    const {todos ,chackAlltodos,clearDone } = props
    const doneCount = todos.reduce((pre,current)=>{return pre + (current.done ? 1 : 0)},0) // = todos.reduce((pre,current)=> pre + (current.done ? 1 : 0),0)
    const total = todos.length
    const handlecheckAll=(event)=>{
      chackAlltodos(event.target.checked)
    }
    const handleClearAllDone=()=>{
      clearDone()
    }
    return (
        <div className="todo-footer">
          <label>
            <input type="checkbox" onChange={handlecheckAll} checked={doneCount===total && total!==0 ? true : false}/>
          </label>
          <span>
            <span>已完成{doneCount}</span> / 全部{total}
          </span>
            <button onClick={handleClearAllDone} className="btn btn-danger">清除已完成任務</button>
        </div>
    );
}

export default Footer;