import React, { useState, useEffect } from 'react';

function GetRequestHooks(props) {
    const [Globe, setGlobe] = useState([]);
    const [City, setCity] = useState([]);
    const [showText, setShowText] = useState(false);
  
    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch('https://api.covid19api.com/summary')
            .then(response => response.json())
            .then(data => setGlobe(data));
           
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

  
    const cityName = window.cityName;
    const userStatecode = window.userStatecode;
    
    return (
        console.log(cityName),
        console.log(userStatecode),


    //   console.log(cityName),
    //   console.log(userStatecode),
        <div className="card text-center m-3">
            
           
            <div className="icon-bar">
                           <a className="facebook notifications" id="notificationLink"  onClick={() => setShowText(!showText)}>
                        
                               <i className="fa fa-bell" aria-hidden="true">
                               </i><span id="notification_count">4</span>
                               {showText && 
                                    <div className="updatesnot" id="notificationContainer"> 
                            
                                                    <div className="update-contentnot">
                                                        <div id="notificationTitle">News Updates    <span> <i class="fa fa-times" aria-hidden="true"></i></span></div>
                                                     
                                                        <div id="notificationsBody" class="notifications">
                                                        <ul>
                                                        {
                                                                Object.keys(Globe).filter(
                                                                (stateCode) =>
                                                                stateCode == 'Global'
                                                                ).map((stateCode,i) => {
                                                                var confirmed = Globe[stateCode]['TotalConfirmed'];
                                                                var recovered = Globe[stateCode]['TotalRecovered'];
                                                                var deaths = Globe[stateCode]['TotalDeaths'];
                                                                
                                                                                                        
                                                                    //        var Distconfirmed = states[stateCode]['districts'][DistName]['total']['confirmed'];
                                                                //  console.log(confirmed);
                                                                return(
                                                                    <li><a href="#"><i className="fa fa-globe"  aria-hidden="true"></i>Global confirmed cases: {confirmed}; total deaths: {deaths}; total recovered: {recovered}</a></li>
                                                                                    
                                                                
                                                                )
                                                            
                                                                    
                                                            })
                                                            } 
                                                            <li><a href="#"><i className="fa fa-user-md" aria-hidden="true"></i>Total Number of Tests Done in India: {props.tested} </a></li>
                                                            <li><a href="#"><i className="fa fa-user-md" aria-hidden="true"></i>Total Number of cases Today in India: {props.daily} </a></li>
                                                            <li><a href="#"><i className="fa fa-info-circle" aria-hidden="true"></i>Guidelines on Preventive Measures to Contain Spread of COVID-19</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                        </div> 
                                        }
                                        
                                
                            </a> 
                            <a href="#" className="twitter"><i className="fa fa-language" aria-hidden="true"></i></a> 
                            <a href="#" className="google"> <label className="switch">
                                                <input type="checkbox"/>
                                                <span className="slider round"></span>
                                                </label>
                            </a>                     
                </div>
            

            {/* <div>                    
                      <span>TotalConfirmed: {Globe}</span>
            </div> */}
                                                 {/* .filter(
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
                                                   
                                               */}
 
         

                   
               



           {/* {
        Object.keys(Globe).filter(
            (stateCode) =>
            stateCode == 'Global'
            //  && states[stateCode][districts]
           ).map((stateCode, i) => {

            var confirmed = Globe['Global']['TotalConfirmed'];

               return(
                <p>
                <span>dee: {confirmed}</span>
               
              </p>
               )
        
           })
      }  */}
            
          
           
         
        </div>
    );
}

export { GetRequestHooks };