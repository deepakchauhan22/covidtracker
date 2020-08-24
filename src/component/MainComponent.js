import React from 'react';

import { GetRequest }  from './GetRequest';
import Facts  from  './Facts';
import Header from './Header';
import Footer from './Footer';
import Symptoms from './Symptoms'
import Prevention from './Prevention'
import { GetRequestHooks }  from './GetRequestHooks';

import { GetRequestAsyncAwait }  from './GetRequestAsyncAwait';
import { GetRequestErrorHandling }  from './GetRequestErrorHandling';
import { GetRequestSetHeaders }  from './GetRequestSetHeaders';
import {Switch,Route, Redirect,BrowserRouter} from 'react-router-dom';

class Main extends React.Component {
    render() {
        return (
            <div className="wrapper">
                
                <Header />
        
                <Switch> 

                <Route path="/home" component={GetRequest} />
                <Route path="/about" component={Facts} />
                <Route path="/symptoms" component={Symptoms}  />
                <Route path="/prevention" component = {Prevention} />

                   <Redirect to = "/home" />
                </Switch>    
              
            </div>
        );
    }
}

export default Main ; 