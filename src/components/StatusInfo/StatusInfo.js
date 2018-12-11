import React from 'react';
import './StatusInfo.css';

const StatusInfo = props => {
  const { str, agi, int, vit } = props.stats;
  return (
    <div className="status-info">
      <h2 class="status-info-title">Status Information</h2>
      <p>
        HP: <span className="status-info-value">{vit * 50 + 1000}</span>{' '}
      </p>
      <p>
        MP: <span className="status-info-value">{int * 20 + 700}</span>{' '}
      </p>
      <p>
        Physical Damage:{' '}
        <span className="status-info-value">{str * 5 + 30}</span>{' '}
      </p>
      <p>
        Defense: <span className="status-info-value">{vit * 7 + 50}</span>{' '}
      </p>
      <p>
        Magic Damage: <span className="status-info-value">{int * 7 + 20}</span>{' '}
      </p>
      <p>
        Magic Defense: <span className="status-info-value">{int * 4 + 40}</span>{' '}
      </p>
      <p>
        Critical:{' '}
        <span className="status-info-value">
          {parseFloat(((agi * 0.3) / 100) * 100).toFixed(1)}%
        </span>{' '}
      </p>
      <p>
        Attack Speed:{' '}
        <span className="status-info-value">
          {parseFloat(((agi * 0.7) / 100) * 100).toFixed(1)}%
        </span>{' '}
      </p>
    </div>
  );
};

export default StatusInfo;
