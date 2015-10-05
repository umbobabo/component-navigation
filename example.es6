import Navigation from './index.es6';
import React from 'react';
import Icon from '@economist/component-icon';
import List from '@economist/component-list';

const context = [
  {
    title: 'Subscribe',
    text: 'Subscribe',
    href: 'http://www.economistgroupmedia.com',
  }, {
    title: 'Economist',
    text: 'Economist',
    href: 'http://www.economist.com/rights/',
  },
];
function mapContextToAnchor(contextItem) {
  return (<a {...contextItem} className="navigation__secondary-link">{contextItem.title}</a>);
}
export default (
  <Navigation className="navigation">
    <div className="navigation__primary">
      <div className="navigation__primary-inner">
        <a href="http://www.economist.com" className="navigation__link-logo">
          <Icon icon="economist"/>
        </a>
        <a href="http://www.economist.com/search" target="_blank" className="navigation__link-search">
          <Icon icon="magnifier"/>
        </a>
      </div>
    </div>
    <div className="navigation__secondary">
      <List className="navigation__secondary-inner">{context.map(mapContextToAnchor)}</List>
    </div>
  </Navigation>
);
