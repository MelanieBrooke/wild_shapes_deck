import React from 'react';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // hardcoded for personal use
      characterName: 'Enoki',
      druidLevel: null,
      beasts: []
    }
  };

  componentDidMount() {
    this.getDruidLevel(this.state.characterName);
  }

  getDruidLevel(characterName) {
    $.ajax({
      url: 'http://localhost:2021/user',
      success: (data) => {
        this.setState({
          druidLevel: data[0].druidLevel
        });
      }
    });
  }

  seenBeast(beast) {
    $.ajax({
      type: 'PATCH',
      url: 'http://localhost:2021/shapes',
      success: (data) => {
        console.log(data);
      }
    });
  }

  formatBeastData() {
    // format beast data and add to state
  }

  render() {
    return(
      <div>
        Hello World
      </div>
    );
  }


}

export default App;


// sort beasts by seen: available, seen: not available, and not seen
// don't show not seen beasts, have an input or search bar to find and add a beast from the database
// if that beast isn't found, then have option to input a new beast to the database