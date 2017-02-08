import {Profiles, Questions} from './dataCache';
import Mingo from 'mingo';

const setQuestionList = (query, pages=1, profile) => {
  const questionsPerPage = 3;

  return (dispatch, getState) => {
    if (getState().questionList.sortBy == 'recent') {
      var sortQuery = {date: -1};
    } else if (getState().questionList.sortBy == 'hot') {
      var sortQuery = {score: -1};
    }
    if (!query) {
      var q = {};
    } else {
      var regex = {$regex: new RegExp(query), $options: 'im'};
      var q = {
        $or: [{content: regex}, {title: regex}] //TODO searching in comments
      }
    }
    var list = Mingo.aggregate(Questions, [
      {$match: q},
      {$sort: sortQuery},
      {$limit: pages*questionsPerPage}
    ]);
    dispatch({
      type: 'SET_QUESTION_LIST',
      list
    })
  }
}

export { setQuestionList }
