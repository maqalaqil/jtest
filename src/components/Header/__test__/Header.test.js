import * as React from "react";
import * as renderer from "react-test-renderer";
import Header from '../Header'

it("this is working head", () => {
  const tree = renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
});