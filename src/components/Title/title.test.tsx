import {render, screen} from "@testing-library/react";
import {test} from "vitest";

import Title from ".";

test("should render", () => {
  render(<Title />);

  const title = screen.getByText(/list of users/i);

  expect(title).toBeDefined();
});
