import React from 'react';
import popup from './popup.modules.css';
import ShapeDetails from './ShapeDetails.jsx';

const Popup = (props) => {
  if (props.popup === false) {
    return (<div></div>)
  } else {
    return (
      <div className={popup.bg}>
        <div className={popup.content_box}>
        <span class={popup.close} onClick={props.popupClose}>&times;</span>
          <ShapeDetails shape={props.shape} />
        </div>
      </div>
    )
  }
}

export default Popup;