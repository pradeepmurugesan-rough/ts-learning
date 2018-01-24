import * as React from 'react';
import * as enzyme from 'enzyme';
import Counter from './Counter';
import * as CounterUtils from '../utils/counter';

it('counter', () => {
  CounterUtils.resetCounter = jest.fn();
  enzyme.shallow(<Counter/>);
  expect( CounterUtils.resetCounter).toHaveBeenCalledTimes(1);
});