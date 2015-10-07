import Navigation from './index.es6';
import React from 'react';

const links = {
  subscribe: {
    title: 'Subscribe',
    text: 'Subscribe',
    href: 'https://subscriptions.economist.com/GLB/STUCAMP/MAST/',
  },
  myeconomist: {
    title: 'My Economist',
    text: 'My Economist',
    href: 'https://www.economist.com/user',
  },
  logout: {
    title: 'Log out',
    text: 'Log out',
    href: 'http://www.economist.com/log/',
  },
  register: {
    title: 'Register',
    text: 'Register',
    href: 'https://www.economist.com/user/register',
  },
  login: {
    title: 'Log in',
    text: 'Log in',
    href: 'https://www.economist.com/user/login',
  },
};

const subscriber = [ links.myeconomist, links.logout ];
const registered = [ links.subscribe, links.myeconomist, links.logout ];
const anomymous = [ links.subscribe, links.register, links.login ];
export default (
   <div>
     <Navigation className="navigation navigation--registered navigation--sticked" links={registered} />
     <p>First paragraph</p>
     <p>Stretch the page to test the sticky</p>
     <p>Stretch the page to test the sticky</p>
     <p>Stretch the page to test the sticky</p>
     <p>Stretch the page to test the sticky</p>
     <Navigation className="navigation navigation--subscriber"
       autohide={false} links={subscriber}
     />
     <p>Stretch the page to test the sticky</p>
     <p>Stretch the page to test the sticky</p>
     <p>Stretch the page to test the sticky</p>
     <p>Stretch the page to test the sticky</p>
     <p>Stretch the page to test the sticky</p>
     <p>Stretch the page to test the sticky</p>
     <Navigation className="navigation navigation--anonymous"
       autohide={false} links={anomymous}
     />
     <p>Stretch the page to test the sticky</p>
     <p>Stretch the page to test the sticky</p>
     <p>Stretch the page to test the sticky</p>
     <p>Stretch the page to test the sticky</p>
     <p>Stretch the page to test the sticky</p>
     <p>Stretch the page to test the sticky</p>
     <Navigation className="navigation" autohide={false}/>
     <p>Stretch the page to test the sticky</p>
     <p>Stretch the page to test the sticky</p>
     <p>Stretch the page to test the sticky</p>
     <p>Stretch the page to test the sticky</p>
     <p>Stretch the page to test the sticky</p>
     <p>Stretch the page to test the sticky</p>
     <p>Stretch the page to test the sticky</p>
     <p>Stretch the page to test the sticky</p>
     <p>Stretch the page to test the sticky</p>
     <p>Stretch the page to test the sticky</p>
     <p>Stretch the page to test the sticky</p>
     <p>Stretch the page to test the sticky</p>
     <p>Stretch the page to test the sticky</p>
     <p>Stretch the page to test the sticky</p>
     <p>Stretch the page to test the sticky</p>
     <p>Stretch the page to test the sticky</p>
     <p>Stretch the page to test the sticky</p>
     <p>Stretch the page to test the sticky</p>
     <p>Stretch the page to test the sticky</p>
     <p>Stretch the page to test the sticky</p>
     <p>Stretch the page to test the sticky</p>
     <p>Stretch the page to test the sticky</p>
   </div>
);
