import React from "react";
import Grid from "./grid";

const Third = props => <Grid {...props} width={[1, 1 / 3]} />;
Third.displayName = "Third";

export default Third;
