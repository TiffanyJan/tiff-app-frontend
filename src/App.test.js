import React from 'react';
import ReactDOM from 'react-dom';
import  from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(< />, div);
  ReactDOM.unmountComponentAtNode(div);
});
