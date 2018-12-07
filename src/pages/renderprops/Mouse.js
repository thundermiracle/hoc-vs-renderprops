import React from 'react';
import PropTypes from 'prop-types';

class Mouse extends React.PureComponent {
  /* eslint-disable */

  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove({ clientX, clientY }) {
    this.setState({
      x: clientX,
      y: clientY,
    });
  }

  /* eslint-enable */

  render() {
    const { render } = this.props;

    return (
      <div
        style={{ height: 200, background: 'green' }}
        onMouseMove={this.handleMouseMove}
      >
        {
          render && render(this.state)
        }
      </div>
    );
  }
}

Mouse.propTypes = {
  render: PropTypes.func,
};

Mouse.defaultProps = {
  render: null,
};

export default Mouse;
