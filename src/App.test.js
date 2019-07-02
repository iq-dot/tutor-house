import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

afterEach(() => {
  jest.clearAllMocks();
});

it('App renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('App makes API calls', () => {
  jest.spyOn(global, 'fetch');
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
  expect(global.fetch).toHaveBeenCalledTimes(2);
});
