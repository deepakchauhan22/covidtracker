import React, { Component } from 'react';
import { render } from 'react-dom';
import { Doughnut } from 'react-chartjs-2'


  
class Chart extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
    
	};
}

async componentDidMount() {
  // GET request using fetch with async/await
  const response = await fetch('https://api.covid19india.org/v4/data.json');
  const data = await response.json();
  this.setState({ states: data    ,
      population: data.TT.meta.population,
      totalDeath:  data.TT.total.deceased,
      totalRecovered:  data.TT.total.recovered,
      totalConfirmed:  data.TT.total.confirmed,
      DistCode : data.AP.districts,
    
  })

}

 

  render() {
    const { totalConfirmed,totalRecovered,totalDeath ,population} = this.state;

    var fatrate = 0;
    var recovrate = 0;
    fatrate  = (totalDeath / totalConfirmed)*100;
    recovrate  = (totalRecovered / totalConfirmed)*100;
    var fatality = fatrate.toFixed(1);
    var recovery = recovrate.toFixed(1);

    var left = 100 - ( Number(fatality) +  Number(recovery));
    var activeCases =  left.toFixed(1); 
    const labels= ['Fatality Rate','Recovery Rate','Active Cases'] 
    // const data = [n,rest];
   const datasets= [{
      data: [fatality,recovery,activeCases],
      backgroundColor: [
      '#3e517a',
      '#a5b7d9',
      '#CE88B1'      
    ],
  }]
    return (
     <div className= "chartBox" > 
          <Doughnut
          data={{
            labels : labels,
            datasets: datasets
          }}
            options={{
              responsive: true,
              maintainAspectRatio: true,
              legend: {
                position: 'top',
              },
            }}
          
            height={200}
            width={500} 
          />
          <p>Out of Total Cases: {totalConfirmed} </p>
      </div>
    )
  }
}

export default Chart;