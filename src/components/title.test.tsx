import {render} from "@testing-library/react";

import Title from "./Title";

describe("Title", () => {
  test("unit test", () => {
    render(<Title />);
    expect(1 + 1).toBe(2);
  });
});
