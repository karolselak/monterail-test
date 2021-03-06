import React from "react";
import Header from './Header';
import { setProfile, setQuestion, showNextPage } from "../actions";

export default class QuestionList extends React.Component {
  goToProfile(pid) {
    setProfile(this.props.dispatch, pid, true);
  }
  goToQuestion(qid) {
    setQuestion(this.props.dispatch, qid, true);
  }
  loadMoreQuestions() {
    showNextPage(this.props.dispatch);
  }
  renderBody(q) {
    var arr = [];
    var comments = q.comments;
    comments = comments.slice(0,7);
    var l = comments.length;
    var hMany = l == 5 ? 5 : Math.min(4, comments.length);
    for (let i=0; i < hMany; i++) {
      arr.push(<div className='comment' key={'comm-'+i}>
        <div className="comment-avatar"
          style={{backgroundImage: `url(${comments[i].author.avatar})`}}
          onClick={this.goToProfile.bind(this, comments[i].author._id)} />
        <div className={"footer"+(comments[i].isAnswer ? ' answer' : '')}>
          <div className="footer-text">
            {comments[i].isAnswer ? 'answered' : 'commented'}
          </div>
          <div className="small-circle"/>
        </div>
      </div>)
    }
    var param = Math.min(6,l);
    return <div className="body">
      <div className={'more-activities param'+param} key='more'>
        <span className='more-5'>{l-4}</span>
        <span className='more-4'>{l-3}</span>
        <span className='more-3'>{l-2}</span>
        <span className='more-2'>{l-1}</span> more activities
        <div className="small-circle"/>
      </div>
      <div className={'comments param'+param}>
        {arr}
      </div>
      <div className="summary">
        <div>
          <span>{q.summary.relatedDiscussion}</span> related discussions
        </div>
        <div>
          <span>{q.summary.peersInvolved}</span> peers involved
        </div>
        <div>
          <span>{q.summary.conversations}</span> conversations
        </div>
      </div>
    </div>//[moreActivities].concat(arr.reverse());
  }
  renderQuestions() {
    return this.props.questionList.list.map((q,i)=>{
      return <div className="question" key={q._id}>
        <div className="background">
          <div className="avatar"
            style={{backgroundImage: `url(${q.author.avatar})`}}
            onClick={this.goToProfile.bind(this, q.author._id)} />
          <div className="question-header">
            <div className="author">
              <span onClick={this.goToProfile.bind(this, q.author._id)}>
                {q.author.name}
              </span>{q.connectedSource ? 'found on '+q.connectedSource : 'is asking'}:
            </div>
            <h2 onClick={this.goToQuestion.bind(this, q._id)}>
              {q.title}
            </h2>{/*TODO consider if making <a href> wouldn't be better*/}
          </div>
          <div className="footer">
            <div className="footer-text">{q.connectedSource ? 'found' : 'asked'}</div>
            <div className="small-circle"/>
          </div>
          {this.renderBody(q)}
        </div>
      </div>
    });
  }  
  render() {
    return (
      <div className="main-container">        
        <Header {...this.props} type='questions' />
        <div className="elem-container">
          {this.renderQuestions()}
          <div className="ending" key={'ending'}>
            <span onClick={this.loadMoreQuestions.bind(this)}>
              load more questions
            </span>
          </div>
        </div>
      </div>
    );
  }
}
