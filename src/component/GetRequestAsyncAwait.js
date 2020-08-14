import React ,{ useState } from 'react';
import pandemic from '../pandemic.png';
import homestay from '../homestay.png';
import fight from '../fight.png';
import Chart from '../component/Charts'; 
import DynamicDoughnut from './Charts';
import { configure } from '@testing-library/react';
import {STATE_NAMES} from './Constants';
import { StaticRouter } from 'react-router-dom';
import {GetRequestHooks} from './Global';
import { CityDetails } from './CityDetails';

const MySubComponent = (props) => {
        console.log(props.code);
    
}



class GetRequestAsyncAwait extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            states: [],
            DistCode: [],
            
        };
    }

    async componentDidMount() {
        // GET request using fetch with async/await
        const response = await fetch('https://api.covid19india.org/v4/data.json');
        const data = await response.json();
        this.setState({ states: data    ,
            totalTested: data.TT.total.tested,
            DistCode : data.AP.districts,
        })

    }

    render() {
        const { DistCode,totalTested ,states } = this.state;
        
        const cityName = window.cityName;
        const userStatecode = window.userStatecode;
       
        return (
          
            <div className="statedata">
          
                 <div className="statetable"> 
                            <div className= "stateImg">
                                    {/* <div className="city-details"> 
                                        <img src={pandemic} width = "15%" alt="Icons"/> 
                                        <div className="cityover"> 
                                            <h1> India</h1>  
                                            <i className="fa fa-map-marker" ></i> 
                                            <span className= "a" id="demo"></span> 
                                        </div>
                                        <span className= "b">Confirmed <span className="react1">4321 </span> </span> 
                                        <span className= "c">Active <span className="react1">876</span> </span> 
                                        <span className= "d">Recovered <span className="react1">1561</span> </span> 
                                        <span className= "e">Deceased <span className="react1">321 </span></span> 
                                    
                                    </div> */}
                                    {/* <div>
                                    <h2> Stay Home and Stay Alert</h2>
                          <img src={homestay} width = "60%" alt="Icons"/>    
                                    </div> */}
                                    <CityDetails /> 
                                    <Chart  />       
                               
                                {/* <div className="updates"> 
                                <h2>News Updates</h2>  
                                    <div className="update-content">
                                        <ul>
                                        <li><a href="#"><i className="fa fa-globe"  aria-hidden="true"></i>Global confirmed cases: 18,295,434; total deaths: 694,233; total recovered: 10,926,704</a></li>
                                        <li><a href="#"><i className="fa fa-user-md" aria-hidden="true"></i>Total Number of Tests Done in India: {totalTested}</a></li>
                                        <li><a href="#"><i className="fa fa-asterisk" aria-hidden="true"></i>2284 new cases and 1471 recoveries in Your City</a></li>
                                        <li><a href="#"><i className="fa fa-info-circle" aria-hidden="true"></i>Guidelines on Preventive Measures to Contain Spread of COVID-19</a></li>
                                        </ul>
                                    </div>
                                </div>  */}
                                <div className="Helpline"> 
                                <h2> Helpline</h2>  
                                    <div className="Help-content">
                                        <ul>
                                        <li><a href="#"><i className="fa fa-mobile" aria-hidden="true"></i>:+91-11-23978046</a></li>
                                        <li><a href="#"><i className="fa fa-phone" aria-hidden="true"></i>Toll Free: 1075</a></li>
                                        </ul>
                                        <ul>
                                        <li><a href="#"><i className="fa fa-envelope" aria-hidden="true"></i>ncov2019@gov.in</a></li>
                                        <li><a href="#"><i className="fa fa-volume-control-phone" aria-hidden="true"></i>Aarogya Setu 1921</a></li>
                                        </ul>
                                    </div>                                    
                                </div>
                                <div className="learn-more"> 
                                <h3>Learn More About COVID-19</h3>  
                               <a href="https://www.mohfw.gov.in/"><button class="learn-more-link">Visit mohfw.gov.in</button> </a> 
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
                                        <th>States/Union Territories</th>
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
                                                        <tbody>
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

                                                        // onClick={ <MySubComponent code={stateCode} />}>
                                                        // function Example (){
                                                        //     console.log(states[stateCode]['districts']);   

                                                        //     Object.keys(states[stateCode]['districts'])
                                                        //    .map((DistName,i) => {  
                                                               
                                                        //        var Distconfirmed = states[stateCode]['districts'][DistName]['total']['confirmed'];
                                                        //        var Distrecovered =  states[stateCode]['districts'][DistName]['total']['recovered'];
                                                        //        var Distmigrated =  states[stateCode]['districts'][DistName]['total']['migrated'];
                                                        //        var Distdeceased =  states[stateCode]['districts'][DistName]['total']['deceased'];

                                                        //            return( 
                                                        //                <tr> 
                                                        //                    <td> 
                                                        //                <table id="customers">
                                                        //                    <tr>
                                                        //                        <th>Districts</th>
                                                        //                        <th>Confirmed</th>
                                                        //                        <th>Recovered</th>
                                                        //                        <th>Deceased</th>
                                                        //                    </tr>                                                          
                                                        //                    <tr >
                                                        //                    <td> {DistName}</td>       
                                                        //                    <td> {Distconfirmed}</td>
                                                        //                    <td> {Distrecovered}</td>
                                                        //                    <td> {Distdeceased}</td>
                                                                           
                                                        //                    </tr>
                                                        //                </table>
                                                        //                </td>
                                                        //                </tr>
                                                        //        )                                                                
                                                        //    }
                                                        //    )                                                                                                          
                                                        //  }
                                                                                                             

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

export { GetRequestAsyncAwait }; 