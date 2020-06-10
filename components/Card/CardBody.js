import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import styles from "assets/jss/components/Card/CardBody";

const useStyles = makeStyles(styles);

export default function CardBody(props) {
  const classes = useStyles();
  const { className, children, style, ...rest } = props;
  let cardBodyClasses;
  switch (style) {
    case 'profile':
      cardBodyClasses = classNames({
        [classes.profile]: true,
        [className]: className !== undefined
      });
      break;
    default:
      cardBodyClasses = classNames({
        [classes.default]: true,
        [className]: className !== undefined
      });
      break;
  }
  return (
    <div className={cardBodyClasses} {...rest}>
      {children}
    </div>
  );
}

CardBody.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  style: PropTypes.string
};
