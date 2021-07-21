import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import StartingPage from "./Containers/Pages/StartingPage";
import HomePage from "./Containers/Pages/HomePage";
import DeskBoard from "./Containers/Pages/DeskBoard";
import ProfilePage from "./Containers/Pages/ProfilePage";
import CreateQuizPage from "./Containers/Pages/CreateQuizPage";
import RegestrationPage from "./Containers/Pages/RegestrationPage";
import LoginPage from "./Containers/Pages/LoginPage";
import Logout from "./Containers/Pages/Logout";
import QuizAttemp from "./Containers/Pages/QuizPage";
import ResultPage from "./Containers/Pages/ResultPage"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* <Route exact path="/start" component={StartingPage} /> */}
          <Route exact path="/" component={RegestrationPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/deskboard" component={DeskBoard} />
          <Route exact path="/profile" component={ProfilePage} />
          <Route exact path="/add-Quiz" component={CreateQuizPage} />
          <Route exact path="/:quizname" component={QuizAttemp} />
          <Route exact path="/:quizname/result" component={ResultPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
