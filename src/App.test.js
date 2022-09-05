import React, { render, screen, cleanup } from '@testing-library/react';
import App from './Components/App';
import Board from './Components/Board';
import Clock from './Components/Clock';
// import fetchMock from 'jest-fetch-mock'

const moment = require('moment-timezone');

describe('Testing that stuff renders', () => {
  afterEach(() => {
    cleanup();
    jest.resetModules();
  });

  test('renders the title', () => {
    render(<App />);
    const linkElement = screen.getByText(/Worlds Biggest Clocks/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders the board', () => {
    const { container } = render(<Board />);
    expect(container.firstChild).toHaveClass('Board');
  });

  test('renders the clock', () => {
    const { container } = render(<Clock />);
    expect(container.firstChild).toHaveClass('clock');
  });
});

describe('testing if the clocks displays the correct time', () => {
  afterEach(() => {
    cleanup();
    jest.resetModules();
  });
  test('clock shows correct time for current location', () => {
    const currentTime = moment();
    const { container } = render(<Clock timezone="England/London" />);
    expect(container.firstChild).toHaveTextContent(currentTime.format('h:mm:ss a'));
  });
  test('clock shows correct time for Los Angeles', () => {
    const laTime = moment().tz('America/Los_Angeles');
    const { container } = render(<Clock timezone="America/Los_Angeles" />);
    console.log(container.firstChild.textContent, 'kebab');
    expect(container.childNodes[0]).toHaveTextContent(laTime.format('h:mm:ss a'));
  });
});
