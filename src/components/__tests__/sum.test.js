import {sum} from "../sum";

test("sum i.e. description of the test", () => {
    const result = sum(3,5);

    expect(result).toBe(8);
});