import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LazyRoute from "../lazyRoute/LazyRoute";
import "./App.scss";
// Main Pages/Components
import AppNavigation from "../appNavigation/AppNavigation";
import Home from "../home/Home";
import FourOhFour from "../fourOhFour/FourOhFour";
// Assignments
import AssignmentOne from "../assignmentOne/AssignmentOne";
import AssignmentTwo from "../assignmentTwo/AssignmentTwo";
// import AssignmentThree from "../assignmentThree/AssignmentThree";
// import AssignmentFour from "../assignmentFour/AssignmentFour";

// Lazy Imports for our Bigger Components
const AssignmentThree = React.lazy(() =>
  import("../assignmentThree/AssignmentThree")
);
const AssignmentFour = React.lazy(() =>
  import("../assignmentFour/AssignmentFour")
);

export default function App() {
  return (
    // <Router basename="/myapp">
    <Router>
      <div className="App">
        <AppNavigation />
        <div className="page-content">
          <Switch>
            <Route exact path="/assignment1" component={AssignmentOne} />
            <Route exact path="/assignment2" component={AssignmentTwo} />
            <LazyRoute exact path="/assignment3" component={AssignmentThree} />
            <LazyRoute exact path="/assignment4" component={AssignmentFour} />
            <Route exact path="/" component={Home} />
            <Route component={FourOhFour} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}
