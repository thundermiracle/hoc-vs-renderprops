import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import CodeIcon from '@material-ui/icons/Code';

import JSHighlighter from 'components/JSHighlighter';

const styles = {
  buttonbar: {
    display: 'flex',
    position: 'absolute',
    right: 20,
    padding: '10px 20px 5px 20px',
  },
  codepaper: {
    // padding: 10,
  },
  collapse: {
    flexDirection: 'columns',
  },
  previewpaper: {
    background: 'lightgrey',
    padding: 20,
  },
  buttonbarspace: {
    height: 50,
    width: '100%',
  },
};

class JSCodeBlock extends React.PureComponent {
  state = {
    showCode: false,
  }

  toggleShowCode = () => {
    this.setState({
      // eslint-disable-next-line
      showCode: !this.state.showCode,
    });
  }

  render() {
    const { classes, title, source, preview } = this.props;
    const { showCode } = this.state;

    const spaceblock = <div className={classes.buttonbarspace} />;

    const buttonbar = (
      <div className={classes.buttonbar}>
        <IconButton aria-label="Code" title="Show Source Code" onClick={this.toggleShowCode}>
          <CodeIcon />
        </IconButton>
      </div>
    );

    return (
      <Fragment>
        <h1>{title}</h1>
        <div>
          {buttonbar}
          <Collapse in={showCode} className={classes.collapse}>
            <Paper elevation={0} className={classes.codepaper}>
              {spaceblock}
              <JSHighlighter source={source} />
            </Paper>
          </Collapse>
          <Paper elevation={0} className={classes.previewpaper}>
            {spaceblock}
            {preview}
          </Paper>
        </div>
      </Fragment>
    );
  }
}

JSCodeBlock.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string,
  source: PropTypes.string,
  preview: PropTypes.node,
};

JSCodeBlock.defaultProps = {
  title: '',
  source: '',
  preview: null,
};

export default withStyles(styles)(JSCodeBlock);
