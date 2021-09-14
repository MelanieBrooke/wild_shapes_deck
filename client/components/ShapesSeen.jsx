import React from 'react';
import ShapeAvailable from './ShapeAvailable.jsx';

const ShapesSeen = () => {
  // show names only, click on names to see stats
  return(
    <div>
      <h2>Available Shapes</h2>
      <ul>{props.availableShapes.map(shape =>
        <ShapeAvailable shape={shape} />
      )}</ul>
    </div>
  )
}


// const Hand = (props) => {
//   return (
//     <div className={style.development}>
//       <h3>Development Cards: {props.cards.length}</h3>
//       {/* {props.cards} */}
//       <ul>{props.cards.map(card =>
//         <DisplayHand card={card} discard={props.discard}/>
//       )}</ul>
//     </div>
//   );
// }