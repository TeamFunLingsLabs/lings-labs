import {
  setFirstName,
  setLastName,
  setReason,
  setEmail,
  receiveMerch,
  addToOrder,
  removeFromOrder
} from "../../src/actions/index";

describe("actions", () => {
  it("setFirstName returns a name string from input", () => {
    const action = setFirstName("Frodo");

    const expectedAction = {
      type: "SET_FIRST_NAME",
      firstName: "Frodo"
    };

    expect(action).toEqual(expectedAction);
  });
});

describe("actions", () => {
  it("setLastName returns a string and applies it to lastName property", () => {
    const action = setLastName("Baggins");

    const expectedAction = {
      type: "SET_LAST_NAME",
      lastName: "Baggins"
    };
    expect(action).toEqual(expectedAction);
  });
});

describe("actions", () => {
  it("setReason returns a string and applies it to reason property", () => {
    const action = setReason("Wanted to go on an adventure");

    const expectedAction = {
      type: "SET_REASON",
      reason: "Wanted to go on an adventure"
    };
    expect(action).toEqual(expectedAction);
  });
});

describe("actions", () => {
  it("setEmail receives an email input and sets it to state", () => {
    const action = setEmail("frodo@baggins.com");

    const expectedAction = {
      type: "SET_EMAIL",
      email: "frodo@baggins.com"
    };
    expect(action).toEqual(expectedAction);
  });
});

describe("actions", () => {
  it("receiveMerch takes an object with multiple keys and sets it to the merch property", () => {
    const action = receiveMerch({
      desc: "A dagger which turns blue",
      id: 2,
      img: "image",
      name: "Sting",
      price: 5
    });

    const expectedAction = {
      type: "RECEIVE_MERCH",
      merch: {
        desc: "A dagger which turns blue",
        id: 2,
        img: "image",
        name: "Sting",
        price: 5
      }
    };
    expect(action).toEqual(expectedAction);
  });
});

describe("actions", () => {
  it("addToOrder takes an object with the item id and quantity and sets it as a basket item", () => {
    const action = addToOrder({
      3: 5,
      1: 1
    });

    const expectedAction = {
      type: "ADD_TO_ORDER",
      item: {
        3: 5,
        1: 1
      }
    };
    expect(action).toEqual(expectedAction);
  });
});

describe.only("actions", () => {
  it("removeFromOrder decrements basket number by 1 or removes an item if its quantity is 0", () => {
    const action = removeFromOrder({
      3: 4,
      1: 1
    });

    const expectedAction = {
      type: "REMOVE_FROM_ORDER",
      item: {
        3: 4,
        1: 1
      }
    };
    expect(action).toEqual(expectedAction);
  });
});
