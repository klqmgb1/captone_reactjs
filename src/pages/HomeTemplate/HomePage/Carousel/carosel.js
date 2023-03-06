import React, { Component } from 'react'
export default class Carousel extends Component {
  render() {
    return (
      <div id="carousel">
        <div classname="carousel__content">
          <p>WELCOME TO MEIPALY AGENCY</p>
          <h1>
            SMART WEB <br />
            DESIGN AGENCY
          </h1>
          <button>Read More</button>
          <div className="arrow_down">
            <i className="fa-solid fa-chevron-down" />
          </div>
        </div>
      </div>
    );
  }
}
