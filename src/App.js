import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';


import Header from "./snippets/Header/Header";
import Footer from "./snippets/Footer/Footer";
import Homepage from "./components/Index/Homepage";
import NotFound from "./components/NotFound/NotFound";



class App extends Component {

    render() {
    return (
        <Router>
            <Switch>
                <div>
                  <Header />
                  <Route exact path="/" component={Homepage} />
                  {/*<Route component={NotFound} />*/}
                  <Footer/>
                </div>
            </Switch>
        </Router>

    );
  }
}


export default  App;
