import React from 'react';
// import ShapeAvailable from './ShapeAvailable.jsx';
import UnseenBeast from './UnseenBeast.jsx';

const UnseenBeasts = (props) => {
  // show names only, click on names to see stats
  return(
    <div>
      <h2>Unseen Beasts</h2>
      <ul>{props.beasts.map(beast =>
        <UnseenBeast beast={beast}
        seenBeast={props.seenBeast}/>
      )}</ul>
    </div>
  )
}

export default UnseenBeasts;