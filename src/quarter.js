import React from "react";
import Grid from "./grid";

const Quarter = props => <Grid {...props} width={[1, 1 / 4]} />;
Quarter.displayName = "Quarter";

export default Quarter;
