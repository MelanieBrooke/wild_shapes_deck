import React from 'react';
import ShapeDetails from './ShapeDetails.jsx';

const ShapeSeen = (props) => {

  return (<div>
    <li
      onClick={props.popupOpen}>{props.shape.animal}</li>
    {/* <button onClick={props.popupOpen}></button> */}
    {/* {<li> <ShapeDetails shape={props.shape} /></li>} */}
  </div>)
};

export default ShapeSeen;