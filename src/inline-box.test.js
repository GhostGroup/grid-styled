import React from "react";
import { shallow, mount} from "enzyme";
import InlineBox from "./inline-box";

describe("grid", () => {
  it("renders", () => {
    const tree = shallow(<InlineBox />);
    expect(tree).toMatchSnapshot();
  });

  it("has a classname", () => {
    const div = shallow(<InlineBox />);
    expect(div.props().className).toBeDefined();
  });

  it('can use a different component with the "is" prop', () => {
    const tree = mount(
      <InlineBox m={2} px={3} is="section">
        Test
      </InlineBox>
    );
    expect(tree).toMatchSnapshot();
  });
});