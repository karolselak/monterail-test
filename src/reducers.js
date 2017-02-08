import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import update from 'react-addons-update';
//import { reducer as formReducer } from "redux-form";

const questionListReducer = (state = {list:[], mode: 'myShelf', sortBy: 'recent'}, action) => {
  switch (action.type) {
    case 'SET_QUESTION_LIST':
      return update(state, {list: {$set: action.list}})
    default:
      return state;
  }
}
const questionReducer = (state = {}, action) => {
  return state;
}
const profileReducer = (state = {}, action) => {
  return state;
}
export const reducers = combineReducers({
  routing: routerReducer,
  //form: formReducer,
  questionList: questionListReducer,
  question: questionReducer,
  profile: profileReducer
});
