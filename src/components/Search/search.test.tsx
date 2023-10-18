import {fireEvent, render, screen} from "@testing-library/react";
import {describe} from "vitest";

import Search from "./index";

describe("Search Component", () => {
  test("renders the input and handles change events", () => {
    const handleChangeSearch = vi.fn();
    const querySearch = "Initial Query";

    render(<Search handleChangeSearch={handleChangeSearch} querySearch={querySearch} />);

    const inputElement = screen.getByPlaceholderText("Search...");

    expect(inputElement).toBeDefined();

    fireEvent.change(inputElement, {target: {value: "New Query"}});
    expect(handleChangeSearch).toHaveBeenCalledWith("New Query");

    const resetIcon = screen.getByText("X");

    fireEvent.click(resetIcon);
    expect(handleChangeSearch).toHaveBeenCalledWith("");
  });

  test("displays the reset icon when there is a query", () => {
    const handleChangeSearch = vi.fn();
    const querySearch = "Query Value";

    render(<Search handleChangeSearch={handleChangeSearch} querySearch={querySearch} />);

    const resetIcon = screen.getByText("X");

    expect(resetIcon).toBeDefined();
  });

  test("does not display the reset icon when there is no query", () => {
    const handleChangeSearch = vi.fn();
    const querySearch = "";

    render(<Search handleChangeSearch={handleChangeSearch} querySearch={querySearch} />);

    const resetIcon = screen.queryByText("X");

    expect(resetIcon).toBeNull();
  });
});
