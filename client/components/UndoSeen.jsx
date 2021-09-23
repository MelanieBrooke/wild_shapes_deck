import React from 'react';

const UndoSeen = (props) => {
  return (
    <div>
      <h4>Development Mode: Revert Beast to Unseen</h4>
      <ul>{props.beasts.map(beast => { return <li onClick={props.undoSeenBeast}>{beast.animal}</li>})}</ul>
    </div>
  )
}

export default UndoSeen;