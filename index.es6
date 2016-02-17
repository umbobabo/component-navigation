import React from 'react';
import Icon from '@economist/component-icon';
import StickyPosition from 'react-sticky-position';
import AutoHide from './autohide';
import Button from '@economist/component-link-button';
import GoogleSearch from '@economist/component-google-search';
import Balloon from '@economist/component-balloon';
import SectionsCard from '@economist/component-sections-card';
import Accordion from '@economist/component-accordion';

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
      userLoggedIn: React.PropTypes.bool,
      currentUrl: React.PropTypes.string,
      sharedMenu: React.PropTypes.object.isRequired,
      sectionsCardData: React.PropTypes.object.isRequired,
      accordionData: React.PropTypes.array.isRequired,
    };
  }

  static get defaultProps() {
    return {
      autohide: true,
    };
  }

  renderLoginLogout() {
    const { currentUrl, userLoggedIn } = this.props;
    const destinationParameter = currentUrl ? `?destination=${encodeURIComponent(currentUrl)}` : '';
    const buttonUrl = userLoggedIn ? `/logout${destinationParameter}` : `/user/login${destinationParameter}`;
    const buttonClassSuffix = userLoggedIn ? 'login' : 'logout'
    const buttonText = userLoggedIn ? `My Account` : `Log in`;
    const registerUrl = `/user/register${destinationParameter}`;
    const userMenuBalloonTrigger = (
      <Button
        href={buttonUrl}
        className={`navigation__user-menu-link navigation__user-menu-link--${buttonClassSuffix}`}
        icon={{ icon: 'user', size: '28px' }}
        unstyled
      >{buttonText}</Button>
    );
    if (userLoggedIn) {
      return (
        <Balloon showOnHover trigger={userMenuBalloonTrigger}>
          <ul className="navigation__user-menu-linklist">
            <li className="navigation__user-menu-linklist-item">
              <a className="navigation__user-menu-linklist-link" href="/user">
                My account
              </a>
            </li>
            <li className="navigation__user-menu-linklist-item">
              <a className="navigation__user-menu-linklist-link" href="https://subscriptions.economist.com">
                Subscribe to The Economist
              </a>
            </li>
            <li className="navigation__user-menu-linklist-item">
              <a className="navigation__user-menu-linklist-link" href="/subscriptions/activation">
                Activate my digital subscription
              </a>
            </li>
            <li className="navigation__user-menu-linklist-item">
              <a className="navigation__user-menu-linklist-link" href="https://subscriptions.economist.com">
                Buy a gift subscription
              </a>
            </li>
            <li className="navigation__user-menu-linklist-item">
              <a className="navigation__user-menu-linklist-link" href="/users/guest-olejses/newsletters">
                Newsletters
              </a>
            </li>
            <li className="navigation__user-menu-linklist-item">
              <a className="navigation__user-menu-linklist-link" href="/users/guest-olejses/comments">
                My comments
              </a>
            </li>
            <li className="navigation__user-menu-linklist-item">
              <a className="navigation__user-menu-linklist-link" href="/logout?destination=">
                Log out
              </a>
            </li>
          </ul>
        </Balloon>
      )
    }
    return (
      <Balloon showOnHover trigger={userMenuBalloonTrigger}>
        <Button shadow href={buttonUrl} className="navigation__user-menu-log-in-button">
          Log in to <span className="navigation__user-menu-the-economist-name">The Economist</span>
        </Button>
        <ul className="navigation__user-menu-linklist">
          <li className="navigation__user-menu-linklist-item navigation__user-menu-linklist-item--center">
            New to <span className="navigation__user-menu-the-economist-name">The Economist</span>?
            <a className="navigation__user-menu-linklist-link" href={registerUrl}>
              Register now
            </a>
          </li>
          <li className="navigation__user-menu-linklist-item">
            <a className="navigation__user-menu-linklist-link" href="/user">
              Manage my subscription
            </a>
          </li>
        </ul>
      </Balloon>
    );
  }

  render() {
    const svgUri = { uri: this.props.svgUri } || {};
    const menuAccordionTrigger = (<a href="/Sections" className="navigation__sections-link navigation--tappable-icon tappable-icon">
      <Icon icon="hamburger" size="28px" color="white" />
      <Icon icon="close" size="28px" color="white" />
    </a>);
    const menuSectionsTrigger = (<a href={this.props.sharedMenu.topic.href} className="navigation__sections-link">
      {this.props.sharedMenu.topic.title}
    </a>);
    const primaryNavigation = (
      <div className="navigation__primary" key="primary-navigation">
        <div className="navigation__primary-inner">
          <a href="http://www.economist.com" className="navigation__link-logo">
            <Icon icon="economist" size="64px" {...svgUri}/>
            <div className="navigation__link-empty-logo"></div>
          </a>
          <Balloon
            className="navigation__main-navigation-link navigation__mobile-accordion"
            trigger={menuAccordionTrigger}
          >
            <Accordion list={this.props.accordionData}/>
          </Balloon>
          <Balloon
            className="navigation__main-navigation-link navigation__main-sections-card"
            showOnHover
            trigger={menuSectionsTrigger}
          >
            <div>
              <SectionsCard data={this.props.sectionsCardData}/>
            </div>
          </Balloon>
          <a href="/printedition" className="navigation__main-navigation-link">
            Print edition
          </a>
          <a href={this.props.sharedMenu.more.href} className="navigation__main-navigation-link">
            {this.props.sharedMenu.more.title}
          </a>
          <div className="navigation__primary-expander"></div>
          <Button href={this.props.sharedMenu.subscribe.href}
            className="navigation__main-navigation-link navigation__main-navigation-link-subscribe"
            target="_blank"
            i13nModel={{
              action: 'click',
              element: 'subscribe',
            }}
            unstyled
          >
            {this.props.sharedMenu.subscribe.title}
          </Button>
          <div className="navigation__user-menu">
            {this.renderLoginLogout()}
          </div>
          <div className="navigation__search">
            <GoogleSearch/>
          </div>
        </div>
      </div>
    );
    const children = [ primaryNavigation ];
    let autohide = '';
    let bottomBar = '';
    if (this.props.autohide) {
      autohide = ' navigation--autohide';
      bottomBar = (<AutoHide className="navigation__secondary" key="secondary-autohide">
          {this.props.children}
        </AutoHide>);
    } else {
      bottomBar = (<div className="navigation__secondary" key="secondary">
          {this.props.children}
        </div>);
    }
    children.push(bottomBar);
    return (
      <StickyPosition className={`${this.props.className} ${autohide}`}>
         {children}
      </StickyPosition>
    );
  }
}
