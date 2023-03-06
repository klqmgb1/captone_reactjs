import React, { Component } from 'react'

export default class Logo extends Component {
  render() {
    const { listlogo } = this.props;
    return (
      <div className="row py-4 container justify-content-center">
        <div className="left-content  mx-5">
          <img src={listlogo.logo} alt="" style={{ width: 50 }} />
        </div>
    </div>
    )
  }
}
