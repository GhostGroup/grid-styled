import React from "react";
import styled from "styled-components";
import { responsiveStyle } from "styled-system";
import { oneOfType, number, string, array, bool } from "prop-types";
import propTypes from "./prop-types";
import Box from "./box";

const flexWrap = responsiveStyle("flex-wrap", "flexWrap", "wrap");
const flexDirection = responsiveStyle("flex-direction", "flexDirection");
const alignItems = props => responsiveStyle("align-items", "alignItems");
const justifyContent = props =>
  responsiveStyle("justify-content", "justifyContent");
const column = props => (props.column ? `flex-direction:column;` : null);

const Flex = styled(Box)(
  [],
  { display: "flex" },
  flexWrap,
  column,
  flexDirection,
  alignItems,
  justifyContent
);
Flex.displayName = "Flex";

const responsivePropType = oneOfType([number, string, array, bool]);

Flex.propTypes = Object.assign({}, propTypes, {
  flexWrap: responsivePropType,
  flexDirection: responsivePropType,
  alignItems: responsivePropType,
  justifyContent: responsivePropType,
  column: bool
});

export default Flex;
