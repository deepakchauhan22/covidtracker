import React, {Component} from 'react';
import Hero from '../assets/img/stay-safe.png';
import faqpdf from '../assets/FAQ.pdf';
import SideMenu from './SideMenu';
import {NavLink } from 'react-router-dom';

class Facts extends Component{
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

                     <div className = "Morefaq">
                  
                            <a href={faqpdf} class="more-faqs"  target="_blank"><span>More FAQs </span></a>
                             {/* <a href="https://www.mohfw.gov.in/pdf/StatewiseCovidHospitalslink19062020.pdf" > 
                                      <button class="vaccine-list"> State Helpline no.  &#9742; </button></a> */}
                           
                      </div>
                    
         </div>
         <div className="Hero1">
             <div className = "Hero-Image">
                    <img src={Hero} width = "90%"  alt="covid"/>
             </div>
                 
         </div>
  </div>

        </>
    }
}


export default Facts;