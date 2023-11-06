import React, { useState } from 'react';
import './index.css'
const Footer = () => {
    return (
        <div className="todo-footer">
          <label>
            <input type="checkbox"/>
          </label>
          <span>
            <span>已完成0</span> / 全部2
          </span>
            <button className="btn btn-danger">清除已完成任務</button>
        </div>
    );
}

export default Footer;