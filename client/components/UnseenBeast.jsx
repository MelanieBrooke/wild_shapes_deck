import React from 'react';
import $ from 'jquery';

// remember to send the seenBeast function through the props chain
// use this when rendering a list of unseen beasts

const UnseenBeast = (props) => {
  var seenClick = () => {
    props.seenBeast(props.beastName);
    alert(props.beastName + ' added to your shapes!');
  }

  return (
    <div>
      <td>{props.beastName}</td>
      <td><button onClick={seenClick}>Seen</button></td>
    </div>
  )
}