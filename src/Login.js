import React, { useState} from 'react'  //usehistory is a hook provided by react
import { Link ,useHistory} from 'react-router-dom'
import { auth } from './Firebase';
import './login.css'
function Login() {
    const history=useHistory();
    const [email,setEmail]=useState(''); //usestate is a hook used in react 
    const [password,setPassword]=useState('');
    const login=event=>{
        event.preventDefault(); //stops refresh
        //do the login logic
        auth.signInWithEmailAndPassword(email,password)
        .then((auth)=>{
         //logged in ...redirect to home page
         history.push('/')
        })
        .catch((e)=>alert(e.message))
    }
    const register=event=>{
        event.preventDefault();
        //do the register logic
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
        //create user..logged in...redirect to homepage

        })
        .catch((e)=>alert(e.message))
    }
    return (
        <div className="login">
            <Link to="/"><img className="login__image" src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt=""></img></Link>
        
        <div className="login__container">
            <h1>Sign In</h1>
            <form>
                <h5>E-mail</h5>
                <input value={email} onChange={event=>setEmail(event.target.value)} type="email"></input>
                <h5>Password</h5>
                <input value={password} onChange={event=>setPassword(event.target.value)} type="password"></input>
                <button onClick={login}>Sign In</button>
            </form>
            <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
            <button onClick={register}>Create your amazon account</button>
        </div>
        </div>
    )
}

export default Login
