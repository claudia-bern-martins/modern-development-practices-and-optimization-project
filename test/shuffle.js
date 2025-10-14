import { expect } from "chai";
import { shuffle } from "../src/shuffle.js";

describe("shuffle function", () => {
  it("should shuffle the indexes of the array", () => {
    const original_array = [1, 2, 3, 4, 5];
    const shuffled_array = shuffle(original_array);
    expect(shuffled_array).to.not.equal(original_array);
    expect(shuffled_array).to.not.deep.equal(original_array);
  });

  it("should have the same members as the original array", () => {
    const original_array = [1, 2, 3, 4, 5];
    const shuffled_array = shuffle(original_array);
    expect(shuffled_array).to.have.members(original_array);
  });

  it("should be the same length as the original array", () => {
    const original_array = [1, 2, 3, 4, 5];
    const shuffled_array = shuffle(original_array);
    expect(shuffled_array).to.have.lengthOf(original_array.length);
  });

  it("should return an empty array when given an empty array", () => {
    const original_array = [];
    const shuffled_array = shuffle(original_array);
    expect(shuffled_array).to.deep.equal(original_array);
  });
});
