import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import ProgressBarExample from "./components/progress-bar/example";
import { BrowserRouter as Router, Link, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <div className="app-content">
            <div className="app-links">
              <Link to="/progressbar">ProgressBar</Link>
            </div>
            <div className="app-content">
              <Switch>
                <ProgressBarExample />
              </Switch>
            </div>
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
