import {Profiles, Questions} from './dataCache';
import { push } from 'react-router-redux';
import Mingo from 'mingo';

const setQuestionList = (query, pages=1) => {
  const questionsPerPage = 3;

  return (dispatch, getState) => {
    if (getState().questionList.sortBy == 'recent') {
      var $sort = {date: -1};
    } else if (getState().questionList.sortBy == 'hot') {
      var $sort = {score: -1};
    }
    if (!query) {
      var $match = {};
    } else {
      var regex = {$regex: new RegExp(query), $options: 'im'};
      var $match = {
        $or: [{content: regex}, {title: regex}] //TODO searching in comments
      }
    }
    var list = Mingo.aggregate(Questions, [
      {$match},
      {$sort},
      {$limit: pages*questionsPerPage}
    ]);
    dispatch({
      type: 'SET_QUESTION_LIST',
      list
    })
  }
}
const setQuestion = (qid) => {
  return (dispatch, getState) => {
    var question = Mingo.aggregate(Questions,[{
      $match: {'_id': qid}
    }])[0];
    dispatch({
      type: 'SET_QUESTION',
      question
    })
  }
}
const setProfile = (pid) => {
  return (dispatch, getState) => {
    var profile = Mingo.aggregate(Profiles,[{
      $match: {'_id': pid}
    }])[0];
    dispatch({
      type: 'SET_PROFILE',
      profile
    })
  }
}
const unsetProfile = () => {
  return push('/main');//{type: 'SET_PROFILE'}
  /*return (dispatch, getState) => {
    console.log('asd')
    debugger
    dispatch({});
    //dispatch(push('/'+generatePath(getState().pathParams))); //set new URL
  }*/
}
export { setQuestionList, setProfile, unsetProfile, setQuestion }
