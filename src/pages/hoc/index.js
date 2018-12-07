import React from 'react';

import RedCursor from 'components/RedCursor';
import JSCodeBlock from 'components/JSCodeBlock';

import withMouse from './withMouse';

// eslint-disable-next-line
const source = preval`
module.exports = require('fs')
  .readFileSync(require.resolve('./withMouse'), 'utf8')
  `;

const Hoc = () => {
  const NewMouse = withMouse(RedCursor);

  return (
    <JSCodeBlock
      title="Use High-Order-Component!"
      source={source}
      preview={(
        <NewMouse />
      )}
    />
  );
};

export default Hoc;
