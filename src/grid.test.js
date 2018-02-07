import React from "react";
import { shallow, mount} from "enzyme";
import Grid from "./grid";

describe("grid", () => {
  it("renders", () => {
    const tree = shallow(<Grid />);
    expect(tree).toMatchSnapshot();
  });

  it("has a classname", () => {
    const div = shallow(<Grid />);
    expect(div.props().className).toBeDefined();
  });

  it('can use a different component with the "is" prop', () => {
    const tree = mount(
      <Grid m={2} px={3} is="section">
        Test
      </Grid>
    );
    expect(tree).toMatchSnapshot();
  });
});
