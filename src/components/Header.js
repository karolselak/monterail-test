import React from "react";
import Moment from "moment";

export default class Header extends React.Component {
  renderSorting() {
    var recentClass = this.props.questionList.sortBy == 'recent' ? 'active' : 'passive';
    var hotClass = this.props.questionList.sortBy == 'hot' ? 'active' : 'passive';
    return <div className="sorting">
      Sort by: <span className={recentClass}>recent</span> or <span className={hotClass}>hot</span>
    </div>
  }
  renderLastDiscussed() {
    var discussed = Moment(this.props.question.lastTimeDiscussed).fromNow();
    return <div className="last-discussed">
      Last time discussed {discussed}
    </div>//TODO number in date in <span>
  }
  renderFilter() {
    var myShelfClass = this.props.questionList.filter == 'myShelf' ? '' : 'invisible';
    var allQuestionsClass = this.props.questionList.filter == 'allQuestions' ? '' : 'invisible';
    return <div className="filter">
      <span className="option">
        <span className="circle">
          <span className={myShelfClass}/>
        </span>
        <span className="text">My shelf</span> 
      </span>
      <span className="option">
        <span className="circle">
          <span className={allQuestionsClass}/>
        </span>
        <span className="text">All questions</span>
      </span>
    </div>
  }
  renderMain() {
    var title;
    if (this.props.type == 'questions') {
      title = 'questions';
    } else if (this.props.type == 'question') {
      title = 'question';
    }
    return <div className="header-main">
      <div className="left-part">
        <div className="title">
          <h2>{title}</h2>
          <div className="plus-icon" style={{backgroundImage: "url('graphics/plus-icon.png')"}}/>
        </div>
        {this.props.type == 'questions' ? this.renderFilter() : null}
      </div>
      {this.props.type == 'questions' ? this.renderSorting() : null }
      {this.props.type == 'question' ? this.renderLastDiscussed() : null }
    </div>
  }
  renderSearch() {
    return <div className="search">
      <input placeholder="Search questions" defaultValue={this.props.location.query.query} />
      <button>search</button>
    </div>
  }
  render() {
    return (
      <div className="header">
        <div className="back-icon" style={{backgroundImage: "url('graphics/back-icon.png')"}}/>
        <div className="back-icon-small" style={{backgroundImage: "url('graphics/back-icon-small.png')"}}/>
        <div className="header-center">
          {this.renderMain()}
          {this.props.type == 'questions' ? this.renderSearch() : null}
        </div>
      </div>
    );
  }
}


