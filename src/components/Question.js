import React from "react";
import Header from './Header';
import Moment from "moment";

export default class Question extends React.Component {
  renderSubcomments(comment) {
    return comment.subcomments.map((com, i) => {
      var date = Moment(com.date).fromNow();
      return <div key={'comm_'+i} className="comment sub">
        <div className="indentation"/>
        <div className="avatar-container">
          <div className="avatar" style={{backgroundImage: `url(${com.author.avatar})`}}/>
        </div>
        <div className="comment-container">
          <div className="content">
            <div className="author">
              <span>{com.author.name}</span> commented it <b>&#183;</b> <span className="date">{date}</span>
            </div>
            <p>
              {com.content}
            </p>
          </div>
          {this.renderVotes(com.score)}
        </div>
      </div>
    })
  }
  renderComments() {
    return this.props.question.comments.map((com, i) => {
      var date = Moment(com.date).fromNow();
      return <div key={'comm_'+i} className="comment-body">
        <div className="comment">
          <div className="avatar-container">
            <div className="avatar" style={{backgroundImage: `url(${com.author.avatar})`}}/>
          </div>
          <div className="comment-container">
            <div className="content">
              <div className="author">
                <span>{com.author.name}</span> commented it <b>&#183;</b> <span className="date">{date}</span>
              </div>
              <p>
                {com.content}
              </p>
            </div>
            {this.renderVotes(com.score)}
          </div>
        </div>
        {this.renderSubcomments(com)}
        <button>{com.subcomments.length ? 'CONTINUE discussion' : 'COMMENT'}</button>
      </div>
    })
  }
  renderVotes(score) {
    if (score >= 0) {
      var votes = score;
      var voteText = 'upvotes';
    } else {
      var votes = -score;
      var voteText = 'downvotes';
    }
    return <div className="votes">
      <span>{votes}</span>{voteText}
      <div className="arrows">
        <div style={{backgroundImage: 'url(graphics/arrow-up.png)'}}/>
        <div style={{backgroundImage: 'url(graphics/arrow-down.png)'}}/>
      </div>
    </div>
  }
  render() {
    var q = this.props.question;
    return (
      <div className="main-container">
        <Header {...this.props} type='question' />
        <div className="elem-container">
          <div className="question single">
            <div className="background">
              <div className="avatar" style={{backgroundImage: `url(${q.author.avatar})`}}/>
              <div className="question-header">
                <div className="author">
                  <span>{q.author.name}</span>{q.connectedSource ? 'found on '+q.connectedSource : 'is asking'}:
                </div>
                <h2>{q.title}</h2>
              </div>
              <div className="footer">
              </div>
              <div className="body">
                <div className="content">
                  {q.content}
                </div>
                <span className="unfollow">unfollow</span>
                {this.renderVotes(q.score)}
              </div>
              <button>GIVE new answer</button>
            </div>
          </div>
          <div className="peers-answered">
            <span>{q.comments.length}</span>peers already answered {q.author.name}
          </div>
          {this.renderComments()}
        </div>
      </div>
    );
  }
}
