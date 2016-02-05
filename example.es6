if (typeof document === 'object') {
  require('svg4everybody')();
}

import Navigation from './index';
import SubscribeMessage from '@economist/component-subscribe-message';
import React from 'react';
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

export default (
  <div>
    <div>
        <Navigation className="navigation navigation--registered navigation--sticked"
          svgUri="assets/icons.svg"
          autohide={false}
          sectionsCardData={context}
          accordionData={accordionContext}
          subscriptionPage={subscriptionPage}
        >
          <SubscribeMessage counter="1/3"/>
        </Navigation>
        <p>Stretch the page to test the sticky functionality applied to the navigation</p>
        <p>Stretch the page to test the sticky functionality applied to the navigation</p>
        <p>Stretch the page to test the sticky functionality applied to the navigation</p>
        <p>Stretch the page to test the sticky functionality applied to the navigation</p>
        <p>Stretch the page to test the sticky functionality applied to the navigation</p>
        <p>Stretch the page to test the sticky functionality applied to the navigation</p>
        <p>Stretch the page to test the sticky functionality applied to the navigation</p>
        <p>Stretch the page to test the sticky functionality applied to the navigation</p>
        <p>Stretch the page to test the sticky functionality applied to the navigation</p>
        <p>Stretch the page to test the sticky functionality applied to the navigation</p>
        <p>Stretch the page to test the sticky functionality applied to the navigation</p>
        <p>Stretch the page to test the sticky functionality applied to the navigation</p>
        <p>Stretch the page to test the sticky functionality applied to the navigation</p>
    </div>
    <div>
      <Navigation className="navigation navigation--registered navigation--sticked"
          svgUri="assets/icons.svg"
          userLoggedIn={true}
          autohide={false}
          sectionsCardData={context}
          accordionData={accordionContext}
          subscriptionPage={subscriptionPage}
      />
    </div>
  </div>
);
