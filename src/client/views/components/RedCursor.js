import React from 'react';
import PropTypes from 'prop-types';

const RedCursor = (props) => {
  const { mouse } = props;

  return (
    <div
      style={{
        background: 'red',
        height: 50,
        width: 50,
        position: 'absolute',
        left: mouse.x - 25,
        top: mouse.y - 25,
        cursor: 'none',
      }}
    />
  );
};

RedCursor.propTypes = {
  mouse: PropTypes.object.isRequired,
};

export default RedCursor;
