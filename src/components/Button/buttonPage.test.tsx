import {fireEvent, render, screen} from "@testing-library/react";
import {describe, test} from "vitest";

import {TYPES_BUTTONS} from "../../constants";

import ButtonPage from "./index";

const handleClickPage = vi.fn();

describe("Button Component", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });
  test("when rendering component Next", () => {
    const FAKE_VALUE = "Next";

    render(<ButtonPage handleClick={handleClickPage} value={FAKE_VALUE} />);
    const buttonNext = screen.getByText(TYPES_BUTTONS.BUTTON_NEXT);

    expect(buttonNext).toBeDefined();
    fireEvent.click(buttonNext);

    expect(handleClickPage).toHaveBeenCalledTimes(1);
    expect(handleClickPage).toHaveBeenCalledWith(TYPES_BUTTONS.BUTTON_NEXT);
  });

  test("when rendering component Back", () => {
    const FAKE_VALUE = "Back";

    render(<ButtonPage handleClick={handleClickPage} isDisabled={false} value={FAKE_VALUE} />);
    const buttonBack = screen.getByText(TYPES_BUTTONS.BUTTON_BACK);

    expect(buttonBack).toBeDefined();
    fireEvent.click(buttonBack);

    expect(handleClickPage).toHaveBeenCalledTimes(1);
    expect(handleClickPage).toHaveBeenCalledWith(TYPES_BUTTONS.BUTTON_BACK);
  });

  test("when rendering component Back disabled", () => {
    const FAKE_VALUE = "Back";

    render(<ButtonPage handleClick={handleClickPage} isDisabled={true} value={FAKE_VALUE} />);
    const buttonBack = screen.getByText(TYPES_BUTTONS.BUTTON_BACK);

    expect(buttonBack).toBeDefined();
    fireEvent.click(buttonBack);

    expect(handleClickPage).not.toHaveBeenCalled();
  });
});
