import React, { useEffect ,useState} from 'react';
import './index.css';
import PubSub from 'pubsub-js' 
function List() {

    const [users, setusers] = useState({
        user:[],
        isFirst:true,
        isLoding:false,
        err:''
    });
    useEffect(()=>{
        const token = PubSub.subscribe('atguigu',(_,stateObj) => {
            setusers(stateObj);
            //console.log(stateObj);
        })
        return () => {
            PubSub.unsubscribe(token);
        };
        
    },[])
    
    
    return (
        <div className="row">
        {
            users.isFirst ? <h2>請輸入關鍵字搜尋</h2>:
            users.isLoding ? <h2>搜尋中請稍後</h2>:
            users.err ? <h2 style={{color:'red'}}>{users.err}</h2>:
            users.user.map(userObj => {
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