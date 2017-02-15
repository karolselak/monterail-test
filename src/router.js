import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import { history } from "./store.js";
import App from "./components/App";
import Profile from "./components/Profile";
import Question from "./components/Question";
import QuestionList from "./components/QuestionList";
import NotFound from "./components/NotFound";
import { setQuestionList, setProfile, setQuestion } from "./actions";

const onEnterMain = store => {
  return (args) => {
    var qs = args.location.query;
    setQuestionList(store.dispatch, qs.query, qs.pages, store.getState().questionList.sortBy);
    setProfile(store.dispatch, qs.pid);
  }
}

const onEnterQuestion = store => {
  return (args) => {
    var qs = args.location.query;
    setQuestion(store.dispatch, qs.qid);
    setProfile(store.dispatch, qs.pid);
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

export default router;
