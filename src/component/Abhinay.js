import React from 'react';


class Abhinay extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: [],
           
        };
    }


    async componentDidMount() {
        // GET request using fetch with async/await
        const response = await fetch('https://abhinayx.github.io/studentjson/db.json');
        const data = await response.json();
        this.setState({ name: data,
            
        })

    }


    render() {
        const{name} = this.state;
        console.log(name);
        return (
           
            <div> 
                 <table id="customers"> 

                                   <thead> 
                                       <tr>
                                           <th>
                                               Names
                                           </th>
                                           <th>
                                               Roll Number
                                           </th>
                                         <th>
                                             Total Marks
                                         </th>
                                         <th>
                                             Status 
                                         </th>
                                       </tr>
                                   </thead>
                                   {
                Object.keys(name)
                    .map((key,i) => {
                        var studentname = name[key]['name'];
                        var studentRoll = name[key]['rollNumber'];
                        var math = parseInt(name[key]['marks']['Maths']);
                        var eng = parseInt(name[key]['marks']['English']);
                        var sci = parseInt(name[key]['marks']['Science']);
                        var total = math + eng+sci;
                        var marks = 20;
                        var status = "";
                        if(math >= marks && eng >= marks && sci >= marks )
                        {
                             status = "Pass";
                        }
                        else{
                            status="Fail";
                        }
                       return(
                        <tbody>
                                 
                                       
                      
                        <td>
                        {studentname}
                        </td>
                        <td>
                            {studentRoll}
                        </td>
                        <td>
                            {total}
                        </td>
                        <td>
                            {status}
                        </td>
                          
                        </tbody>
                       )
                    } )
                   
                }
                                   
                               </table>
                              
              
                </div>

        )

        }
}


export { Abhinay }; 