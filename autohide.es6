import React from 'react';

export default class AutoHide extends React.Component {

   static get propTypes() {
     return {
       className: React.PropTypes.string,
       children: React.PropTypes.element,
       elClassHidden: React.PropTypes.string,
       throttleTimeout: React.PropTypes.number,
     };
   }

   static get defaultProps() {
     return {
       hiddenClass: 'hidden',
       throttleTimeout: 300,
     };
   }

   componentWillMount() {
    this.state = { hiddenClass: '' };
     if (typeof window !== 'undefined') {
       this.dHeight = 0;
       this.wHeight = 0;
       this.wScrollCurrent = 0;
       this.wScrollBefore = 0;
       this.wScrollDiff = 0;
     }
   }

   constructor() {
    super();
    this.throttle = this.throttle.bind(this);
  }

   throttle ( delay, fn )
   {
     let last;
     let deferTimer;
     return function()
     {
      var context = this, args = arguments, now = +new Date;
      if( last && now < last + delay )
      {
        clearTimeout(deferTimer);
        deferTimer = setTimeout(() => {
          last = now;
          fn.apply(context, args);
        }, delay);
      }
      else
      {
        last = now;
        fn.apply(context, args);
      }
      };
   }

   componentDidMount() {
    window.addEventListener( 'scroll', this.throttle(this.props.throttleTimeout, () => {
         this.dHeight			= document.body.offsetHeight;
         this.wHeight			= window.innerHeight;
         this.wScrollCurrent	= window.pageYOffset;
         this.wScrollDiff		= this.wScrollBefore - this.wScrollCurrent;

      // Scrolling up
      if (this.wScrollDiff > 0){
         console.log('a');
         this.show();
      } else {
         //Scrolling down
         this.hide();
      }

      this.wScrollBefore = this.wScrollCurrent;
      }));
   }


   hide() {
      const hideClass = `${this.props.className}-autohide--${this.props.hiddenClass}`;
      this.setState({
         hiddenClass: hideClass
      });
   }

   show() {
      this.setState({
         hiddenClass: ''
      });
   }

   render() {
     return <div className={`${this.props.className} ${this.props.className}-autohide ${this.state.hiddenClass}`}>{this.props.children}</div>
   }
}
