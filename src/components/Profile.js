import React from "react";

export default class Profile extends React.Component {
  componentDidMount() {
    this.$m = $(this.refs.modal);
    this.$m.modal('show');
  }
  render() {
    if (!this.props.location.query.pid) {
      return null;
    }
    return <div className='modal fade' id='mainModal' ref='modal'  role='dialog' aria-labelledby='myModalLabel' aria-hidden='true'>
      <div className='modal-dialog' role='document'>
        <div className='modal-content loginModal'>
          <div className='modal-header login_modal_header'>
          </div>
          <div className='modal-body login-modal'>

          </div>
        </div>
      </div>
    </div>
  }
}
