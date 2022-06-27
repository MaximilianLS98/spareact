import React from 'react';
import Board from './Board';
import '../style/App.css';
// import Clock from './Clock';

// create a new clock with the timezone of input
// const formHandler = e => {
//   e.preventDefault();
//   const input = e.target.elements[0];
//   console.log(input, 'this the input');
//   const { timezone } = input;
//   const clock = new Clock(timezone.value);
//   timezone.value = '';
//   this.setState({ clock });
// };

const formHandler = e => {
  e.preventDefault();
  const input = e.target.elements.timezone;
  console.log(input.value);
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Worlds Biggest Clocks</h1>
      </header>
      <form className="timezone-form">
        <input type="text" placeholder="Enter a timezone" />
        <input type="button" onSubmit={formHandler} value="Add" />
      </form>
      <Board />
    </div>
  );
}

export default App;
