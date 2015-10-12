import Navigation from './index';
import React from 'react';
import CookieMessage from '@economist/component-cookie-message';
import links from './links';

const subscriber = [ links.myeconomist, links.logout ];
const anonymous = [ links.subscribe, links.register, links.login ];
const registered = [ links.subscribe, links.myeconomist, links.logout ];
let userState = anonymous;
if (typeof window !== 'undefined') {
  switch (location.search) {
    case '?user=registered':
      userState = registered;
      break;
    case '?user=subscriber':
      userState = subscriber;
      break;
    default:
      userState = anonymous;
      break;
  }
}
// This ensures the cookie is never written.
const fakeCookie = {
  load: () => {},
  save: () => {},
};
export default (
   <div>
     <Navigation className="navigation navigation--registered navigation--sticked"
       links={userState}
       svgUri="assets/icons.svg"
     >
        <div className="navigation__secondary-autohide--nohide ">
          <CookieMessage reactCookieInstance={fakeCookie}/>
        </div>
     </Navigation>
     <p><b>Cookie Message is optional for this component.</b></p>
     <p>Cookie message will only be showned once, this example have this functionality removed</p>
     <p>To see the different variation of the navigation please click one of links below:</p>
     <ul>
       <li><a href="?user=anonymous">Anonymous</a></li>
       <li><a href="?user=registered">Registered</a></li>
       <li><a href="?user=subscriber">Subscriber</a></li>
     </ul>
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
);
