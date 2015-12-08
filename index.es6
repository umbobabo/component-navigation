import React from 'react';
import Icon from '@economist/component-icon';
import List from '@economist/component-list';
import StickyPosition from 'react-sticky-position';
import AutoHide from './autohide';
import Button from '@economist/component-link-button';
import GoogleSearch from '@economist/component-google-search';
import Balloon from '@economist/component-balloon';

export default class Navigation extends React.Component {

  static get propTypes() {
    return {
      className: React.PropTypes.string,
      children: React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.element),
        React.PropTypes.element,
      ]),
      links: React.PropTypes.arrayOf(React.PropTypes.object),
      autohide: React.PropTypes.bool,
      svgUri: React.PropTypes.string,
    };
  }

  static get defaultProps() {
    return {
      autohide: true,
    };
  }

  render() {
    const svgUri = { uri: this.props.svgUri } || {};
    const primaryNavigation = (
      <div className="navigation__primary" key="primary-navigation">
        <div className="navigation__primary-inner">
          <a href="http://www.economist.com" className="navigation__link-logo">
            <Icon icon="economist" size="64px" {...svgUri}/>
          </a>
          <div className="navigation__primary-expander"></div>
          <div className="navigation__user-menu">
            <Balloon>
              <a href="https://www.economist.com/user/login" className="navigation__user-menu-link">
                <Icon icon="user" size="28px" />Log in
              </a>
              <div>
                <Button
                  shadow
                  href="https://www.economist.com/user/login"
                  className="navigation__user-menu-log-in-button"
                >
                  Log in to The Economist
                </Button>
                <span className="navigation__user-menu-register">
                  New to The Economist?
                  <a
                    className="navigation__user-menu-register-link"
                    href="https://www.economist.com/user/register"
                  >Register now</a>
                </span>
              </div>
            </Balloon>
          </div>
          <div className="navigation__search">
            <GoogleSearch/>
          </div>
        </div>
      </div>
    );
    const children = [ primaryNavigation ];
    let autohide = '';
    if (this.props.links) {
      const innerBottomBar = (<div className="navigation__secondary-inner">
        <List>
         {this.props.links.map((contextItem) => {
           return (<a
             {...contextItem}
             className="navigation__secondary-link"
             key={`${contextItem.title}-${contextItem.href}`}
                   >
               {contextItem.title}
            </a>);
         })}
         </List>
       </div>);
      let bottomBar = '';
      if (this.props.autohide) {
        autohide = ' navigation--autohide';
        bottomBar = (<AutoHide className="navigation__secondary" key="secondary-autohide">
            {innerBottomBar}
            {this.props.children}
          </AutoHide>);
      } else {
        bottomBar = (<div className="navigation__secondary" key="secondary">
            {innerBottomBar}
            {this.props.children}
          </div>);
      }
      children.push(bottomBar);
    }
    return (
      <StickyPosition className={`${this.props.className} ${autohide}`}>
         {children}
      </StickyPosition>
    );
  }
}
