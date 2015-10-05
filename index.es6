import React from 'react';

export default class Navigation extends React.Component {

  static get propTypes() {
    return {
      className: React.PropTypes.string,
      children: React.PropTypes.element,
    };
  }

  render() {
    return (
      <div className={this.props.className}>
        {this.props.children}
      </div>
    );
  }
}
