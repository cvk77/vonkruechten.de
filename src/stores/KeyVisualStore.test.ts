import KeyVisualStore from "./KeyVisualStore";

describe("KeyVisualStore", () => {
  let store: KeyVisualStore;

  beforeAll(() => {
    store = new KeyVisualStore();
  });

  beforeEach(() => {
    store.headerHeight = 0;
    store.scrollTop = 0;
  });

  it.each`
    h      | s      | expected
    ${1}   | ${-10} | ${1}
    ${0}   | ${0}   | ${0}
    ${100} | ${0}   | ${1}
    ${100} | ${5}   | ${0.95}
    ${100} | ${95}  | ${0.05}
    ${100} | ${100} | ${0}
    ${100} | ${101} | ${0}
  `(
    "computes the correct percentVisible for $h and $s",
    ({ h, s, expected }) => {
      store.headerHeight = h;
      store.scrollTop = s;
      expect(store.percentVisible).toBe(expected);
    }
  );

  it.each`
    h      | expected
    ${0}   | ${0}
    ${50}  | ${0}
    ${51}  | ${-1}
    ${100} | ${-50}
  `("computes the correct topPosition for $h", ({ h, s, expected }) => {
    store.headerHeight = h;
    expect(store.topPosition).toBe(expected);
  });
});
