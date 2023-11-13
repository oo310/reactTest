import React from 'react';
import './index.css'
//import { keyboard } from '@testing-library/user-event/dist/keyboard';




const Header = (props) => {
    const handleKeyUp = (event) =>{
      
      const {keyCode,target} = event
      if(keyCode!==13)return
      if(target.value.trim() ===''){
        alert('輸入不能為空')
        return
      }
      //console.log(target.value)
      const todoObj = {id:0,name:target.value,done:false}
      props.addtodo(todoObj) 
      target.value=''
    }

    return (
        <div className="todo-header">
          <input onKeyUp={handleKeyUp} type="text" placeholder="請輸入待辦事項，Enter鍵輸入"/>
        </div>
    );
}

export default Header;