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
    describe(`It can have a bottom bar`, () => {
      it(`the bottom bar is not present if links are not provided`, () => {
        const shallowRenderer = TestUtils.createRenderer();
        shallowRenderer.render(React.createElement(Navigation, { className: 'Navigation' }));
        const componentChildren = shallowRenderer.getRenderOutput().props.children;
        componentChildren.length.should.equal(1);
        const primaryNavigation = componentChildren[0];
        primaryNavigation.props.className.should.equal('navigation__primary');
        primaryNavigation.props.children.should.be.a('Object');
      });
      it(`the bottom bar presents a list of links if provided`, () => {
        const shallowRenderer = TestUtils.createRenderer();
        shallowRenderer.render(React.createElement(Navigation, { className: 'Navigation', links: registered }));
        const componentChildren = shallowRenderer.getRenderOutput().props.children;
        componentChildren.should.be.a('Array');
        componentChildren.length.should.equal(2);
        const secondaryNavigation = componentChildren[1];
        secondaryNavigation.props.className.should.equal('navigation__secondary');
        // Testing the presence of the 3 links on the secondary navigation
        secondaryNavigation.props.children[0].props.children.props.children.length.should.equal(3);
      });
    });
  });
});
