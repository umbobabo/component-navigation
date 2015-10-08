import React from 'react';

export default class AutoHide extends React.Component {

   static get propTypes() {
     return {
       className: React.PropTypes.string,
       children: React.PropTypes.element,
       hiddenClass: React.PropTypes.string,
       throttleTimeout: React.PropTypes.number,
     };
   }

   static get defaultProps() {
     return {
       hiddenClass: 'hidden',
       throttleTimeout: 500,
     };
   }

  constructor() {
    super();
    this.throttle = this.throttle.bind(this);
  }

  componentWillMount() {
    this.state = { hiddenClass: '' };
    if (typeof window !== 'undefined') {
      this.wScrollCurrent = 0;
      this.wScrollBefore = 0;
      this.wScrollDiff = 0;
    }
  }


  componentDidMount() {
    window.addEventListener('scroll', this.throttle(this.props.throttleTimeout, () => {
      this.wScrollCurrent	= window.pageYOffset;
      this.wScrollDiff		= this.wScrollBefore - this.wScrollCurrent;

      // Scrolling up
      if (this.wScrollDiff > 0) {
        this.show();
      } else {
        // Scrolling down
        this.hide();
      }
      this.wScrollBefore = this.wScrollCurrent;
    }));
  }

  throttle(delay, Reflect) {
    let last = null;
    let deferTimer = null;
    return () => {
      const args = arguments;
      const now = Number(new Date());
      if (last && now < last + delay) {
        clearTimeout(deferTimer);
        deferTimer = setTimeout(() => {
          last = now;
          Reflect.apply(this, args);
        }, delay);
      } else {
        last = now;
        Reflect.apply(this, args);
      }
    };
  }

  hide() {
    const hideClass = `${this.props.className}-autohide--${this.props.hiddenClass}`;
    this.setState({
      hiddenClass: hideClass,
    });
  }

   show() {
     this.setState({
       hiddenClass: '',
     });
   }

   render() {
     return (<div
       className={`${this.props.className} ${this.props.className}-autohide ${this.state.hiddenClass}`}
             >{this.props.children}</div>);
   }
}
