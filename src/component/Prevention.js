import React, {Component} from 'react';
import Hero from '../assets/img/hero.png';
import handwash from '../assets/img/wash-hands.svg';
import socialdistancing from '../assets/img/socialdist.svg';
import mask from '../assets/img/face-mask.svg';
import protection from '../assets/img/protection.png';
import covidred from '../assets/img/covid.svg';
import {GetRequestHooks} from './Global';
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
                            <li><a href="#"><i class="fa fa-check-circle" aria-hidden="true"></i>Wear Mask</a></li>
                            <li><a href="#"><i class="fa fa-check-circle" aria-hidden="true"></i>Stay Home</a></li>
                            <li><a href="#"><i class="fa fa-check-circle" aria-hidden="true"></i>Wash Hands Often</a></li>
                            <li><a href="#"><i class="fa fa-check-circle" aria-hidden="true"></i>Maintain Distance</a></li>
                            <li><a href="#"><i class="fa fa-check-circle" aria-hidden="true"></i>Cover Your Face</a></li>
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
                             To date, just one <span class="react1">coronavirus vaccine</span> has been approved. Sputnik V – formerly known as Gam-COVID-Vac and developed by the Gamaleya Research Institute in Moscow – was approved by the Ministry of Health of the Russian Federation on 11 August. Experts have raised considerable concern about the vaccine’s safety and efficacy given it has not yet entered Phase 3 clinical trials.
                            </p>

                         
                      
                        <p>Here is a <span class="react1"> <em>  List of candidate vaccines</em>  </span>developed against SARS-CoV.</p>
                 
                       <a href="https://www.who.int/blueprint/priority-diseases/key-action/list-of-candidate-vaccines-developed-against-sars.pdf" > 
                       <button class="vaccine-list"> Visit www.Who.int &#9776; </button></a>
                             
                    
                     
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