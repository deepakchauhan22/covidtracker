import React, { Component } from 'react';
import { render } from 'react-dom';
import { Doughnut } from 'react-chartjs-2'




  
class Chart extends Component {

  constructor(props) {
    super(props);

    this.state = {
        totalConfirmed: null,
        totalDeath: null,
        totalRecovered: null,
        population: null,
        city: [],
    };
}

    componentDidMount() {
        // Simple GET request using fetch
    
        fetch('https://api.covid19india.org/v4/data.json')
            .then(response => response.json())
            .then(data => this.setState({ 
              
                totalDeath:  data.TT.total.deceased,
                totalConfirmed:  data.TT.total.confirmed,
                totalRecovered: data.TT.total.recovered,
                population: data.TT.meta.population,

                }));

      }
      prepareChartData() {
        const { totalConfirmed,totalRecovered,totalDeath ,population} = this.state;
        var fatrate = 0;
        var recovrate = 0;
        fatrate  = (totalDeath / totalConfirmed)*100;
        recovrate  = (totalRecovered / totalConfirmed)*100;
        var n = fatrate.toFixed(1);
        var rest = 100 - n;
        labels= ['Fatality Rate','Total Cases'] 
        data = [n,rest];
        return { labels, data };
    }
//   constructor() {
//     super();
//     this.state = {
//       name: 'React',
//       data: {
//         datasets: [{
// 		  data: [2.1, 97.9],
// 		  backgroundColor: [
// 			'#9968EB',
// 			'rgba(54, 162, 235, 0.2)',
			
// 		],
//         }],
//         labels: [
//           'Fatality Rate',
//           'Total Cases',
          
//         ]
// 	  },
	
// 	};
// }

//   async componentDidMount() {
//         // GET request using fetch with async/await
//         const response = await fetch('https://api.covid19india.org/v4/data.json');
//         const data = await response.json();
//         this.setState({ states: data    ,
//             population: data.TT.meta.population,
//             totalDeath:  data.TT.total.deceased,
//             totalConfirmed:  data.TT.total.confirmed,
//             DistCode : data.AP.districts,
          
//         })

//     }

 

  render() {
    const { labels, data } = prepareChartData();
    // return (

    //   <Doughnut
    //   data={
    //     labels : labels,
    //     datasets: [{
    //       label: "# Users per device",
    //       backgroundColor: 'rgb(255, 99, 132)',
    //       borderColor: 'rgb(255, 99, 132)',
    //       data: data,
    //     }]
    //   }
      
    //   />
    // )
  }
}

export default Chart;