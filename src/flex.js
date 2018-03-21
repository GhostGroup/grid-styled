import React from "react";
import styled from "styled-components";
import {
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
} from "styled-system";
import { oneOfType, number, string, array, bool } from "prop-types";
import propTypes from "./prop-types";
import Box from "./box";

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
