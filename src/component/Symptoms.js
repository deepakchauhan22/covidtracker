import React, {Component} from 'react';
import Hero from '../hero.png';
import tired from '../tired.png';
import cough from '../cough.svg';
import fever from '../fever.svg';
import protection from '../protection.png';
import { GetRequest } from './GetRequest';
import{Abhinay}from './Abhinay'

class Prevention extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return <>
  <div className="abhinay">
            
             </div>
  <div class="flex-container">
           
          {/* <div className="icon-bar">
                        <a href="#" className="facebook notifications" id="notificationLink"><i className="fa fa-bell" aria-hidden="true"></i><span id="notification_count">4</span>
                        <div className="updatesnot" id="notificationContainer"> 
                               
                                    <div className="update-contentnot">
                                    <div id="notificationTitle">News Updates</div>
                                       
                                    <div id="notificationsBody" class="notifications">
                                    <ul>
                                        <li><a href="#"><i className="fa fa-globe"  aria-hidden="true"></i>Global confirmed cases: 18,295,434; total deaths: 694,233; total recovered: 10,926,704</a></li>
                                        <li><a href="#"><i className="fa fa-user-md" aria-hidden="true"></i>Total Number of Tests Done in India: </a></li>
                                        <li><a href="#"><i className="fa fa-asterisk" aria-hidden="true"></i>2284 new cases and 1471 recoveries in Your City</a></li>
                                        <li><a href="#"><i className="fa fa-info-circle" aria-hidden="true"></i>Guidelines on Preventive Measures to Contain Spread of COVID-19</a></li>
                                        </ul>
                                    </div>
                                    </div>
                                </div> 
                        
                        </a> 
                        <a href="#" className="twitter"><i className="fa fa-language" aria-hidden="true"></i></a> 
                        <a href="#" className="google"> <label className="switch">
                            <input type="checkbox"/>
                            <span className="slider round"></span>
                            </label>
                        </a>                     
             </div> */}
             
          
        <div class="markdown"> 
                    <div class="item">
                        
                    <h2>Common symptoms</h2>
                   

                    <div class="Help-content symptoms">
                            <ul>
                            <li><a href="#"><i class="fa fa-certificate" aria-hidden="true"></i>Fever</a></li>
                            <li><a href="#"><i class="fa fa-certificate" aria-hidden="true"></i>Dry Cough</a></li>
                            <li><a href="#"><i class="fa fa-certificate" aria-hidden="true"></i>Tiredness</a></li>
                            
                              </ul>

                              {/* <li><a href="#"><i class="fa fa-check-circle" aria-hidden="true"></i>Maintain Distance</a></li>
                            <li><a href="#"><i class="fa fa-check-circle" aria-hidden="true"></i>Cover Your Face</a></li> */}
                         
                    </div>
                    <div className="prevent-img"> 
                           
                            <img src={cough} width = "20%"  alt="Icons"/>
                            <img src={fever} width = "16%" alt="Icons"/>
                            <img src={tired} width = "18%" alt="Icons"/>
                            
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

                             {/* <li><a href="#"><i class="fa fa-check-circle" aria-hidden="true"></i>Maintain Distance</a></li>
                           <li><a href="#"><i class="fa fa-check-circle" aria-hidden="true"></i>Cover Your Face</a></li> */}
                        
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
                        
                        {/* <div class="list-type4">
                        <h4> Most common symptoms:</h4>
                            <ol>
                            <li><a href="#">Fever</a></li>
                            <li><a href="#">Dry- cough</a></li>
                            <li><a href="#">Tiredness</a></li>
                            </ol>
                    
                        <h4> Less common symptoms:</h4>

                        <ol>
                            <li><a href="#">Aches and Pains</a></li>
                            <li><a href="#">Sore throat</a></li>
                            <li><a href="#">diarrhoea</a></li>
                            <li><a href="#">headache</a></li>
                            <li><a href="#">Conjuctivites</a></li>
                            <li><a href="#">Sore throat</a></li>
                            <li><a href="#">loss of taste or smell</a></li>
                        </ol> 

                        </div> */}
                    
                    </div>
         </div>
         <div className="Hero1">
             <div className = "Hero-Image-Sym">
                    <img src={Hero} width = "70%"  alt="covid"/>
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

                             {/* <li><a href="#"><i class="fa fa-check-circle" aria-hidden="true"></i>Maintain Distance</a></li>
                           <li><a href="#"><i class="fa fa-check-circle" aria-hidden="true"></i>Cover Your Face</a></li> */}
                        
                   </div>
             </div>
             {/* <div  class="list-type4 ">  
                <div class="list-serious">
                    <h4> Serious symptoms:</h4>

                            <ol>
                                <li><a href="#">Difficulty breathing or shortness of breath</a></li>
                                <li><a href="#">Chest pain or pressure</a></li>
                                <li><a href="#">loss of speech or movement</a></li>
                            </ol>
                 </div>         
           </div> */}
                 
         </div>
  </div>

        </>
    }
}


export default Prevention;