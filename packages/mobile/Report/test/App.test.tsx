import React from 'react';
import renderer from 'react-test-renderer';

import App from '../App';

describe('<App />', () => {
  let tree: any;

  beforeEach(() => {
    tree = renderer.create(<App />).toJSON();
  });

  it('has 1 child', () => {
    expect(tree?.children.length).toBe(1);
  });
  it('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});
