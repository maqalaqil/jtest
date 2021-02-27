import * as React from "react";
import * as renderer from "react-test-renderer";
import Form from '../Form'

it("this is working head", () => {
  const tree = renderer.create(<Form />).toJSON();
  expect(tree).toMatchSnapshot();
});