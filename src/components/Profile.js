import React from "react";

export default class Profile extends React.Component {
  render() {
    if (!this.props.location.query.pid) {
      return null;
    }
    return (
      <div>
        <h4>Profile here</h4>
      </div>
    );
  }
}
