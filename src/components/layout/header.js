import React, { Component } from 'react';
import './header.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Home, Login, Regist, View } from '../pages';


const MenuItem = ({active, children, to}) => (
  <div className="menu-item">
    {children}
  </div>
)



class Header extends Component {
  render() {
    return(

        <div className="apps">
          <div className="black-nav">
              Board Table
          </div>
          <div className="menu">
        <Link to="/"><MenuItem>로그인</MenuItem></Link>
        <Link to="/Home"><MenuItem>게시물</MenuItem></Link>
        <Link to="/regist"><MenuItem>회원가입</MenuItem></Link>
        <Link to="/view"><MenuItem>회원 리스트</MenuItem></Link>
        </div> 

        <div>   
          <Route exact path='/' component={Login}/>
          <Route path='/Home' component={Home}/>
          <Route path='/regist' component={Regist}/>
          <Route path='/view' component={View}/> 
        </div>
        
        </div>

      );
    
  };
}
export default Header;