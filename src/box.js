import React, { Component } from "react";
import styled from "styled-components";
import { space, width, responsiveStyle } from "styled-system";
import { number, string, array, oneOfType } from "prop-types";
import propTypes from "./prop-types";
const responsivePropType = oneOfType([number, string, array]);
const flex = responsiveStyle("flex");
const order = responsiveStyle("order");

class Box extends Component {
  static propTypes = {
    ...propTypes,
    flex: responsivePropType,
    order: responsivePropType
  };

  static defaultProps = {
    is: "div"
  };

  render() {
    const { is, ...rest } = this.props;
    if (!this.base || this.is !== is) {
      this.is = is;
      this.base = styled(is)(
        [],
        { boxSizing: "border-box" },
        width,
        space,
        flex,
        order
      );
    }
    return <this.base {...rest} />;
  }
}

export default Box;
