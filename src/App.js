import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// Importing pages and components
import HomePage from "./pages/homepage/homepage.component";
//import Dashboard from "./pages/dashboard/dashboard.component";
import Courses from "./pages/dashboard/courses/courses.component";
import Discover from "./pages/dashboard/discover/discover.component";
import { auth } from "./firebase/firebase.utils";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={HomePage}>
            {!this.state.currentUser ? null : <Redirect push to='/discover' />}
          </Route>

          <Route
            currentUser={this.state.currentUser}
            path='/courses'
            component={Courses}
          />
          <Route
            currentUser={this.state.currentUser}
            path='/discover'
            component={Discover}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
