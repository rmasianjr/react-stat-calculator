import React, { Component } from 'react';

class Stats extends Component {
  renderStats() {
    const { stats, onIncrementStat, onDecrementStat } = this.props;
    const statsArray = Object.keys(stats);
    return statsArray.map(statItem => {
      return (
        <li key={statItem}>
          <p>
            {statItem.toUpperCase()} : {stats[statItem]}
          </p>
          <button onClick={() => onIncrementStat(statItem)}>+</button>
          <button onClick={() => onDecrementStat(statItem)}>-</button>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <h2>Stats</h2>
        <ul>{this.renderStats()}</ul>
      </div>
    );
  }
}

export default Stats;
