import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import { UserForm } from "./UserForm";

describe("UserForm", () => {
  const userConfig = {
    first_name: "chris",
    last_name: "finnigan",
    age: "41"
  };

  const mockUserFormActionFn = jest.fn();

  it('should render correctly in "debug" mode', () => {
    const tree = renderer
      .create(<UserForm userConfig userFormAction debug />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should call userFormAction on form input change", () => {
    const wrapper = shallow(
      <UserForm userConfig userFormAction={mockUserFormActionFn} />
    );

    wrapper.find("#first_name").simulate("change", {
      target: { name: "first_name", value: "christopher" }
    });

    expect(mockUserFormActionFn.mock.calls.length).toBe(1);
  });

  it("should pass the correct data to userFormAction on form input change", () => {
    const wrapper = shallow(
      <UserForm userConfig userFormAction={mockUserFormActionFn} />
    );

    wrapper.find("#first_name").simulate("change", {
      target: {
        name: "first_name",
        value: "christopher"
      }
    });

    expect(mockUserFormActionFn.mock.calls[1][0]).toEqual({
      field: "first_name",
      value: "christopher"
    });
  });
});
