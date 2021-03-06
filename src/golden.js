import React from "react";
import Grid from "./grid";

export const phi = (1 + Math.sqrt(5)) / 2;
export const ga = phi - 1;
export const gb = 1 - ga;

export const A = props => <Grid {...props} width={[1, ga]} />;
export const B = props => <Grid {...props} width={[1, gb]} />;

const Golden = {
  A,
  B
};
Golden.displayName = "Golden";

export default Golden;
