import React from 'react';

const withMouse = (Component) => {
  /* eslint-disable */
  class Mouse extends React.PureComponent {
    constructor(props) {
      super(props);
      this.handleMouseMove = this.handleMouseMove.bind(this);
      this.state = { x: 0, y: 0 };
    }

    handleMouseMove(event) {
      this.setState({
        x: event.clientX,
        y: event.clientY
      });
    }

  /* eslint-enable */

    render() {
      return (
        <div
          style={{ height: 200, background: 'green' }}
          onMouseMove={this.handleMouseMove}
        >
          <Component {...this.props} mouse={this.state} />
        </div>
      );
    }
  }

  return Mouse;
};

export default withMouse;
