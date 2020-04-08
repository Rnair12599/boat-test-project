import React, { Fragment, useState } from 'react';
import './GuestForm.css';

const GuestForm = (props) => {
    let [adultN, setAdultN] = useState(0);
    let [childrenN, setChildrenN] = useState(0);
    let [toddlerN, setToddlerN] = useState(0);

    let adultSub =  (e) => {
        if (adultN > 0) {
            setAdultN(adultN-1)
        }
    };

    let childrenSub =  (e) => {
        if (childrenN > 0) {
            setChildrenN(childrenN-1)
        }
    };

    let toddlerSub =  (e) => {
        if (toddlerN > 0) {
            setToddlerN(toddlerN-1)
        }
    };

    let handleDone= (e) => {
        props.guestString(adultN + ' adults, ' + childrenN + ' childrens, ' + toddlerN + ' toddlers');
    };

    let adjustA = (
        <span className="numbers">
            <span className="plusMinus" onClick={(e) => {setAdultN(adultN+1);}}>+</span>
                {adultN}
            <span className="plusMinus" onClick={(e) => {adultSub(e)}}>-</span>
        </span>

    );



    let adjustC = (
        <span className="numbers">
            <span className="plusMinus" onClick={(e) => {setChildrenN(childrenN+1);}}>+</span>
                {childrenN}
            <span className="plusMinus" onClick={(e) => {childrenSub(e)}}>-</span>
        </span>

    );

    let adjustT = (
        <span className="numbers">
            <span className="plusMinus" onClick={(e) => {setToddlerN(toddlerN+1);}}>+</span>
            {toddlerN}
            <span className="plusMinus" onClick={(e) => {toddlerSub(e)}}>-</span>
        </span>

    );

    let window = (
        <div className='guestpopup_inner'>
          <button className='closeGuest' onClick={props.isGuestClose}>&times; </button>
          <p className='guestFont'>Guest</p>
          <div className="guestType">
              Adults
              {adjustA}
          </div>
          <div className="guestType">
              Childrens<br/>(Age 4-12)
              {adjustC}
          </div>
          <div className="guestType">
              Childrens<br/>(Age 0-3)
              {adjustT}
          </div>
          <input className="guestSubmit" value="Done" onClick={handleDone}/>
        </div>
    );

    if (! props.isGuestOpen) {
        window = null;
    }
    return (
        <Fragment>{window}</Fragment>
            
    )
  }
 
  export { GuestForm };