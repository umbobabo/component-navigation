import React from 'react';
import throttle from 'lodash.throttle';

export default class AutoHide extends React.Component {

  static propTypes = {
    className: React.PropTypes.string,
    children: React.PropTypes.node.isRequired,
    hiddenClass: React.PropTypes.string,
    throttleTimeout: React.PropTypes.number,
  }

  static defaultProps = {
    hiddenClass: 'hidden',
    throttleTimeout: 200,
  }

  componentWillMount() {
    this.state = { hiddenClass: '' };
    this.onScrollHandler = throttle(this.scrollManager, this.props.throttleTimeout);
    if (typeof window !== 'undefined') {
      this.windowScrollCurrent = 0;
      this.windowScrollPrevious = 0;
      this.windowScrollDelta = 0;
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScrollHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScrollHandler);
  }

  scrollManager() {
    this.windowScrollCurrent = window.pageYOffset;
    this.windowScrollDelta = this.windowScrollPrevious - this.windowScrollCurrent;
    const scrollAmountThreshold = 0;
    const scrollUpThreshold = 20;
    const scrollDownTreshold = -20;
    if (this.windowScrollCurrent >= scrollAmountThreshold) {
      if (this.windowScrollDelta > scrollUpThreshold) {
        this.show();
      }
      if (this.windowScrollDelta < scrollDownTreshold) {
        // Scrolling down
        this.hide();
      }
    }
    this.windowScrollPrevious = this.windowScrollCurrent;
  }

  hide() {
    this.setState({
      hiddenClass: `${ this.props.className }-autohide--${ this.props.hiddenClass }`,
    });
  }

  show() {
    this.setState({
      hiddenClass: '',
    });
  }

  render() {
    const { className } = this.props;
    return (
      <div className={`${ className } ${ className }-autohide ${ this.state.hiddenClass }`}>
        {this.props.children}
      </div>
    );
  }

}
