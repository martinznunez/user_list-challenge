import {fireEvent, render, screen} from "@testing-library/react";
import {describe, test} from "vitest";

import {TYPES_ACTIONS} from "../../constants";

import Header from "./index";

const handleClickAction = vi.fn();
const handleChangeSearch = vi.fn();

const IS_ORDER_COUNTRY_FAKE = false;
const QUERY_SEARCH_FAKE = "";

describe("Header Component", () => {
  beforeEach(() => {
    render(
      <Header
        handleChangeSearch={handleChangeSearch}
        handleClickAction={handleClickAction}
        isOrderCounty={IS_ORDER_COUNTRY_FAKE}
        querySearch={QUERY_SEARCH_FAKE}
      />,
    );
  });

  test("when rendering component", () => {
    const sortButton = screen.getByText(TYPES_ACTIONS.TYPE_COUNTRY);
    const typeFilesButton = screen.getByText(TYPES_ACTIONS.TYPE_FILES);
    const typeResetButton = screen.getByText(TYPES_ACTIONS.TYPE_RESET);

    expect(sortButton).toBeDefined();
    expect(typeFilesButton).toBeDefined();
    expect(typeResetButton).toBeDefined();
  });

  test("renders buttons and handles click events", () => {
    const countyButton = screen.getByText(TYPES_ACTIONS.TYPE_COUNTRY);
    const typeFilesButton = screen.getByText(TYPES_ACTIONS.TYPE_FILES);
    const typeResetButton = screen.getByText(TYPES_ACTIONS.TYPE_RESET);

    expect(countyButton).toBeDefined();
    expect(typeFilesButton).toBeDefined();
    expect(typeResetButton).toBeDefined();

    fireEvent.click(countyButton);
    fireEvent.click(typeFilesButton);
    fireEvent.click(typeResetButton);

    expect(handleClickAction).toHaveBeenCalledTimes(3);
    expect(handleClickAction).toHaveBeenCalledWith(TYPES_ACTIONS.TYPE_COUNTRY);
    expect(handleClickAction).toHaveBeenCalledWith(TYPES_ACTIONS.TYPE_FILES);
    expect(handleClickAction).toHaveBeenCalledWith(TYPES_ACTIONS.TYPE_RESET);
  });
});
