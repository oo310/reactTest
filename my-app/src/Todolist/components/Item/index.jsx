import React, { useState } from 'react';
import './index.css'


const Item = (props) => {
    const [value, setValue] = useState({mouse:false});
    const {id,name,done}= props

    const handleMouse=(flag)=>{
        return()=>{
            setValue({mouse:flag})
        }
    }

    return (
        <li style={{backgroundColor:value.mouse?'#ddd':'white'}}onMouseLeave={handleMouse(false)} onMouseEnter={handleMouse(true)}>
            <label>
              <input type="checkbox" defaultChecked={done}/>
              <span>{name}</span>
            </label>
            <button className="btn btn-danger" style={{display:value.mouse?'block':'none'}}>删除</button>
        </li>
    );
}

export default Item;