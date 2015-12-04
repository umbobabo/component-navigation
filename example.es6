if (typeof document === 'object') {
  require('svg4everybody')();
}

import Navigation from './index';
import SubscribeMessage from '@economist/component-subscribe-message';
import React from 'react';

export default (
   <div>
     <Navigation className="navigation navigation--registered navigation--sticked"
       svgUri="assets/icons.svg"
     >
      <SubscribeMessage/>
     </Navigation>
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
