import Navigation from './index.es6';
import React from 'react';
import links from './links';
// const subscriber = [ links.myeconomist, links.logout ];
// const anomymous = [ links.subscribe, links.register, links.login ];
const registered = [ links.subscribe, links.myeconomist, links.logout ];
export default (
   <div>
     <Navigation className="navigation navigation--registered navigation--sticked"
       links={registered}
       svgUri="assets/icons.svg"
     />
     <p>First paragraph</p>
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
