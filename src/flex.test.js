import React from "react";
import { shallow, mount } from "enzyme";
import Flex from "./flex";

describe("flex", () => {
  it("renders", () => {
    const tree = shallow(<Flex />);
    expect(tree).toMatchSnapshot();
  });

  it("renders with props", () => {
    const tree = shallow(
      <Flex
        flexWrap
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
      />
    );
    expect(tree).toMatchSnapshot();
  });

  it("renders with column prop", () => {
    const tree = shallow(<Flex column />);
    expect(tree).toMatchSnapshot();
  });

  it("renders with responsive props", () => {
    const tree = shallow(
      <Flex
        flexWrap={[true, false]}
        flexDirection={["column", "row"]}
        alignItems={["stretch", "center"]}
        justifyContent={["space-between", "center"]}
      />
    );
    expect(tree).toMatchSnapshot();
  });

  it('can use a different component with the "is" prop', () => {
    const tree = mount(
      <Flex m={2} px={3} is="section">
        Test
      </Flex>
    );
    expect(tree).toMatchSnapshot();
  });
});
