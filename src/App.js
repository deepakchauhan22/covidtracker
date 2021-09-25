import React, { Component } from 'react';
import Main from './component/MainComponent'; 
import {BrowserRouter, HashRouter} from 'react-router-dom';
import './App.css';


class App extends Component {
 
render (){
  return (
    <HashRouter>
    <div >       
      <Main/>
    </div>
    </HashRouter>
  );
}
}
export default App;
