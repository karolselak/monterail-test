import React from "react";
import classNames from "classnames";
import Header from './Header';

export default class QuestionList extends React.Component {
  renderComments() {
    return null;
  }
  renderQuestions() {
    return this.props.questionList.list.map((q,i)=>{
      return <div className="question" key={q._id}>
        <div className="background">
          <div className="avatar" style={{backgroundImage: `url(${q.author.avatar})`}}/>
          <div className="question-header">
            <div className="author">
              <span>{q.author.name}</span>{q.connectedSource ? 'found on '+q.connectedSource : 'is asking'}:
            </div>
            <h2>
              {q.title}
            </h2>
          </div>
          <div className="footer">
            <div>{q.connectedSource ? 'found' : 'asked'}</div>
          </div>
          <div className="body">
            {this.renderComments()}
          </div>
        </div>
        <div className="summary">
          <div>
            <span>{q.summary.relatedDiscussion}</span> related discussion
          </div>
          <div>
            <span>{q.summary.peersInvolved}</span> peers involved
          </div>
          <div>
            <span>{q.summary.conversations}</span> conversations
          </div>
        </div>
      </div>
    });
  }  
  render() {
  console.log(this.props.questionList.list)
    return (
      <div className="main-container">        
        <Header {...this.props} />
        <div className="elem-container">
          {this.renderQuestions()}
          <div className="ending" key={'ending'}>
            <span>load more questions</span>
          </div>
        </div>
      </div>
    );
  }
}
