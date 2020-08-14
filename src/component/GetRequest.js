import React from 'react';
import covidred from '../covid.svg';
import covidbll from '../covidbll.svg';
import Footer from '../component/Footer'; 
import { GetRequestAsyncAwait }  from '../component/GetRequestAsyncAwait';
import covidgreen from '../covidgreen.svg';
import covidgg from '../covidgg.svg';
import 'font-awesome/css/font-awesome.min.css';
import { Global } from './Global';
import {GetRequestHooks} from './Global';

class GetRequest extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            totalConfirmed: null,
            totalDeath: null,
            totalRecovered: null,
            totalOther: null,
            city: [],
        };
    }

    componentDidMount() {
        // Simple GET request using fetch
     
        fetch('https://api.covid19india.org/v4/data.json')
            .then(response => response.json())
            .then(data => this.setState({ 
                totalOther: data.TT.total.other,
                totalTested: data.TT.total.tested,
                totalDeath:  data.TT.total.deceased,
                totalConfirmed:  data.TT.total.confirmed,
                totalRecovered: data.TT.total.recovered,
                newConfirmed: data.TT.delta.confirmed,
                newDeath:  data.TT.delta.deceased,
                newRecovered: data.TT.delta.recovered,
                newOther: data.TT.delta.other,
                 }));
    }

    render() {
        const { totalConfirmed,totalRecovered,totalTested ,totalDeath ,totalOther,newConfirmed,newDeath,newRecovered} = this.state;

      

         function thousands_separators(num)
        {
          var num_parts = num.toString().split(".");
          num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          return num_parts.join(".");
        }
  
        var confirmInt = Number(totalConfirmed);
        var confirmComma =   (thousands_separators(confirmInt));
        var active =  totalConfirmed - (totalRecovered + totalDeath + totalOther)
        var activeInt  = parseInt(active)
        var activeComma =   (thousands_separators(activeInt));
        var recoverInt  =  Number(totalRecovered);
        var recoverComma =   (thousands_separators(recoverInt));
        var deathInt  =  Number(totalDeath);
        var deathComma =   (thousands_separators(deathInt));
  
        return (
           
            <div className="Hero-Block">
                
                    <GetRequestHooks  tested={totalTested} daily = {newConfirmed}/>
                    {/* <div className="icon-bar">
                        <a href="#" className="facebook notifications" id="notificationLink"><i className="fa fa-bell" aria-hidden="true"></i><span id="notification_count">4</span>
                        <div className="updatesnot" id="notificationContainer"> 
                               
                                    <div className="update-contentnot">
                                    <div id="notificationTitle">News Updates</div>
                                       
                                    <div id="notificationsBody" class="notifications">
                                    <ul>
                                        <li><a href="#"><i className="fa fa-globe"  aria-hidden="true"></i>Global confirmed cases: 18,295,434; total deaths: 694,233; total recovered: 10,926,704</a></li>
                                        <li><a href="#"><i className="fa fa-user-md" aria-hidden="true"></i>Total Number of Tests Done in India: {totalTested}</a></li>
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
                 <div className="Main-Content">
                            <div className="bottom-animation">
                                            <ul className="borda" >
                                                <li id="anime5">
                                                    <img src={covidred} width = "30%"  alt="covid"/>
                                                    <span>Total Cases</span>
                                                    <p className="Developer-box"> {confirmComma}</p>
                                                    <p className="new-box"> <i className="fa fa-plus" aria-hidden="true"></i> {newConfirmed} (new cases)</p>
                                                </li>
                                                <li id="anime6" >
                                                    <img src={covidgreen} width = "25%" alt="covid"/>
                                                    <span>Active</span> 
                                                    <p className="Developer-box">
                                                    {activeComma}
                                                       
                                                        </p>
                                                        <p className="new-box"> Tested: {totalTested}</p>  
                                                
                                                </li>
                                                <li id="anime7" >
                                                    <img src={covidgg} width = "30%" alt="covid"/>
                                                    <span>Recovered</span>
                                                    <p className="Developer-box">{recoverComma} </p>
                                                    <p className="new-box"> <i className="fa fa-arrow-up" aria-hidden="true"></i> {newRecovered}(recoveries)</p>
                                                </li>
                                                <li id="anime8" >
                                                    <img src={covidbll} width = "26%"  alt="covid"/>
                                                    <span>Deaths</span>
                                                    <p className="Developer-box">{deathComma}</p> 
                                                    <p className="new-box"> <i className="fa fa-plus" aria-hidden="true"></i> {newDeath} (new deaths)</p>
                                                </li>
                                                
                                            </ul>
                             </div>
                </div>
                          
                <GetRequestAsyncAwait />            
                <Footer />
          </div>
            
        );
    }
}

export { GetRequest }; 