import React from 'react';

const StatusInfo = props => {
  const { str, agi, int, vit } = props.stats;
  return (
    <div>
      <h2>Status Information</h2>
      <p>HP: {vit * 50 + 1000}</p>
      <p>MP: {int * 20 + 700}</p>
      <p>Physical Damage: {str * 5 + 30}</p>
      <p>Defense: {vit * 7 + 50}</p>
      <p>Magic Damage: {int * 7 + 20}</p>
      <p>Magic Defense: {int * 4 + 40}</p>
      <p>Critical: {parseFloat(((agi * 0.3) / 100) * 100).toFixed(1)}%</p>
      <p>Attack Speed: {parseFloat(((agi * 0.7) / 100) * 100).toFixed(1)}%</p>
    </div>
  );
};

export default StatusInfo;
