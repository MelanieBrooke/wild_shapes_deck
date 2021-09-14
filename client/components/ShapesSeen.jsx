import React from 'react';
// import ShapeAvailable from './ShapeAvailable.jsx';
import ShapeSeen from './ShapeSeen.jsx';

const ShapesSeen = (props) => {
  // show names only, click on names to see stats
  return(
    <div>
      <h2>Available Shapes</h2>
      <ul>{props.availableShapes.map(shape =>
        <ShapeSeen shape={shape} />
      )}</ul>
      <h2>Seen Shapes</h2>
      <ul>{props.seenShapes.map(shape =>
        <ShapeSeen shape={shape} />
      )}</ul>
    </div>
  )
}

export default ShapesSeen;
