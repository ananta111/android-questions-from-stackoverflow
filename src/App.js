import React, {Component} from 'react';
import MenuBar from "./components/MenuBar";
import {Route, BrowserRouter} from "react-router-dom"
import Results from "./components/Results";
class App extends React.Component {



  render() {
    return (
        <div>
          <MenuBar/>
          <BrowserRouter>
              <Route path="/" component={Results} />
          </BrowserRouter>
        </div>
    )
  }
}

export default App;
