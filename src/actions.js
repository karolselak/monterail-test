import {Profiles, Questions} from './dataCache';
import { push } from 'react-router-redux';
import Mingo from 'mingo';

function decodeQueryData(string) {
  let arr = string.split('&');
  let ret = {};
  for (let i in arr) {
    let d = arr[i].split('=');
    ret[d[0]] = d[1];
  }
  return ret;
}
function encodeQueryData(data) {
  let ret = [];
  for (let d in data)
    ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
  return ret.join('&');
}

const setQuestionList = (dispatch, query, pages=1, sortBy) => {
  //TODO consider if 'pages' attribute in url is a good idea
  const questionsPerPage = 3;
  if (sortBy == 'recent') {
    var $sort = {date: -1};
  } else if (sortBy == 'hot') {
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
const setQuestion = (dispatch, qid, ifUrl) => {
  var question = Mingo.aggregate(Questions,[{
    $match: {'_id': qid}
  }])[0];
  dispatch({
    type: 'SET_QUESTION',
    question
  })
  if (ifUrl) {
    dispatch(push('/question?qid='+qid));
  }
}
const setProfile = (dispatch, pid, ifUrl) => {
  var profile = Mingo.aggregate(Profiles,[{
    $match: {'_id': pid}
  }])[0];
  dispatch({
    type: 'SET_PROFILE',
    profile
  })
  if (ifUrl) {
    var urlData = decodeQueryData(window.location.search.slice(1))
    urlData.pid = pid;
    var path = window.location.pathname + '?' + encodeQueryData(urlData);
    dispatch(push(path));
  }
}
const setQuery = (dispatch, query) => {
  var urlData = decodeQueryData(window.location.search.slice(1))
  urlData.query = query;
  delete urlData.pages;
  var path = window.location.pathname + '?' + encodeQueryData(urlData);
  dispatch(push(path));
  setQuestionList(dispatch, urlData.query); //TODO do it cleaner, with 'sortBy' support
}
const showNextPage = (dispatch) => {
  var urlData = decodeQueryData(window.location.search.slice(1))
  if (urlData.pages) {
    urlData.pages++;
  } else {
    urlData.pages = 2;
  }
  var path = window.location.pathname + '?' + encodeQueryData(urlData);
  dispatch(push(path));
  setQuestionList(dispatch, urlData.query, urlData.pages); //TODO do it cleaner, with 'sortBy' support
}
const unsetProfile = (dispatch) => {
  var urlData = decodeQueryData(window.location.search.slice(1))
  delete urlData.pid;
  var path = window.location.pathname + '?' + encodeQueryData(urlData);
  dispatch({
    type: 'UNSET_PROFILE'
  });
  dispatch(push(path));
}
const setSorting = (dispatch, sortBy) => {
  dispatch({
    type: 'SET_SORTING',
    sortBy
  });
  var urlData = decodeQueryData(window.location.search.slice(1))
  setQuestionList(dispatch, urlData.query, urlData.pages, sortBy); //TODO do it cleaner
}
export { setQuestionList, setProfile, unsetProfile, setQuestion, showNextPage, setQuery, setSorting }
