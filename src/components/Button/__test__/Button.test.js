import * as React from "react";
import * as renderer from "react-test-renderer";
import Button from '../Button'

it("this is working head", () => {
  const tree = renderer.create(<Button />).toJSON();
  expect(tree).toMatchSnapshot();
});