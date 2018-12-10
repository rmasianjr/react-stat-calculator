import React, { Component } from 'react';
import Stats from './Stats';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 0,
      stats: {
        str: 0,
        int: 0,
        agi: 0,
        vit: 0
      }
    };
    this.handleIncrementStat = this.handleIncrementStat.bind(this);
    this.handleDecrementStat = this.handleDecrementStat.bind(this);
    this.handleLevelUp = this.handleLevelUp.bind(this);
  }

  handleLevelUp() {
    this.setState(prevState => {
      return {
        level: prevState.level + 1
      };
    });
  }

  handleIncrementStat(stat) {
    this.setState(prevState => {
      console.log(prevState.stats);
      const statsCopy = Object.assign({}, prevState.stats);
      statsCopy[stat] = statsCopy[stat] + 1;
      return {
        stats: statsCopy
      };
    });
  }

  handleDecrementStat(stat) {
    this.setState(prevState => {
      const statsCopy = Object.assign({}, prevState.stats);
      statsCopy[stat] = statsCopy[stat] - 1;
      if (statsCopy[stat] < 0) {
        return;
      }
      return {
        stats: statsCopy
      };
    });
  }

  render() {
    const { level, stats } = this.state;
    return (
      <div className="container">
        <h1>Stat Calculator</h1>
        <p>LEVEL: {level}</p>
        <button onClick={this.handleLevelUp}>Level Up</button>
        <Stats
          stats={stats}
          onIncrementStat={this.handleIncrementStat}
          onDecrementStat={this.handleDecrementStat}
        />
      </div>
    );
  }
}

export default App;
