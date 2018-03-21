import React from "react";
import styled from "styled-components";
import { responsiveStyle } from "styled-system";
import { oneOfType, number, string, array, bool } from "prop-types";
import propTypes from "./prop-types";
import Box from "./box";

const repeatColumns = n => `repeat(${n}, 1fr)`;

const gridColumns = props => responsiveStyle({    
  prop: "gridColumns",
  cssProperty: "gridTemplateColumns",
  key: "gridColumns",
  numberToPx: false,
  getter: repeatColumns,
  alias: "grc"
});

const gridGaps = props => responsiveStyle({
  prop: "gridGaps",
  cssProperty: "gridGap",
  key: "gridGaps",
  numberToPx: true,
  alias: "grg"
});

const Grid = styled(Box)(
  [],
  { display: "grid" },
  gridColumns,
  gridGaps
);

const responsivePropType = oneOfType([number, string, array, bool]);

Grid.propTypes = { ...propTypes };

export default Grid;
