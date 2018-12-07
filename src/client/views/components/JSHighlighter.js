import React from 'react';
import PropTypes from 'prop-types';

import SyntaxHighlighter from 'react-syntax-highlighter';
import style from 'react-syntax-highlighter/styles/hljs/vs2015';

export default function JSHighlighter(props) {
  const { source, ...restProps } = props;

  return (
    <SyntaxHighlighter language="javascript" style={style} {...restProps}>
      {source}
    </SyntaxHighlighter>
  );
}

JSHighlighter.propTypes = {
  source: PropTypes.string.isRequired,
};
