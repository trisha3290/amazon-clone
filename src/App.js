import React, { useEffect } from "react"
import "./App.css"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStatevalue } from "./StateProvider";
import { auth } from "./Firebase";


function App() {
  const [{user},dispatch]=useStatevalue();          //data layer
  useEffect(()=>{
   const unsubscribe= auth.onAuthStateChanged((authUser)=>{      //listener added here which listens to requests of login or logout 
     if(authUser)
     {
        dispatch({
          type:"set_user",  //pushing user to data layer
          user:authUser
        })
     }
     else{
        dispatch({
          type:"set_user",
          user:null
        })
     }
   })
   return()=>
   { //any cleanup required goes in here
     unsubscribe()}
  },[])   
  console.log('User is >>>',user)                                     //this hook will run only once and each time it will keep updating basket
  return (
    <Router>
      <div className="app">
      <Switch>
        <Route path="/checkout">
          <Header/>
        <Checkout></Checkout> 
        </Route>
        <Route path="/login">
         <Login></Login>
        </Route>
        <Route path="/">
         
          <Header></Header>
          <Home/>
          
        </Route>
      </Switch>
      </div>
    </Router>
    
  );
}

export default App;
