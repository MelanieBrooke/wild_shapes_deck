import React from 'react';
import ShapeDetails from './ShapeDetails.jsx';

const ShapeSeen = (props) => {

  return (<div>
    {/* <li>{props.shape.animal}</li> */}
    {<li> <ShapeDetails shape={props.shape} /></li>}
  </div>)
};

export default ShapeSeen;