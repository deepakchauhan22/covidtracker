import React, {Component} from 'react';
import Hero from '../assets/img/hero.png';
import tired from '../assets/img/tired.png';
import cough from '../assets/img/cough.svg';
import fever from '../assets/img/fever.svg';
import protection from '../assets/img/protection.png';
import { GetRequest } from './GetRequest';
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
                                        <span className="fa fa-home i"> </span> 
                                        </NavLink>      
                     </div>
                    <div class="item">
                        
                    <h2>Common symptoms</h2>
                   

                    <div class="Help-content symptoms">
                            <ul>
                            <li><a href="#"><i class="fa fa-certificate" aria-hidden="true"></i>Fever</a></li>
                            <li><a href="#"><i class="fa fa-certificate" aria-hidden="true"></i>Dry Cough</a></li>
                            <li><a href="#"><i class="fa fa-certificate" aria-hidden="true"></i>Tiredness</a></li>
                            
                              </ul>

                                                   
                    </div>
                    <div className="prevent-img"> 
                           
                            <img src={cough} width = "30%"  alt="Icons"/>
                            <img src={fever} width = "25%" alt="Icons"/>
                            <img src={tired} width = "30%" alt="Icons"/>
                            
                    </div>  
                    <h2 className="less-com">Less Common</h2>
                   

                   <div class="Help-content">
                           <ul>
                           <li><a href="#"><i class="fa fa-certificate" aria-hidden="true"></i>Aches and Pains</a></li>
                           <li><a href="#"><i class="fa fa-certificate" aria-hidden="true"></i>Sore throat</a></li>
                           <li><a href="#"><i class="fa fa-certificate" aria-hidden="true"></i>Headache</a></li>
                           <li><a href="#"><i class="fa fa-certificate" aria-hidden="true"></i>Diarrhoea</a></li>
                           <li><a href="#"><i class="fa fa-certificate" aria-hidden="true"></i>Conjuctivites</a></li>
                           <li><a href="#"><i class="fa fa-certificate" aria-hidden="true"></i>Loss of taste or smell</a></li>
                             </ul>

                            
                        
                   </div>
                   <div>
                        <h2>Serious Symptoms</h2>
                            

                            <div class="Help-content">
                                    <ul>
                                    <li><a href="#"><i class="fa fa-certificate" aria-hidden="true"></i>Difficulty breathing </a></li>
                                    <li><a href="#"><i class="fa fa-certificate" aria-hidden="true"></i>Chest pain</a></li>
                                    <li><a href="#"><i class="fa fa-certificate" aria-hidden="true"></i>Loss of speech</a></li>
                                    <li><a href="#"><i class="fa fa-certificate" aria-hidden="true"></i>Shortness of breath</a></li>
                                    <li><a href="#"><i class="fa fa-certificate" aria-hidden="true"></i>Loss of movement</a></li>
                                    
                                        </ul>
                                    
                            </div>
                  </div>
                   <div className="prevent-img"> 
                          
                          
                   </div>  
                    

                    <div className="state-helpline"> 
                        <h3>Be Ready to Fight Covid-19</h3>
                        {/* <img src={pandemic} width = "20%" alt="Icons"/>  */}
                        <p> Here is a<span class="react1"><em> State wise</em></span> list of Helpline numbers</p>

                            <a href="https://www.mohfw.gov.in/pdf/StatewiseCovidHospitalslink19062020.pdf" > 
                       <button class="vaccine-list"> State Helpline no.  &#9742; </button></a>
                             

                       </div>
                        
                    
                    </div>
         </div>
         <div className="Hero1">
             <div className = "Hero-Image-Sym">
                    <img src={Hero} width = "70%"  alt="covid"/>
             </div>
                 
         </div>
  </div>

        </>
    }
}


export default Prevention;