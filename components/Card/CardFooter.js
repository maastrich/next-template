import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import styles from "assets/jss/components/Card/CardFooter";

const useStyles = makeStyles(styles);

export default function CardFooter(props) {
  const classes = useStyles();
  const { className, children, style, ...rest } = props;
  let cardFooterClasses;
  switch (style) {
    case 'profile':
      cardFooterClasses = classNames({
        [classes.profile]: true,
        [className]: className !== undefined
      });
      break;
    default:
      cardFooterClasses = classNames({
        [classes.default]: true,
        [className]: className !== undefined
      });
      break;
  }
  return (
    <div className={cardFooterClasses} {...rest}>
      {children}
    </div>
  );
}

CardFooter.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  style: PropTypes.string
};
