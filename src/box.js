import React, { Component } from "react";
import styled from "styled-components";
import { space, width, responsiveStyle } from "styled-system";
import { number, string, array, oneOfType } from "prop-types";
import propTypes from "./prop-types";
const responsivePropType = oneOfType([number, string, array]);
const flex = responsiveStyle("flex");
const order = responsiveStyle("order");

const BoxTypeMap = {};

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
    if (!BoxTypeMap[is]) {
      BoxTypeMap[is] = styled(is)(
        [],
        { boxSizing: "border-box" },
        width,
        space,
        flex,
        order
      );
    }
    const Comp = BoxTypeMap[is];
    return <Comp {...rest} />;
  }
}

export default Box;
