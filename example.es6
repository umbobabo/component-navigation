import Navigation from './index.es6';
import React from 'react';
import CookieMessage from '@economist/component-cookie-message';
import links from './links';
// const subscriber = [ links.myeconomist, links.logout ];
// const anomymous = [ links.subscribe, links.register, links.login ];
const registered = [ links.subscribe, links.myeconomist, links.logout ];
export default (
   <div>
     <Navigation className="navigation navigation--registered navigation--sticked"
       links={registered}
       svgUri="assets/icons.svg"
     >
        <div className="navigation__secondary-autohide--nohide ">
          <CookieMessage/>
        </div>
     </Navigation>
     <p><b>To view the coookie message please clear your cookies.</b></p>
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
