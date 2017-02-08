import React from "react";

export default class QuestionList extends React.Component {
  render() {
    console.log(this.props.questionList.list)
    return (
      <div>
        <h4>Question list here</h4>
      </div>
    );
  }
}
