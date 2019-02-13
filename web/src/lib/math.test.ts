import { calculatePercentage } from "./math";

describe("calculatePercentage", () => {
  it.each`
    h      | s      | expected
    ${1}   | ${-10} | ${1}
    ${0}   | ${0}   | ${0}
    ${100} | ${0}   | ${1}
    ${100} | ${5}   | ${0.95}
    ${100} | ${95}  | ${0.05}
    ${100} | ${100} | ${0}
    ${100} | ${101} | ${0}
  `("computes the correct percentage for $h and $s", ({ h, s, expected }) => {
    expect(calculatePercentage(h, s)).toBe(expected);
  });
});
