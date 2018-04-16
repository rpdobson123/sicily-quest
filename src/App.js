/* global document */
import React, { Button, Component } from 'react';
import gameContent from './gameContent';

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      error: '',
      game: {
        name: '',
        age: '',
        class: '',
        scene: 1,
      },
    };
  }

  g = (attr) => {
    return this.state.game[attr];
  }

  transition = (destinationId) => {
    if (!destinationId) {
      this.setState({ ...{game: { scene: 1 } }, error: 'No scene to go to! Try again!'});  
      return;
    }
    this.setState({ ...{game: { scene: destinationId } }});
  }

  renderChoices = (choices) => {
    if (!choices || !choices.length) {
      this.setState({ ...{game: { scene: 1 } }, error: `Scene #${this.g('scene')} has no choices! Try again!`});
      return;
    }
    return choices.map(choice => {
      return <button onClick={this.transition.bind(null, choice.goTo)}>{choice.description}</button>;
    });
  }

  renderScene = () => {
    const scene = gameContent[this.g('scene')];
    if (!scene) {
      this.setState({ ...{game: { scene: 1 } }, error: `Scene #${this.g('scene')} not found! Try again!`});  
      return;
    }

    return (
      <div>
        {scene.picture ? <img width="400" height="300" src={scene.picture}/> : null}
        <p className="App-intro">{scene.description}</p>
        <div className="btn-group">{this.renderChoices(scene.choices)}</div>
      </div>
    );
  }

  render = () => {
    return (
      <center><div className="App-header">
        {this.state.error ? <div style={{color:'red'}}>Error! {this.state.error}</div> : ''}
        Sicily Quest
        <div>{this.renderScene()}</div>
      </div></center>
    );
  }
}
export default LoginPage