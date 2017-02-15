import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import update from 'react-addons-update';
//import { reducer as formReducer } from "redux-form";

const questionListReducer = (state = {list:[], filter: 'myShelf', sortBy: 'recent'}, action) => {
  switch (action.type) {
    case 'SET_QUESTION_LIST':
      return update(state, {list: {$set: action.list}})
    case 'SET_SORTING':
      return update(state, {sortBy: {$set: action.sortBy}});
    default:
      return state;
  }
}
const questionReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_QUESTION':
      return action.question || state;
    default:
      return state;
  }
}
const profileReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_PROFILE':
      return action.profile || state;
    case 'UNSET_PROFILE':
      return {};
    default:
      return state;
  }
}
export const reducers = combineReducers({
  routing: routerReducer,
  //form: formReducer,
  questionList: questionListReducer,
  question: questionReducer,
  profile: profileReducer
});
