import React from "react";
import "../stylesheets/main.scss";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    var props = Object.assign({}, this.props);
    delete props.main;
    delete props.modal;
    return <div>
      {React.cloneElement(this.props.main, {...props})}
      {this.props.profile._id ? React.cloneElement(this.props.modal, {...props}) : null}
      {/*TODO clean this for potential other modals
       //TODO why profile donesn't render when 'forward' button clicked*/}
    </div>;
  }
}
const mapStateToProps = state => {
  return { ...state };
};

export default connect(mapStateToProps)(App);

