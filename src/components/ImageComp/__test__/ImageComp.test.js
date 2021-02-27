import * as React from "react";
import * as renderer from "react-test-renderer";
import ImageComp from '../ImageComp'

it("this is working head", () => {
  const tree = renderer.create(<ImageComp />).toJSON();
  expect(tree).toMatchSnapshot();
});