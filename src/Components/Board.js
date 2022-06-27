import React from 'react';
import '../style/App.css';
import Clock from './Clock';

function Board() {
  return (
    <div className="Board">
      <section className="clock-container">
        <h1>Los Angeles</h1>
        <Clock label="Los Angeles" timezone="America/Los_Angeles" />
        <h1>New York</h1>
        <Clock timezone="America/New_York" />
        <h1>London</h1>
        <Clock timezone="Europe/London" />
      </section>
    </div>
  );
}

export default Board;
