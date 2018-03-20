import React from "react";
import styled from "styled-components";
import { shallow, mount } from "enzyme";
import Grid from "./grid";

describe("Grid", () => {
  it("renders", () => {
    const tree = shallow(<Grid />);
    expect(tree).toMatchSnapshot();
  });

  it("renders with props", () => {
    const tree = mount(<Grid gridColumns={3} gridGaps={3} />);
    expect(tree).toMatchSnapshot();
  });

  it("renders with responsive props", () => {
    const tree = mount(<Grid gridColumns={[1, 2, 3]} gridGaps={[5,5,10]} />);
    expect(tree).toMatchSnapshot();
  });

  it("works with aliases", () => {
    const tree = mount(<Grid grc={[4, 5, 6]} grg={[11,12,13]} />);
    expect(tree).toMatchSnapshot();
  });

  it("can be extended", () => {
    const MyGrid = styled(Grid)`
      background-color: ${props => (props.isActive ? "blue" : "red")};
    `;
    const tree = mount(
      <MyGrid gridColumns={3} gridGaps={3} isActive />
    );
    expect(tree).toMatchSnapshot();
  });
});
