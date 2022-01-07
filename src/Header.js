/*1. href refreshes the page while link tags does not do. 
2.
all components of react are capitalized in first letters , therefore, the name of the file should always have first letter */
import React from 'react'
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import {Link} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search"
import { useStatevalue } from './StateProvider';
import { auth } from './Firebase';



function Header() {
    const [{basket,user}]=useStatevalue();
    
    const login =()=>{
        if(user)
        {
            auth.signOut();
            basket.length=0
        }
    }
    return <nav className="header" style={{backgroundColor: "black",display: 'flex',alignItems: 'center',position:'sticky',top:0,zIndex:100}}>
        
        <Link to="/"><img classname="header__logo" style={{width: 100,marginTop: 18,marginLeft: 20,marginRight: 20 }} src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""></img>
    </Link>
    <div className="header__search" style={{display:'flex',flex:1}}>
    <input type="text" className="header__searchInput" style={{width:'100%',height: 12,padding: 10,border: 'none'}} />
    <SearchIcon className="header__searchIcon" style={{backgroundColor: "orange",padding: 5,height: 22}}></SearchIcon>
    </div>
    
    <div className="header__nav" style={{display:'flex',justifyContent:'space-evenly'}}>
   
    <Link to={!user&&"/login"} style={{color:'white',textDecoration:'none'}}> 
    <div onClick={login} className="header__option" style={{color:'white',display:'flex',flexDirection:'column',marginLeft:10,marginRight:10}}>
    <span style={{fontSize:10}}>
        hello {user? user?.email: <p>please sign in</p>}
    </span>
    <span style={{fontSize:13,fontWeight:'bold'}}>{user?'Sign Out':'Sign In'}</span>
    </div>
    
    </Link>
    <Link to='/' style={{color:'white',textDecoration:'none'}}> 
    <div  className="header__option" style={{color:'white',display:'flex',flexDirection:'column',marginLeft:10,marginRight:10}}>
    <span style={{fontSize:10}}>
        returns
    </span>
    <span style={{fontSize:13,fontWeight:'bold'}}>& orders</span>
    </div>
   
    </Link>
    <Link to="/login" style={{color:'white',textDecoration:'none'}}> 
    <div className="header__option" style={{color:'white',display:'flex',flexDirection:'column',marginLeft:10,marginRight:10}}>
    <span style={{fontSize:10}}>
        your
    </span>
    <span style={{fontSize:13,fontWeight:'bold'}}>prime</span>
    </div>
    
    </Link>
    <Link to="/checkout" style={{textDecoration:'none'}}>
        <div style={{display:'flex'}}>
            <ShoppingBasketIcon style={{color:'white'}}/>
            <span style={{color:'white',marginRight:10,marginLeft:10}}>{basket?.length}</span>
        </div>
        </Link> 
    </div>
    </nav>
}

export default Header
