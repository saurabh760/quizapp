import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import HomePage from "./Containers/Pages/HomePage";
import DeskBoard from "./Containers/Pages/DeskBoard";
import ProfilePage from "./Containers/Pages/ProfilePage";
import CreateQuizPage from "./Containers/Pages/CreateQuizPage";
import RegestrationPage from "./Containers/Pages/RegestrationPage";
import { useEffect } from "react";
import LoginPage from "./Containers/Pages/LoginPage";
import Logout from "./Containers/Pages/Logout";
import QuizAttemp from "./Containers/Pages/QuizAttempPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={RegestrationPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/deskboard" component={DeskBoard} />
          <Route exact path="/QuizAttemp" component={QuizAttemp} />
          <Route exact path="/profile" component={ProfilePage} />
          <Route exact path="/add-Quiz" component={CreateQuizPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
