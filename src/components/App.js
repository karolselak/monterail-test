import React from "react";
import "../stylesheets/main.scss";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setQuestionList, setProfile, unsetProfile } from '../actions';

class App extends React.Component {
  render() {
    var props = Object.assign({}, this.props);
    delete props.main;
    delete props.modal;
    return <div>
      {React.cloneElement(this.props.main, {...props})}
      {React.cloneElement(this.props.modal, {...props})}
    </div>;
  }
}
const mapStateToProps = state => {
  return { ...state };
};
const mapDispatchToProps = dispatch => {
  debugger
  return bindActionCreators({ setQuestionList, setProfile, unsetProfile }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
