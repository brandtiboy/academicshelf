import React from "react";
import { Switch, Route } from "react-router-dom";

// Importing pages and components
import HomePage from "./pages/homepage/homepage.component";
import Dashboard from "./pages/dashboard/dashboard.component";
import Courses from "./pages/dashboard/courses/courses.component";

import "./App.css";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/courses' component={Courses} />
      </Switch>
    </div>
  );
}

export default App;
