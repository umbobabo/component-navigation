import Navigation from '../index.es6';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import links from '../links';
// Get data.
import context from '@economist/component-sections-card/context';
const subscriptionPage = 'https://subscriptions.economist.com/';
/* eslint-disable id-match */
// Force media links to use icon as background.
context.media.forEach((mediaLink) => {
  mediaLink.icon = {
    useBackground: true,
    color: 'chicago',
    icon: mediaLink.meta,
  };
  return mediaLink;
});

const accordionContext = [
  {
    title: 'Sections',
    href: '/sections',
    children: context.sections,
  },
  {
    title: 'Blogs',
    href: '/blogs',
    children: context.blogs,
  },
  ...context.media,
  {
    title: 'Print Edition',
    href: '/printedition',
  },
  {
    title: 'Products',
    href: '/digital',
  },
  {
    title: 'Subscribe',
    href: subscriptionPage,
    target: '_blank',
    unstyled: false,
    i13nModel: {
      action: 'click',
      element: 'subscribe',
    },
  },
];

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
          sectionsCardData={context}
          accordionData={accordionContext}
          subscriptionPage={subscriptionPage}
        />).should.equal(true);
    });
  });
  describe('login/logout button', () => {
    it('is a link to /user/login?destination={this.props.currentUrl}', () => {
      const instance = new Navigation({
        currentUrl: '/foo/bar',
        sectionsCardData: context,
        accordionData: accordionContext,
        subscriptionPage,
      });
      const loginLogoutButton = TestUtils.renderIntoDocument(
        instance.renderLoginLogout()
      );
      const linkButton = TestUtils.findRenderedDOMComponentWithClass(
        loginLogoutButton,
        'navigation__user-menu-link'
      );
      linkButton.href.should.contain('/user/login?destination=%2Ffoo%2Fbar')
    });
    it('When the user is logged in it\'s a link to /logout?destination={this.props.currentUrl}', () => {
      const instance = new Navigation({
        currentUrl: '/foo/bar',
        userLoggedIn: true,
        sectionsCardData: context,
        accordionData: accordionContext,
        subscriptionPage,
      });
      instance.renderLoginLogout()
        .props.href.should.equal('/logout?destination=%2Ffoo%2Fbar')
    });
  });
});
