import React from "react";

export default class Header extends React.Component {
  render() {
    var myShelfClass = this.props.questionList.filter == 'myShelf' ? '' : 'invisible';
    var allQuestionsClass = this.props.questionList.filter == 'allQuestions' ? '' : 'invisible';
    var recentClass = this.props.questionList.sortBy == 'recent' ? 'active' : 'passive';
    var hotClass = this.props.questionList.sortBy == 'hot' ? 'active' : 'passive';
    return (
      <div className="header">
        <div className="back-icon" style={{backgroundImage: "url('graphics/back-icon.png')"}}/>
        <div className="back-icon-small" style={{backgroundImage: "url('graphics/back-icon-small.png')"}}/>
        <div className="header-center">
          <div className="up-part">
            <div className="left-part">
              <div className="title">
                <h2>questions</h2>
                <div className="plus-icon" style={{backgroundImage: "url('graphics/plus-icon.png')"}}/>
              </div>
              <div className="filter">
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
            </div>
            <div className="right-part">
              Sort by: <span className={recentClass}>recent</span> or <span className={hotClass}>hot</span>
            </div>            
          </div>
          <div className="down-part">
            <input className="main-search" placeholder="Search questions" defaultValue={this.props.location.query.query} />
            <button>search</button>
          </div>
        </div>
      </div>
    );
  }
}


