import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import { history } from "./store.js";
import App from "./components/App";
import Profile from "./components/Profile";
import Question from "./components/Question";
import QuestionList from "./components/QuestionList";
import NotFound from "./components/NotFound";

const router = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <Route component={App}>
      <Route path="/" components={{main: QuestionList, modal: Profile}} />
      <Route path="/main/:query/:page/profile/:pid" components={{main: QuestionList, modal: Profile}} />
      <Route path="/question/:qid/:page/profile/:pid" components={{main: Question, modal: Profile}} />
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
);

export { router };
