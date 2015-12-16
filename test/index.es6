import Navigation from '../index.es6';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import links from '../links';

const registered = [ links.subscribe, links.myeconomist, links.logout ];
describe(`A navigation`, () => {
  describe(`it's a React component`, () => {
    it('is compatible with React.Component', () => {
      Navigation.should.be.a('function').and.respondTo('render');
    });
    it(`it's renders a React element`, () => {
      React.isValidElement(
        <Navigation
          className="navigation navigation--registered navigation--sticked"
          links={registered}
        />).should.equal(true);
    });
  });
});
