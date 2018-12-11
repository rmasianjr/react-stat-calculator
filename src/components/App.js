import React, { Component } from 'react';
import Stats from './Stats/Stats';
import StatusInfo from './StatusInfo/StatusInfo';
import Header from './Header/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 1,
      stats: {
        str: 0,
        int: 0,
        agi: 0,
        vit: 0
      },
      spCount: 0
    };
    this.handleIncrementStat = this.handleIncrementStat.bind(this);
    this.handleDecrementStat = this.handleDecrementStat.bind(this);
    this.handleLevelUp = this.handleLevelUp.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleLevelUp() {
    this.setState(prevState => {
      return {
        level: prevState.level + 1,
        spCount: prevState.spCount + 3
      };
    });
  }

  handleReset() {
    this.setState(() => {
      return {
        level: 1,
        stats: {
          str: 0,
          int: 0,
          agi: 0,
          vit: 0
        },
        spCount: 0
      };
    });
  }

  handleIncrementStat(stat) {
    this.setState(prevState => {
      const { stats, spCount } = prevState;
      if (spCount < 1) {
        return;
      }

      const statsCopy = Object.assign({}, stats);
      statsCopy[stat] = statsCopy[stat] + 1;
      return {
        stats: statsCopy,
        spCount: spCount - 1
      };
    });
  }

  handleDecrementStat(stat) {
    this.setState(prevState => {
      const { stats, spCount } = prevState;
      const statsCopy = Object.assign({}, stats);
      statsCopy[stat] = statsCopy[stat] - 1;
      if (statsCopy[stat] < 0) {
        return;
      }
      return {
        stats: statsCopy,
        spCount: spCount + 1
      };
    });
  }

  render() {
    const { level, stats, spCount } = this.state;
    return (
      <div className="container">
        <Header
          level={level}
          spCount={spCount}
          onLevelUp={this.handleLevelUp}
          onReset={this.handleReset}
        />
        <div className="content">
          <Stats
            stats={stats}
            onIncrementStat={this.handleIncrementStat}
            onDecrementStat={this.handleDecrementStat}
          />
          <StatusInfo stats={stats} />
        </div>
      </div>
    );
  }
}

export default App;
