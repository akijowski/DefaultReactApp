import React from 'react';
import chai from 'chai';
const expect = chai.expect;
import {shallow} from 'enzyme';
import App from './app';

describe('App', () => {

  describe('the H1', () => {
    const wrapper = shallow(<App />);
    it('says My React App', () => {
      expect(wrapper.find('h1').text()).to.equal('My React App');
    });
  });
});
