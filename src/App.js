import React, {Component} from 'react';
import MenuBar from "./components/MenuBar";
import {Route, BrowserRouter} from "react-router-dom"
import MostRecent from "./components/MostRecent";
import MostVoted from "./components/MostVoted";
import HomePage from "./components/HomePage";
class App extends React.Component {



  render() {
    return (
        <div>
          <MenuBar/>
          <BrowserRouter>
              <Route exact path="/" component={HomePage} />
              <Route path="/top-ten-recent" component={MostRecent} />
              <Route path="/top-ten-voted" component={MostVoted} />
          </BrowserRouter>
        </div>
    )
  }
}

export default App;
