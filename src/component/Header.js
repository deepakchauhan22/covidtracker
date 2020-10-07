import React  ,{ Component } from 'react';
import covidred from '../assets/img/covid.svg';
import {NavLink } from 'react-router-dom';

class Header extends Component{

    constructor(props){
        super(props);     
    }

    render(){
        return(
                  //<> or <React.Fragment>
               
        <>
         
        <div className="topnav" id="myTopnav">
                 
                   <NavLink className="active" to= "/home">
                    <span ></span> Covidtrak.
                   </NavLink>
                        <NavLink  to= "/about">
                        <span className="fa fa-asterisk i"></span> About
                        </NavLink>
                        <NavLink className="nav-link" to= "/symptoms">
                        <span className="fa fa-heartbeat i"></span> Symptoms 
                        </NavLink>
                        <NavLink className="nav-link" to= "/prevention">
                        <span className="fa fa-medkit i"></span> Prevention
                        </NavLink>
                  
         </div>
        
        </>
     

        );
    }
}
export default Header;
