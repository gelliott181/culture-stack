import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UploadForm from "./pages/UploadForm";
import CreatePost from "./pages/CreatePost";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/upload" component={UploadForm} />
            <Route exact path="/create" component={CreatePost} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
