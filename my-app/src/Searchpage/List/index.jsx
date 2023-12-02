import React from 'react';
import './index.css';

function List(props) {

    const {user,isFirst,isLoding,err} = props
    //console.log(user);
    return (
        <div className="row">
        {
            isFirst ? <h2>請輸入關鍵字搜尋</h2>:
            isLoding ? <h2>搜尋中請稍後</h2>:
            err ? <h2 style={{color:'red'}}>{err}</h2>:
            user.map(userObj => {
                return(
                   
                    <div key={userObj.id} className="card">
                        <a rel="noopener noreferrer" href={userObj.html_url} target="_blank">
                        <img alt="head_portrait" src={userObj.avatar_url} style={{width: '100px'}}/>
                        </a>
                        <p className="card-text">{userObj.login}</p>
                    </div>
                    
                )
            })
        }
        </div>
    );
}
export default List;