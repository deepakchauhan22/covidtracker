import React from 'react';

class SideMenu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            totalReactPackages: null,
            errorMessage: null
        };
    }

    componentDidMount() {
        // GET request using fetch with error handling
        fetch('https://api.npms.io/v2/invalid-url')
            .then(async response => {
                const data = await response.json();

                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response statusText
                    const error = (data && data.message) || response.statusText;
                    return Promise.reject(error);
                }

                this.setState({ totalReactPackages: data.total })
            })
            .catch(error => {
                this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });
    }

    render() {
        const { errorMessage } = this.state;
        return (
            <div className="icon-bar">
            <a href="#" className="facebook notifications" id="notificationLink"><i className="fa fa-bell" aria-hidden="true"></i><span id="notification_count">4</span>
            <div className="updatesnot" id="notificationContainer"> 
                   
                        <div className="update-contentnot">
                        <div id="notificationTitle">News Updates</div>
                           
                        <div id="notificationsBody" class="notifications">
                        <ul>
                            <li><a href="#"><i className="fa fa-globe"  aria-hidden="true"></i>Global confirmed cases: 18,295,434; total deaths: 694,233; total recovered: 10,926,704</a></li>
                            <li><a href="#"><i className="fa fa-user-md" aria-hidden="true"></i>Total Number of Tests Done in India:{this.props.tested} </a></li>
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
        </div>
        );
    }
}

export { SideMenu }; 