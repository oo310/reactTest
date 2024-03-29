import React from 'react';
import { useRef } from 'react';
import PubSub from 'pubsub-js' 
import axios from 'axios'
import './index.css';



export default function Search(props) {
    let myRef = useRef();
    const search=()=>{
        //myref.current = ref.current + "1";
        const {value:keyWord} = myRef.current//賦值並改名 myRef.current.value => 
        //console.log(keyWord);
        PubSub.publish('atguigu',{user:[],isFirst:false,isLoding:true,err:''})
        //props.updateAppState({user:[],isFirst:false,isLoding:true,err:''});
        axios.get(`/api1/search/users?q=${keyWord}`).then(//http://localhost:3000向自己發請求可以省略
            response =>{
                // console.log('成功',response.data);
                //props.updateAppState({user:response.data.items,isFirst:false,isLoding:false,err:''});
                PubSub.publish('atguigu',{user:response.data.items,isFirst:false,isLoding:false,err:''})
                console.log('發送訊息');
            },
            error => {
                //props.updateAppState({user:[],isFirst:false,isLoding:false,err:error.message});
                PubSub.publish('atguigu',{user:[],isFirst:false,isLoding:false,err:error.message})
                console.log('失敗');
            }
        )
        
    }
    return(
        <section className="jumbotron">
            <h3 className="jumbotron-heading">Search Github Users</h3>
            <div>
                <input ref={c => myRef.current = c} type="text" placeholder="enter the name you search"/>&nbsp;
                <button onClick={search}>Search</button>
            </div>
        </section>
    )
}
