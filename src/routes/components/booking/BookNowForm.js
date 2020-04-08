import React, { Component, Fragment } from 'react';
import { GuestForm } from './GuestForm';
import './BookNowForm.css';
import CheckIcon from '../../../assets/checkMark.png';
import emailjs from 'emailjs-com';

class BookNowForm extends Component {
  state = {   
    submitted: false,
    guestFormOpened: false,
    fullName: '',
    guests: '',
    date: '',
    email: ''
  }  

  handleChange = (property) => {
    return e => {
      this.setState({
        [property]: e.target.value
      });
    };
  }

  handleInitialState = () => {
    const initialState = {
      guestFormOpened: false,
      fullName: '',
      guests: '',
      date: '',
      email: ''
    };
    return initialState;
  }

  handleResetState = () => {
    this.setState(this.handleInitialState());
  }

 
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      submitted: true,
    });
    const guestInfo = 'Name: ' + this.state.fullName + '\nDate: ' + this.state.date + '\nGuest: ' + 
    this.state.guests + '\nEmail: ' + this.state.email;
	  this.sendEmail({message_html: guestInfo, from_name: this.state.fullName, reply_to: this.state.email, test_date: this.state.date, test_guests: this.state.guests});
    this.props.submitted();
    
  }


  sendEmail = (variables) => {
    emailjs.send(
      'gmail', 'template_neaJBHhx',
      variables, "user_GHDRcgsYD7JAiwdDnR4fG"
      )
    }


  handleGuestFormOpen = () => {
    this.setState({
      guestFormOpened: true
    });
  }

  handleGuestFormClose = () => {
    this.setState({
      guestFormOpened: false
    });
  }

  setGuestString = (guestString) => {
    this.setState({guests: guestString});
    this.setState({
      guestFormOpened: false
    });
  }

  formComponent = (e) => {
    if (!this.state.submitted) {
      return (
      <form className="bookingForm">
        <p className="popupFont">Full Name</p>
        <input 
            className="myText__input fullName" 
            id = "name"
            type="text"
            value={this.state.fullName}
            onChange={this.handleChange('fullName')}
        /> 
        <p className="popupFont">Guests</p>
        <input 
            className="myText__input guests" 
            id ="guest"
            type="text"
            value={this.state.guests}
            onClick={this.handleGuestFormOpen}
            onChange={this.handleChange('guests')}
        /> 
        <p className="popupFont">Date</p>
        <input 
            className="myText__input date"
            id = "date" 
            type="date"
            value={this.state.date}
            onChange={this.handleChange('date')}
        /> 
        <p className="popupFont">Email</p>
        <input 
            className="myText__input email" 
            id = "email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange('email')}
        /> 
        <input className="myText__submit" value="Done" onClick={this.handleSubmit}/>
        <br />
       <GuestForm isGuestOpen={this.state.guestFormOpened} isGuestClose={this.handleGuestFormClose} guestString={this.setGuestString}></GuestForm>
       
      </form>
      )
      } else {
        return (
          <div className="bookingConfirm" id="bookingConfirm">
            <img className = "checkMark" alt="checkMark" src = {CheckIcon}/>            
            <p className='confirmMessage'>A confirmation will be sent to your email.<br/> Please allow 2-3 business days. </p>
            <p className='thankYou'>Thank you!</p>   
          </div>
        )
      }
    }
  
    render() {    
    return (
      <Fragment>
        {this.formComponent()}
      </Fragment>
    );
 }
}

export default BookNowForm;