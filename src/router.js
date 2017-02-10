import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import { history } from "./store.js";
import App from "./components/App";
import Profile from "./components/Profile";
import Question from "./components/Question";
import QuestionList from "./components/QuestionList";
import NotFound from "./components/NotFound";
import { setQuestionList } from "./actions";

const onEnterMain = store => {
  return (args) => {
    var qs = args.location.query;
    setQuestionList(qs.query, qs.pages, qs.pid)(store.dispatch, store.getState);
  }
}

const onEnterQuestion = store => {
  return (args) => {
    var qs = args.location.query;
//    setQuestionList(qs.qid, qs.pages, qs.pid)(store.dispatch, store.getState);
  }
}

const router = (store) => {
  return <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <Route component={App}>
      <Route path="/" onEnter={onEnterMain(store)} components={{main: QuestionList, modal: Profile}} />
      <Route path="/main" onEnter={onEnterMain(store)} components={{main: QuestionList, modal: Profile}} />
      <Route path="/question" onEnter={onEnterQuestion(store)} components={{main: Question, modal: Profile}} />
      <Route path="*" components={{main: NotFound}}/>
    </Route>
  </Router>
};

export { router };
