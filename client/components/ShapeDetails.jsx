import React from 'react';

const ShapeDetails = (props) => {
  console.log('props.shape.abilities in shape details', props.shape.abilities)
  // var formatText = (text, type) => {
  //   var formattedText = '';
  //   var sections = text.split('?');
  //   if (type === 'ability') {
  //     formattedText += sections[0].bold() + sections[1];
  //   }
  //   else if (type === 'action') {
  //     formattedText += sections[0].bold() + sections[1].italics() + '\n' + sections[2] + '\n' + sections[3].italics() + sections[4]
  //   }
  // }
  //// Use the above for reference only ////

  const FormatAbilities = (props) => {
    return (<li>
      <b>{props.ability[0]}</b>
      {props.ability[1]}
    </li>)
  }

  const FormatActions = (props) => {
    return (<li>
      <b>{props.action[0]}</b>
      <i>{props.action[1]}</i>
      <br></br>
      {props.action[2]}
      <br></br>
      <i>{props.action[3]}</i>
      {props.action[4]}
    </li>)
  }

  return(
    <div>
      <h3>{props.shape.animal}</h3>
      Challenge Rating: {props.shape.challengeRating}
      <ul>{props.shape.abilities.map(ability => <FormatAbilities ability={ability} />)}</ul>
      <ul>{props.shape.actions.map(action => <FormatActions action={action} />)}</ul>
      {/* <table>
        <tbody>
          <th>
            <td>Animal Shape</td>
          </th>
        </tbody>
      </table> */}

    </div>
  )
}

export default ShapeDetails;