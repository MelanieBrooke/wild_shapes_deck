import React from 'react';

const ShapeDetails = (props) => {
  console.log('props.shape.abilities in shape details', props.shape.abilities)
  var speed = props.shape.speed + ' ft.';
  if (props.shape.flySpeed) {
    speed += ', fly ' + props.shape.flySpeed + ' ft.';
  }
  if (props.shape.climbSpeed) {
    speed += ', climb ' + props.shape.climbSpeed + ' ft.';
  }
  if (props.shape.swimSpeed) {
    speed += ', swim ' + props.shape.swimSpeed + ' ft.';
  }
  var skills = '---';
  if (props.shape.skills) {
    skills = props.shape.skills;
  }
  var challenge = '0';
  if (props.shape.challengeRating === 0.25) {
    challenge = '1/4';
  } else if (props.shape.challengeRating === 0.5) {
    challenge = '1/2';
  } else if (props.shape.challengeRating === 1.0) {
    challenge = '1';
  }

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
      <i>{props.shape.size} beast</i><br></br><hr></hr>
      <b>Armor Class</b> {props.shape.armorClass}<br></br>
      <b>Hit Points</b> {props.shape.hitPoints}<br></br>
      <b>Speed</b> {speed}<hr></hr>
      <table>
        <tbody>
          <tr>
            <th>STR</th><th>DEX</th><th>CON</th>
            <th>INT</th><th>WIS</th><th>CHA</th>
          </tr>
          <tr>
            <td>{props.shape.strength}</td>
            <td>{props.shape.dexterity}</td>
            <td>{props.shape.constitution}</td>
            <td>{props.shape.intelligence}</td>
            <td>{props.shape.wisdom}</td>
            <td>{props.shape.charisma}</td>
          </tr>
        </tbody>
      </table>
      <hr></hr>
      <b>Skills</b> {skills}<br></br>
      <b>Senses</b> {props.shape.senses}<br></br>
      <b>Challenge</b> {challenge}<hr></hr>
      <ul>{props.shape.abilities.map(ability => <FormatAbilities ability={ability} />)}</ul>
      <h4>Actions</h4>
      <ul>{props.shape.actions.map(action => <FormatActions action={action} />)}</ul>
    </div>
  )
}

export default ShapeDetails;