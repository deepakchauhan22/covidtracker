import React  ,{ Component } from 'react';
import {NavLink } from 'react-router-dom';

class SideMenu extends Component{

    constructor(props){
        super(props);     
    }

  
    
    render(){
        return(
                  //<> or <React.Fragment>
               
        <>
         
        <div className="sidenav">                
                
                        <NavLink  to= "/about">
                        <span className="fa fa-asterisk i"></span> 
                        </NavLink>
                        <NavLink className="nav-link" to= "/symptoms">
                        <span className="fa fa-heartbeat i"></span>  
                        </NavLink>
                        <NavLink className="nav-link" to= "/prevention">
                        <span className="fa fa-medkit i"></span> 
                        </NavLink>
                  
         </div>
        
        </>
     

        );
    }
}
export default SideMenu;
