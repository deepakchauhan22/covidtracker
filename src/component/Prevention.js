import React, {Component} from 'react';
import Hero from '../hero.png';
import handwash from '../wash-hands.svg';
import socialdistancing from '../socialdist.svg';
import mask from '../face-mask.svg';
import protection from '../protection.png';
import {GetRequestHooks} from './Global';

class Prevention extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return <>
  
  <div class="flex-container">
 
  {/* <div className="icon-bar">
                        <a href="#" className="facebook notifications" id="notificationLink"><i className="fa fa-bell" aria-hidden="true"></i><span id="notification_count">4</span>
                        <div className="updatesnot" id="notificationContainer"> 
                               
                                    <div className="update-contentnot">
                                    <div id="notificationTitle">News Updates</div>
                                       
                                    <div id="notificationsBody" class="notifications">
                                    <ul>
                                        <li><a href="#"><i className="fa fa-globe"  aria-hidden="true"></i>Global confirmed cases: 18,295,434; total deaths: 694,233; total recovered: 10,926,704</a></li>
                                        <li><a href="#"><i className="fa fa-user-md" aria-hidden="true"></i>Total Number of Tests Done in India: {}</a></li>
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
                            <img src={handwash} width = "18%" alt="Icons"/>
                            <img src={socialdistancing} width = "18%"  alt="Icons"/>
                            <img src={mask} width = "18%" alt="Icons"/>
                        </div>  

                        <h3>Stay Home, Stay Alert</h3>
                        <div className="vaccine"> 
                        {/* <img src={pandemic} width = "20%" alt="Icons"/>  */}
                        <p> To date, there is no <span class="react1">vaccine</span> to protect against this family of viruses. 
                        The standard recommendations to prevent infection spread include regular hand washing, covering mouth and nose when coughing and sneezing, 
                             thoroughly cooking meat and eggs. 
                             WHO also advises that people should avoid close contact with anyone showing symptoms of respiratory illness such as coughing and sneezing.
                             
                            </p>

                         
                      
                        <p>Here is a <span class="react1"> <em>  List of candidate vaccines</em>  </span>developed against SARS-CoV.</p>
                 
                       <a href="https://www.who.int/blueprint/priority-diseases/key-action/list-of-candidate-vaccines-developed-against-sars.pdf" > 
                       <button class="vaccine-list"> Visit www.Who.int &#9776; </button></a>
                             
                    
                     
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
             <div className = "Hero-Image">
                    <img src={protection} width = "100%"  alt="covid"/>
             </div>
             {/* <div>
                 <h3> List of Candidate Vaccines</h3>
             <p> To date, there is no <span class="react1">vaccine</span> to protect against this family of viruses. 
                        The standard recommendations to prevent infection spread include regular hand washing, covering mouth and nose when coughing and sneezing, 
                             thoroughly cooking meat and eggs. 
                             WHO also advises that people should avoid close contact with anyone showing symptoms of respiratory illness such as coughing and sneezing.
                             
                            </p>

                         
                      
                         <p>Here is a <span class="react1"> <em>  List of candidate vaccines</em>  </span>developed against SARS-CoV.</p>
                  
                        <button class="learn-more-link">Vaccine List</button>
             </div> */}
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