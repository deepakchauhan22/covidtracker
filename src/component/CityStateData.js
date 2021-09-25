import React  from 'react';
import fight from '../assets/img/fight.png';
import Chart from './Charts'; 
import {STATE_NAMES} from './Constants';
import { CityDetails } from './CityDetails';





class CityStateData extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            states: [],
            DistCode: [],
            vaccine1:null,
            vaccine2:null            

            
        };
    }

    async componentDidMount() {
        // GET request using fetch with async/await
        const response = await fetch('https://data.covid19india.org/v4/min/data.min.json');
        const data = await response.json();
        this.setState({ states: data    ,
            totalTested: data.TT.total.tested,
            DistCode : data.AP.districts,
            vaccine1: data.TT.total.vaccinated1,
            vaccine2:data.TT.total.vaccinated2,
        })

    }

    render() {
        const { states,vaccine1, vaccine2 } = this.state;
        
        const totalVaccine = vaccine1 + vaccine2;


        return (
          
            <div className="statedata">
          
                 <div className="statetable"> 
                            <div className= "stateImg">
                                  
                                    <CityDetails /> 
                                    <Chart  />       
                               
                              
                                <div className="Helpline"> 
                                <h2> Helpline</h2>  
                                    <div className="Help-content">
                                        <ul>
                                        <li><a href="tel:1123978046" ><i className="fa fa-mobile" aria-hidden="true"></i>:+91-11-23978046</a></li>
                                        <li><a href="tel:1075" ><i className="fa fa-phone" aria-hidden="true"></i>Toll Free: 1075</a></li>
                                        </ul>
                                        <ul>
                                        <li><a href="mailto:ncov2019@gmail.com" ><i className="fa fa-envelope" aria-hidden="true"></i>ncov2019@gov.in</a></li>
                                        <li><a href="tel:1921" ><i className="fa fa-volume-control-phone" aria-hidden="true"></i>Aarogya Setu 1921</a></li>
                                        </ul>
                                    </div>                                    
                                </div>
                                <div className="learn-more"> 
                                <h3>Learn More About COVID-19</h3>  
                               <a href="https://www.mohfw.gov.in/"><button className="learn-more-link">Visit mohfw.gov.in</button> </a> 
                                </div>  
 
                                <div class="city-details vaccine-block">
                                <div class="flexx">
                                   
                                        <div class="cityContent"> <i class="fa fa-shield" aria-hidden="true"></i> <h3>Vaccination Details</h3>
                                        <div class="">
                                            <div class="cityContentBox"><span class="b">Dose 1 <br/>
                                            <span class="react1"> {vaccine1} </span> 
                                            </span><span class="c">Dose 2 <br/><span class="react1">{vaccine2}</span> </span>
                                            <span class="d">Total <br/><span class="react1">{totalVaccine}</span> </span>
                                           
                                             </div></div></div>
                                 </div>
                                </div>

                                <div className="pandemic"> 
                                    <h2>  <span >India Fights Corona</span> </h2>
                                    <img src={fight} width = "60%" alt="Icons"/>                                  
                                </div>  
                            </div>
                    <div className="statebody">
                   
                       <div className="stateheader">
                          {/* <h2> Stay Home and Stay Alert</h2>
                          <img src={homestay} width = "60%" alt="Icons"/>     */}
                      </div>
                            <table id="customers">
                            <thead>
                                    <tr>
                                        <th>States/UT</th>
                                        <th>Confirmed</th>
                                        <th>Active</th>
                                        <th>Recovered</th>
                                        <th>Deceased</th>
                                        <th>Tested</th>
                                    </tr>
                                    
                            </thead>
                                       {
                                            Object.keys(states,STATE_NAMES)
                                            .filter(
                                                (stateCode) =>
                                                stateCode !== 'TT' &&
                                                states[stateCode]['total'] 
                                                //  && states[stateCode][districts]
                                               )
                                                .map((stateCode,i) => {
                                                   
                                                    var confirmed = states[stateCode]['total']['confirmed'];
                                                    var recovered = states[stateCode]['total']['recovered'];
                                                    var migrated = states[stateCode]['total']['migrated'];
                                                    var deceased = states[stateCode]['total']['deceased'];
                                                    var tested = states[stateCode]['total']['tested'];
                                                   
                                                 
                                                    if(typeof confirmed === "undefined")
                                                    {
                                                        confirmed = 0;
                                                    } 
                                                    if(typeof recovered === "undefined")
                                                    {
                                                        recovered = 0;
                                                    } 
                                                    if(typeof deceased === "undefined")
                                                    {
                                                        deceased = 0;
                                                    } 
                                                    if(typeof migrated === "undefined")
                                                    {
                                                        migrated = 0;
                                                    } 
                                                    var active = confirmed - (recovered + migrated+ deceased);      
                                                
                                                    return(
                                                        <tbody >
                                                                <tr>
                                                                <td> { STATE_NAMES[stateCode] } </td>                                                                                                                                                                                                                 
                                                                <td> {confirmed}</td>
                                                                <td> {  active } </td>
                                                                <td> {recovered}</td>
                                                                <td> {deceased}</td>    
                                                                <td> {tested}</td>                                                            
                                                                </tr>  
                                                                </tbody>   
                                                        )    

                                                  }
                                                  
                                                 )   
                                                   
                                                                
                                        } 
                             </table>
                    </div>
                
                 </div>

               


            </div>
        );
        
    }
}

export { CityStateData }; 