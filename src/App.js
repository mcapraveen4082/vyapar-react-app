import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';


import Header from "./snippets/Header/Header";
import Footer from "./snippets/Footer/Footer";
import Homepage from "./components/Index/Homepage";



class App extends Component {

    render() {
    return (
        <Router>
            <div>
              <Header />
              <Route path="/" component={Homepage} />
              <Footer/>
            </div>
        </Router>

    );
  }
}


export default  App;
