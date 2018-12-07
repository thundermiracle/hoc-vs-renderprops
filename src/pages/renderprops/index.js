import React from 'react';

import RedCursor from 'components/RedCursor';
import JSCodeBlock from 'components/JSCodeBlock';

import Mouse from './Mouse';

// eslint-disable-next-line
const source = preval`
module.exports = require('fs')
  .readFileSync(require.resolve('./Mouse'), 'utf8')
  `;

class RenderProps extends React.PureComponent {
  renderRedCursor = mouse => <RedCursor mouse={mouse} />

  render() {
    return (
      <JSCodeBlock
        title="Use Render Props!"
        source={source}
        preview={(
          <Mouse render={this.renderRedCursor} />
        )}
      />
    );
  }
} 

export default RenderProps;
