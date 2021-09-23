import React from 'react';
import $ from 'jquery';
import ShapesSeen from './ShapesSeen.jsx';
import UnseenBeasts from './UnseenBeasts.jsx';
import Popup from './Popup.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // hardcoded for personal use
      characterName: 'Enoki',
      druidLevel: null,
      beasts: {
        available: [],
        seen: [],
        unseen: []
      },
      popup: false,
      currentShape: null
    }
    this.seenBeast = this.seenBeast.bind(this);
    this.popupOpen = this.popupOpen.bind(this);
    this.popupClose = this.popupClose.bind(this);
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
        this.getShapes();
      }
    });
  }

  seenBeast(beast) {
    // shift 'seen' to true
    $.ajax({
      type: 'PATCH',
      url: 'http://localhost:2021/shapes',
      data: {beast:beast},
      success: (data) => {
        console.log(data);
      }
    });
  }

  undoSeenBeast(beast) {
    $.ajax({
      type: 'PATCH',
      url: 'http://localhost:2021/undo',
      data: {beast:beast},
      success: (data) => {
        console.log(data);
      }
    });
  }

  getShapes() {
    $.ajax({
      url: 'http://localhost:2021/shapes',
      success: (data) => {
        console.log(data);
        for (var i = 0; i < data.length; i++) {
          this.sortAbilitiesAndActions(data[i]);
          this.sortBeastData(data[i]);
        }
        this.setState({
          beasts: this.state.beasts
        });

      }
    });
  }

  findBeast(beast) {
    console.log(beast);
    if (this.state.beasts.available.find( x => {return x.animal === beast})) {
      return this.state.beasts.available.find( x => {return x.animal === beast});
    } else {
      return this.state.beasts.seen.find( x => {return x.animal === beast})
    }
  }

  popupOpen(e) {
    e.preventDefault();
    var beast = this.findBeast(e.target.innerHTML);
    this.setState({
      popup: true,
      currentBeast: beast
    });
    // console.log(beast);
  }

  popupClose(e) {
    e.preventDefault();
    this.setState({
      popup: false
    });
  }

  sortAbilitiesAndActions(beastObject) {
    beastObject.abilities = beastObject.abilities.split('&');
    beastObject.actions = beastObject.actions.split('&');
    for (var j = 0; j < beastObject.abilities.length; j++) {
      beastObject.abilities[j] = beastObject.abilities[j].split('?');
    }
    for (var k = 0; k < beastObject.actions.length; k++) {
      beastObject.actions[k] = beastObject.actions[k].split('?');
    }
  }


  sortBeastData(beastObject) {
    // sort beast data and add to state
    if (!beastObject.seen) {
      this.state.beasts.unseen.push(beastObject);
      return;
    }
    if (this.state.druidLevel >= 2 && this.state.druidLevel < 4) {
      if (!beastObject.flySpeed && !beastObject.swimSpeed && beastObject.challengeRating <= 0.25) {
        this.state.beasts.available.push(beastObject);
      } else {
        this.state.beasts.seen.push(beastObject);
      }
    } else if (this.state.druidLevel < 8) {
      if (!beastObject.flySpeed && beastObject.challengeRating <= 0.5) {
        this.state.beasts.available.push(beastObject);
      } else {
        this.state.beasts.seen.push(beastObject);
      }
    } else if (this.state.druidLevel >= 8) {
      if (beastObject.challengeRating <= 1.0) {
        this.state.beasts.available.push(beastObject);
      } else {
        this.state.beasts.seen.push(beastObject);
      }
    } else {
      this.state.beasts.seen.push(beastObject);
    }
  }

  render() {
    return(
      <div>
        Hello World
        <ShapesSeen
        availableShapes={this.state.beasts.available}
        seenShapes={this.state.beasts.seen}
        popupOpen={this.popupOpen}
        popupClose={this.popupClose}
        />
        <UnseenBeasts
          beasts={this.state.beasts.unseen}
          seenBeast={this.seenBeast}
        />
        <Popup
          popup={this.state.popup}
          popupClose={this.popupClose}
          shape={this.state.currentBeast}
        />
      </div>
    );
  }


}

export default App;


// sort beasts by seen: available, seen: not available, and not seen
// don't show not seen beasts, have an input or search bar to find and add a beast from the database
// if that beast isn't found, then have option to input a new beast to the database