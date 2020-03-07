import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import { App } from "./App";
import configureStore from "./store";

describe("App", () => {
  it("should render in debug mode", () => {
    const tree = renderer
      .create(
        <Provider store={configureStore()}>
          <App debug />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
