import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    textAlign: 'center',
  },
};

const App = (props) => {
  const { classes } = props;
  return (
    <React.Fragment>
      <Grid container spacing={24} className={classes.root}>
        <Grid item xs={12}>
          <Typography variant="display3" gutterBottom>
          Laboratoria-ui Styleguide
          </Typography>
          <Divider className={classes.dividers} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

App.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(App);