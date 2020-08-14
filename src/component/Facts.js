import React, {Component} from 'react';
import Hero from '../stay-safe.png';


class Facts extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return <>
  
  <div class="flex-container">
{/*   
  <div className="icon-bar">
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
                        
                            {/* <h3>Spread Facts, Not fear</h3> */}
                            <h3>What is Corona Virus?</h3>
                            
                            <p><span class="react1"> Corona viruses</span> are a large family of viruses which may cause illness
                                in animals or humans. In humans, several coronaviruses are known
                                to cause respiratory infections ranging from the common cold to more
                                severe diseases such as Middle East Respiratory Syndrome <span class="react1">(MERS) </span>
                                and Severe Acute Respiratory Syndrome <span class="react1"> (SARS). </span>
                                </p>
                            {/* <p>The most recently discovered<em> coronavirus</em> causes disease <span class="react1"> COVID-19. </span></p> */}
                    </div>
                    <div class="items">
                            <h2>What is COVID-19 ?</h2>
                            
                        <p><span class="react1">COVID-19</span> is an infectious disease caused by a newly discovered coronavirus.
                         Most people who fall sick with COVID-19 will experience mild to moderate symptoms and recover without special treatment.</p>
                        <p>There are currently <em>no drugs licensed</em> for the treatment or prevention of <span class="react1"> COVID-19. </span></p>
                      
                    </div>
                    <div class="items">
                        <h2>How it Spreads</h2>
                        <p> The virus that causes <span class="react1">COVID-19</span>  is mainly transmitted through droplets generated when an infected person coughs, sneezes, or exhales.
                             These droplets are too heavy to hang in the air, and quickly fall on floors or surfaces.<br/>
                             </p> <p>People then catch COVID-19 by touching
                            these objects or surfaces, then touching their<em> eyes, nose or mouth.</em> 
                            </p> <p>People can also catch COVID-19 if they breathe in droplets from a
                            person with COVID-19 who coughs out or exhales droplets. This is
                            why it is important to stay more than 1 meter (3 feet) away from a
                            person who is sick.  </p>      
                                                    
                            </div>
                    <div class="items">                        
                        <h2>Can COVID transmit through AIR ? </h2>
                        <p>Studies to date suggest that the virus that causes <span class ="react1">COVID-19</span> is mainly
                            transmitted through contact with respiratory droplets rather than
                            through the air.</p>
                                                
                        <p>Respiratory infections can be transmitted through droplets of different sizes: 
                            when the droplet particles are &gt;5-10 μm in diameter they are referred to as respiratory droplets, 
                            and when then are 	&lt;5μm in diameter, they are referred to as<em> droplet nuclei.</em>
                          </p>
                    </div>
                    
         </div>
         <div className="Hero1">
             <div className = "Hero-Image">
                    <img src={Hero} width = "90%"  alt="covid"/>
             </div>
            
        
             <div className = "Morefaq">
                  
                    <a href="https://www.w3schools.com/css/css3_buttons.asp" class="more-faqs" ><span>More FAQs </span></a>
             </div>
           
                 
         </div>
  </div>

        </>
    }
}


export default Facts;