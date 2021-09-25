import React, {Component} from 'react';

import handwash from '../assets/img/wash-hands.svg';
import socialdistancing from '../assets/img/socialdist.svg';
import mask from '../assets/img/face-mask.svg';
import protection from '../assets/img/protection.png';

import SideMenu from './SideMenu';
import {NavLink } from 'react-router-dom';

class Prevention extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return <>
  
  <div class="flex-container">
         <SideMenu />
         
        <div class="markdown"> 
                     <div className="breadcrumbs">                
                                        <NavLink  to= "/home">
                                        <span className="fa fa-home i"></span> 
                                        </NavLink>      
                     </div>
                    <div class="item">
                        
                    <h2>Preventions</h2>
                   
                    <div class="Help-content">
                            <ul>
                            <li><a ><i class="fa fa-check-circle" aria-hidden="true"></i>Wear Mask</a></li>
                            <li><a><i class="fa fa-check-circle" aria-hidden="true"></i>Stay Home</a></li>
                            <li><a ><i class="fa fa-check-circle" aria-hidden="true"></i>Wash Hands Often</a></li>
                            <li><a ><i class="fa fa-check-circle" aria-hidden="true"></i>Maintain Distance</a></li>
                            <li><a ><i class="fa fa-check-circle" aria-hidden="true"></i>Cover Your Face</a></li>
                            </ul>
                        </div>
                        <div className="prevent-img"> 
                            <img src={handwash} width = "30%" alt="Icons"/>
                            <img src={socialdistancing} width = "30%"  alt="Icons"/>
                            <img src={mask} width = "30%" alt="Icons"/>
                        </div>  

                        <h3>Stay Home, Stay Alert</h3>
                        <div className="vaccine"> 
                        {/* <img src={pandemic} width = "20%" alt="Icons"/>  */}
                        <p>
                             To date, <span class="react1">7 </span>Corona virus vaccine has been Approved for Use in India.                          
                            Out of which <span class="react1">Covisheild</span> and  <span class="react1">Covaxin</span> are most used in India
                            </p>

                         
                      
                        <p>Here is a <span class="react1"> <em>  List of candidate vaccines</em>  </span>developed against SARS-CoV.</p>
                 
                        <div className = "Morefaq">
                       <a href="https://covid19.trackvaccines.org/country/india/"  target="_blank" > 
                       <button class="vaccine-list"> Visit www.Who.int &#9776; </button></a>
                             
                     </div>
                     
                       </div>
                     
                    
                    </div>
         </div>
         <div className="Hero1">
             <div className = "Hero-Image">
                    <img src={protection} width = "100%"  alt="covid"/>
             </div>
                 
         </div>
  </div>

        </>
    }
}


export default Prevention;