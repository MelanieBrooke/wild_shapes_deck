import React from 'react';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // hardcoded for personal use
      characterName: 'Enoki',
      druidLevel: null
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
    })
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