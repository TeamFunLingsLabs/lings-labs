import React from "react";
import Apply from "../../src/components/Apply";
import { shallow } from "enzyme";

describe.only("Apply component", () => {
  it("submit the application form", () => {
    const event = { preventDefault: jest.fn() };
    const mockData = {
      firstName: "Dobby",
      lastName: "The House Elf",
      reason: "To save HP",
      email: "dobby@hogwarts.ac.uk"
    };
    const mockSubmitForm = jest.fn();
    const wrapper = shallow(
      <Apply application={mockData} postApply={mockSubmitForm} />
    );
    wrapper.find("form").simulate("submit", event);

    expect(mockSubmitForm.mock.calls).toEqual([
      [
        {
          firstName: "Dobby",
          lastName: "The House Elf",
          reason: "To save HP",
          email: "dobby@hogwarts.ac.uk"
        }
      ]
    ]);
    expect(event.preventDefault.mock.calls.length).toBe(1);
  });
});
