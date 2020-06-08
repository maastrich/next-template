import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

// core components
import styles from 'assets/jss/components/PageChange'

const useStyles = makeStyles(styles);

export default function PageChange(props) {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.wrapperDiv}>
        <div className={classes.iconWrapper}>
          <CircularProgress className={classes.progress} />
        </div>
        <h4 className={classes.title}>
          Loading page contents for: {props.path}
        </h4>
      </div>
    </div>
  );
}
