import Header from './Header';
import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();


    useEffect(() => {
        if(localStorage.getItem('user-info'))
        {
            history.push("/add")
        }
    }, []);

    async function login() {
        let item = {email, password};
        let result = await fetch("http://crud.local/api/login", {
            method:"POST",
            body:JSON.stringify(item),
            headers:{
                "Content-Type":'application/json',
                "Accept":'application/json'
            }
        });
        result = await result.json();
        localStorage.setItem("user-info", JSON.stringify(result));
        history.push("/add");
    }
    

    return(
        <div>
            <Header />
            <h2>Login page</h2>
            <div className="col-sm-6 offset-sm-3">
                <input type="text" placeholder="email" onChange={(e)=>setEmail(e.target.value)} className="form-control"  />
                <br />
                <input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)} className="form-control"  />
                <br />
                <button onClick={login} className="btn btn-primary">Login</button>
            </div>

            
        </div>
    )
}

export default Login;