import React from 'react';

const ShapeDetails = (props) => {
  var formatText = (text, type) => {
    var formattedText = '';
    var sections = text.split('?');
    if (type === 'ability') {
      formattedText += sections[0].bold() + sections[1];
    }
    else if (type === 'action') {
      formattedText += sections[0].bold() + sections[1].italics() + '\n' + sections[2] + '\n' + sections[3].italics() + sections[4]
    }
  }

  return(
    <div>
      <h3>{props.shape.animal}</h3>
      Challenge Rating: {props.shape.challengeRating}
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