import React, { Component, Fragment } from 'react';
import './BookingPopup.css';
import BookNowForm from './BookNowForm';

class BookingPopup extends Component {

  state = {
    bgStyle: this.style1,
    buttonStyle: this.buttonStyle1
  }

  
  setSubmited = (e) => {
    this.setState({
      bgStyle: this.style2,
      buttonStyle: this.buttonStyle2
    });
  }

  style1 = {
    backgroundColor: 'rgb(1,90,77)'
  }
  style2 = {
    backgroundColor:'rgba(237,228,218, 0.80)',
    color: 'rgb(1,90,77)',
    width: '85%'
  }

  buttonStyle1 = {
      color:  'rgb(237,217,195)',
  }

  buttonStyle2 = {
    color:  'rgb(1,90,77)',

  }

  resetStyle = (e) => {
    this.setState({
      bgStyle: this.style1,
      buttonStyle: this.buttonStyle1
    });
    this.props.isClose();
  }

  render() {

    let window = (
      <div className='popup_inner' style={this.state.bgStyle}>
        <button className='close' onClick={this.resetStyle} style={this.state.buttonStyle}>&times; </button>
        <BookNowForm submitted={this.setSubmited}/>
      </div>
    );
    if (! this.props.isOpen) {
      window = null;
    }

    return (
      <Fragment>
        {window}
      </Fragment>
    );
 }
}

export default BookingPopup;