"use client"

import React, { Component } from 'react';
import './error418.css';

class ErrorButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
    };
  }

  handleClick = () => {
    this.setState({ showPopup: true });
  };

  handleClosePopup = () => {
    this.setState({ showPopup: false });
  };

  render() {
    return (
      <div>
        <button className="error-button" onClick={this.handleClick}>
          Free Coffee
        </button>
        {this.state.showPopup && (
          <div className="popup">
            <div className="popup-content">
              <p>Error 418 </p>
              <p>я -- чайник</p>
              <button className="close-button" onClick={this.handleClosePopup}>
                я не чайник
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ErrorButton;