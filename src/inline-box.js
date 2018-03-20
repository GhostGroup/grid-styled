import styled from "styled-components";
import Box from "./box";

const align = props => ({ verticalAlign: props.align || "top" });

const InlineBox = styled(Box)(
  [],
  {
    display: "inline-block"
  },
  align
);
InlineBox.displayName = "InlineBox";

export default InlineBox;