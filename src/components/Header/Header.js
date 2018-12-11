import React, { Fragment } from 'react';
import './Header.css';

const Header = props => {
  const { level, onLevelUp, spCount, onReset } = props;
  return (
    <Fragment>
      <h1 className="header-title">Stat Calculator</h1>
      <div className="header-content">
        <div className="header-controls">
          <p>
            Level: <span>{level}</span>
          </p>
          <span>
            <i onClick={onLevelUp} class="icon ion-ios-add-circle-outline" />
          </span>
          <span>
            <i onClick={onReset} class="icon ion-ios-refresh-circle" />
          </span>
        </div>
        <div className="header-sp">
          <p>
            Available SP: <span>{spCount}</span>
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
