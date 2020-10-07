import React  ,{ Component } from 'react';

class Footer extends Component{

    constructor(props){
        super(props);     
    }

  
    
    render(){
        return(
                 
               
        <>
         
        <div className="footer">
      
        <div className="aboutme">
           <p className= "name">A project by <a href="https://www.linkedin.com/in/deepakchauhan22/">Deepak Chauhan</a></p>
        
                  <div className="footer-bar">

                    <a href="https://www.linkedin.com/in/deepakchauhan22/" className="linkedin"><i className="fa fa-linkedin" aria-hidden="true"></i></a> 
                    <a href="https://github.com/deepakchauhan22" className="github"><i className="fa fa-github" aria-hidden="true"></i></a> 
                    <a href="https://www.facebook.com/Glassofchampagn" className="facebook"><i className="fa fa-facebook"></i></a> 
                    <a href="https://www.instagram.com/glassofchampagn/" className="instagram"><i className="fa fa-instagram" aria-hidden="true"></i></a> 
                    <a href="https://medium.com/@dee22" className="medium"><i className="fa fa-medium" aria-hidden="true"></i></a> 
                   
                    </div>
        </div>
         </div>
        </>
     

        );
    }
}
export default Footer;
