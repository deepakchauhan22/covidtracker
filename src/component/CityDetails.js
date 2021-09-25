import React from 'react';
import pandemic from '../assets/img/pandemic.png';
import {STATE_NAMES} from './Constants';

class CityDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
           
            CityDetailssss: [],
        };      
    }

    handleClick = () => {
        // force a re-render
        this.forceUpdate();
      };
    
    componentDidMount() {
        
        // Simple GET request using fetch
     
        fetch('https://data.covid19india.org/v4/min/data.min.json')
            .then(response => response.json())
            .then(data => this.setState({ 
                CityDetailssss: data,
            
                 }));
    }

    render() {
        const{CityDetailssss} = this.state;
        var cityName =  window.cityName;
        var userStatecode = window.userStatecode;
        console.log(cityName);
        console.log(userStatecode);
         function getKeyByValue(object, value) {
            return userStatecode = Object.keys(object).find(key => object[key] === value);
          }       
        console.log(cityName);
        console.log(getKeyByValue(STATE_NAMES,userStatecode));

        if(cityName == 'New Delhi' || cityName=='Delhi' || userStatecode=='DL' || userStatecode=='Delhi'){
              cityName = 'Delhi';
              userStatecode = "DL"
        }
        if(cityName == 'Kanpur' || cityName=='Kanpur Dehat' || cityName=='Kanpur Nagar'){
            cityName = 'Kanpur Nagar';   
            userStatecode = "UP"
        }
        if(cityName == 'Bengaluru' || cityName=='Bangalore Urban' || cityName=='Bangalore Rural'){
            cityName = 'Bengaluru Urban';   
            userStatecode = "KA"
        }
        if(cityName == 'Noida' || cityName=='Greater Noida' || cityName=='Gautam Buddh Nagar'){
            cityName = 'Gautam Buddha Nagar';   
            userStatecode = "UP"
        }
        if(userStatecode=='CH' || userStatecode=='Chandigarh'){
            cityName = 'Chandigarh';   
        }
        if(userStatecode=='CH' || userStatecode=='Chandigarh'){
            cityName = 'Chandigarh';   
        }
        if(typeof cityName === "undefined")
        {
            cityName = 'Searching..';
        }
        
           return( 
            <div className="city-details"> 
            <img src={pandemic} width = "15%" alt="Icons"/> 
           
            <div className="flexx"> 
                    <div className="cityover"> 
                              <h1> India</h1>  
                              <i className="fa fa-map-marker" ></i> 
                              <span className= "a" id="demo"> <span>{cityName} </span> </span> 
                            
                    </div>
              <div className="cityContent">   
              <button onClick={this.handleClick}>Your City Details</button>
                   
            {
                    Object.keys(CityDetailssss).filter(
                      (stateCode) =>
                      stateCode == userStatecode
                     ).map((stateCode,i) => {
                    
                
                            return(
                                
                                
                            <div className="">   
                            
                                    {
                                        Object.keys(CityDetailssss[stateCode]['districts']).filter(
                                            (DistName) =>
                                            DistName == cityName
                                        ).map((DistName,i) => {  
                                            var cityConfirmed =  CityDetailssss[stateCode]['districts'][cityName]['total']['confirmed'];
                                            var cityRecovered =  CityDetailssss[stateCode]['districts'][cityName]['total']['recovered'];
                                            var cityDeath =  CityDetailssss[stateCode]['districts'][cityName]['total']['deceased'];
                                            var cityActive =      cityConfirmed - (cityRecovered +cityDeath);    

                                           
                                            return(
                                                <div className="cityContentBox" >   
                                            
                                               <span className= "b">Confirmed <br/><span className="react1"> {cityConfirmed} </span> </span> 
                                               <span className= "c">Active <br/><span className="react1">{cityActive}</span> </span> 
                                               <span className= "d">Recovered <br/><span className="react1">{cityRecovered}</span> </span> 
                                               <span className= "e">Deceased <br/><span className="react1">{cityDeath} </span></span> 
                                                </div>
                                            )

                                            })
                                        }
                            
                            </div>
                            
                            )
                   
                        
                    })

             } 
             </div>
             </div>
        
          
        
        </div>
        
           )
    }
}

export { CityDetails }; 