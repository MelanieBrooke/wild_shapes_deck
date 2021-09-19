import React from 'react';
import $ from 'jquery';

// remember to send the seenBeast function through the props chain
// use this when rendering a list of unseen beasts

const UnseenBeast = (props) => {
  var seenClick = () => {
    props.seenBeast(props.beast.animal);
    alert(props.beast.animal + ' added to your shapes!');
  }

  return (
      <li>{props.beast.animal}
      <button onClick={seenClick}>Seen</button></li>
  )
}

export default UnseenBeast;