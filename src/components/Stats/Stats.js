import React, { Component } from 'react';
import './Stats.css';

class Stats extends Component {
  renderStats() {
    const { stats, onIncrementStat, onDecrementStat } = this.props;
    const statsArray = Object.keys(stats);
    return statsArray.map(statItem => {
      return (
        <li key={statItem} className="stat-item">
          <div className="stat-controls">
            <span>
              <i
                onClick={() => onIncrementStat(statItem)}
                class="icon ion-ios-add-circle-outline"
              />
            </span>
            <span>
              <i
                onClick={() => onDecrementStat(statItem)}
                class="icon ion-ios-remove-circle-outline"
              />
            </span>
          </div>
          <p className="stat-text">
            {statItem.toUpperCase()} : <span>{stats[statItem]}</span>
          </p>
        </li>
      );
    });
  }

  render() {
    return (
      <div className="stats">
        <h2 className="stats-title">Stats</h2>
        <ul>{this.renderStats()}</ul>
      </div>
    );
  }
}

export default Stats;
