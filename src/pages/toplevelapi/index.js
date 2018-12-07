import React from 'react';

import RedCursor from 'components/RedCursor';
import JSCodeBlock from 'components/JSCodeBlock';

import Mouse from './Mouse';

// eslint-disable-next-line
const source = preval`
module.exports = require('fs')
  .readFileSync(require.resolve('./Mouse'), 'utf8')
  `;

const TopLevelApi = () => (
  <JSCodeBlock
    title="Use React.children!"
    source={source}
    preview={(
      <Mouse>
        <RedCursor />
      </Mouse>
    )}
  />
);

export default TopLevelApi;
