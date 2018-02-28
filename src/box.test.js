import React from "react";
import styled from "styled-components";
import { shallow, mount } from "enzyme";
import Box from "./box";

describe("box", () => {
  it("renders", () => {
    const tree = shallow(<Box m={2} px={3} />);
    expect(tree).toMatchSnapshot();
  });

  it("renders with props", () => {
    const tree = mount(<Box m={[1, 2]} px={[1, 2]} w={1} flex="1 1 auto" />);
    expect(tree).toMatchSnapshot();
  });

  it("can be extended", () => {
    const MyBox = styled(Box)`
      background-color: ${props => (props.isActive ? "blue" : "red")};
    `;
    const tree = mount(
      <MyBox m={[1, 2]} px={[1, 2]} w={1} flex="1 1 auto" isActive />
    );
    expect(tree).toMatchSnapshot();
  });

  it('can use a different component with the "is" prop', () => {
    const tree = mount(
      <Box m={2} px={3} is="section">
        Test
      </Box>
    );
    expect(tree).toMatchSnapshot();
  });

  it("renders the same component when props change", () => {
    class Component extends React.Component {
      render() {
        return (
          <Box {...this.props}>
            <div ref="childRef" />
          </Box>
        );
      }
    }
    const tree = mount(<Component />);
    const childRef = tree.ref("childRef");
    tree.setProps({ value: "a new value" });
    expect(tree.ref("childRef")).toBe(childRef);
  });
});
