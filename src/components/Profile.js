import React from "react";
import Moment from "moment";
import { unsetProfile, setProfile } from "../actions";

export default class Profile extends React.Component {
  onHide() {
    unsetProfile(this.props.dispatch);
  }
  componentDidMount() {
    this.$m = $(this.refs.modal);
    this.$m.modal('show');
    this.$m.on('hide.bs.modal', this.onHide.bind(this));
  }
  renderActLevel() {
    var arr = [];
    for (let i=0; i < 3; i++) {
      var color = i < this.props.profile.activityLevel ? 'color' : 'gray';
      arr.push(<div className="bdg" key={'badge'+i} style={{backgroundImage: `url(/graphics/badge-${color}.png)`}}/>);
    }
    return arr;
  }
  renderProfiles() {
    return this.props.profile.joinedTheSameTime.map((el)=>{
      return <div className="joined-profile" key={el._id} style={{backgroundImage: 'url(graphics/pattern.png)'}}>
        <div className="joined-avatar" style={{backgroundImage: `url(${el.avatar})`}}/>
        <div className="joined-name"><span>{el.name}</span></div>
      </div>
    })
  }
  render() {
    /*if (!this.props.location.query.pid || !this.props.profile._id) {
      return null;
    }*/
    Moment.updateLocale('en', {
      relativeTime: {
        past: "%s",
      }
    });
    var memberFor = Moment(this.props.profile.registerDate).fromNow();
    Moment.updateLocale('en', {
      relativeTime: {
        past: "%s ago",
      }
    });
    var haveBeenThese = Moment(this.props.profile.registerDate).fromNow();
    var lastSeen = Moment(this.props.profile.lastLoginDate).fromNow(); //TODO humanize it ("Saturday afternoon" etc.)
    var disc = this.props.profile.hottestDiscussionTheseDays;
    return <div className='modal fade' ref='modal' role='dialog' aria-labelledby='myModalLabel' aria-hidden='true'>
      <div className='modal-dialog profile-modal' role='document'>
        <div className='modal-header '>
          <button type='button' className='close' data-dismiss='modal' aria-hidden='true'>&times;</button>
        </div>
        <div className='modal-content '>
          <div className='modal-body'>
            <div className="profile-header">
              <div className="avatar" style={{backgroundImage: `url(${this.props.profile.avatar})`}}/>
              <div className="nickname">{this.props.profile.name}</div>
              <div className="basic-info">
                <div>
                  <span className="text1">member for</span>
                  <span className="text2">{memberFor}</span>
                </div>
                <div>
                  <span className="text1">last seen</span>
                  <span className="text2">{lastSeen}</span>
                </div>
                <div>
                  <span className="text1">activity level</span>
                  <span className="badges">{this.renderActLevel()}</span>
                </div>
              </div>
            </div>
            <div className="advanced-info">
              <div className="lower-header">
                <button className="back-button" style={{backgroundImage: 'url(graphics/profile-back.png)'}}/>
                  <h1>How it all started</h1>
                <button className="forward-button" style={{backgroundImage: 'url(graphics/profile-forward.png)'}}/>
              </div>
              <span>That's where we have been these {haveBeenThese}</span>
              <div className="summary">
                <div>
                  <div className="peers"/>
                  <span className="number">{this.props.profile.summary.peers}</span>
                  <span>peers</span>
                </div>
                <div>
                  <div className="discussions"/>
                  <span className="number">{this.props.profile.summary.discussions}</span>
                  <span>discussions</span>
                </div>
                <div>
                  <div className="findings"/>
                  <span className="number">{this.props.profile.summary.findings}</span>
                  <span>findings</span>
                </div>
                <div>
                  <div className="questions"/>
                  <span className="number">{this.props.profile.summary.questions}</span>
                  <span>questions</span>
                </div>  
              </div>
              <span>Who joined the platform that same period</span>
              <div className="profiles">
                {this.renderProfiles()}
              </div>
              <span>The hottest discussion these days</span>
            </div>
          </div>
          <div className="discussion" style={{backgroundImage: 'url(graphics/pattern.png)'}}>
            <div className="discussion-avatar"
              style={{backgroundImage: `url(${disc.author.avatar})`}}/>
            <div className="discussion-author">
              <span>{disc.author.name}</span>
              {disc.connectedSource ? `found the ${disc.connectedSource} article` : 'asked'}
            </div>
            <h2>{disc.title}</h2>
            <div className="discussion-summary">
              <div>
                <span>{disc.summary.peersInvolved}</span> peers involved
              </div>
              <div>
                <span>{disc.summary.relatedDiscussion}</span> related discussions
              </div>
              <div>
                <span>{disc.summary.conversations}</span> conversations
              </div>
              <div>
                <span>{disc.score}</span>upvotes
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}
