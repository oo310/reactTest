import React, { useState } from 'react';
import './index.css'


const Item = (props) => {
    const [value, setValue] = useState({mouse:false});
    const {id,name,done,changetodo,deletetodo}= props

    const handleMouse=(flag)=>{
        return()=>{
            setValue({mouse:flag})
        }
    }
    const handleCheck=(id)=>{
        return(event)=>{
            //console.log(id,event.target.checked);
            changetodo(id,event.target.checked)
        }
    }
    const handleDelete=(id)=>{
        if(window.confirm('確定刪除嗎')){
            deletetodo(id)
        }
    }
    return (
        <li style={{backgroundColor:value.mouse?'#ddd':'white'}}onMouseLeave={handleMouse(false)} onMouseEnter={handleMouse(true)}>
            <label>
              <input type="checkbox" checked={done} onChange={handleCheck(id)}/>
              <span>{name}</span>
            </label>
            <button onClick={()=>handleDelete(id)} className="btn btn-danger" style={{display:value.mouse?'block':'none'}}>删除</button>
        </li>
    );
}

export default Item;