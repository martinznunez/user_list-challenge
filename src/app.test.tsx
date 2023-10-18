import {fireEvent, render, screen, waitFor} from "@testing-library/react";
import {QueryClientProvider, QueryClient} from "@tanstack/react-query";
import {describe, test, afterAll, afterEach, beforeAll} from "vitest";
import {setupServer} from "msw/node";
import {rest} from "msw";

import App from "./App";

const queryClient = new QueryClient();

const server = setupServer(
  rest.get("https://randomuser.me/api?results=01&page=1", (_req, res, ctx) => {
    return res(
      ctx.json({
        results: MockData,
      }),
    );
  }),
);

const MockData = [
  {
    gender: "sd",
    name: {
      title: "da",
      first: "jon",
      last: "smit",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/98.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/98.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/98.jpg",
    },
    location: {
      street: {
        number: 34,
        name: "dap",
      },
      city: "sd",
      state: "ddf",
      country: "Tokio",
      postcode: "023",
    },
    email: "example.com",
  },
  {
    gender: "female",
    name: {
      title: "Ms",
      first: "Alice",
      last: "Smith",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/2.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/2.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/2.jpg",
    },
    location: {
      street: {
        number: 456,
        name: "Elm St",
      },
      city: "Los Angeles",
      state: "CA",
      country: "USA",
      postcode: "90001",
    },
    email: "alicesmith@example.com",
  },
];

describe("App Component Tests", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
  test("renders data when loading is false", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>,
    );

    await waitFor(() => {
      expect(screen.queryByText("Loading...")).toBeNull();
    });

    expect(screen.getByText("Photo")).toBeDefined();
    expect(screen.getByText("Name")).toBeDefined();
    expect(screen.getByText("Last name")).toBeDefined();
    expect(screen.getByText("County")).toBeDefined();
    expect(screen.getByText("actions")).toBeDefined();
    expect(screen.getByText("List of Users")).toBeDefined();
    expect(screen.getByText("Page 1")).toBeDefined();

    expect(screen.getByText("jon")).toBeDefined();
    expect(screen.getByText("smit")).toBeDefined();
    expect(screen.getByText("Tokio")).toBeDefined();

    expect(screen.getByText("Color files")).toBeDefined();
    expect(screen.getByText("Sort by country")).toBeDefined();
    expect(screen.getByText("Reset state")).toBeDefined();

    expect(screen.getByText("Next")).toBeDefined();
    expect(screen.getByText("Back")).toBeDefined();

    const inputElement = screen.getByPlaceholderText("Search...");

    expect(inputElement).toBeDefined();
  });

  test("renders data and navigates to next page", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>,
    );

    await waitFor(() => {
      expect(screen.queryByText("Loading...")).toBeNull();
    });

    const buttonNext = screen.getByText("Next");

    expect(buttonNext).toBeDefined();
    const buttonBack = screen.getByText("Back");

    expect(buttonBack).toBeDefined();

    expect(screen.getByText("Page 1")).toBeDefined();

    fireEvent.click(buttonNext);

    expect(screen.getByText("Page 2")).toBeDefined();
  });

  test("handles sorting by country and toggles isOrderCountry state", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>,
    );

    await waitFor(() => {
      expect(screen.queryByText("Loading...")).toBeNull();
    });

    const buttonCounty = screen.getByText("Sort by country");

    expect(buttonCounty.textContent).toEqual("Sort by country");

    fireEvent.click(buttonCounty);

    await waitFor(() => {
      expect(buttonCounty.textContent).toEqual("Unorder by country");
    });

    const buttonUnorderCountry = screen.getByText("Unorder by country");

    expect(buttonUnorderCountry.textContent).toEqual("Unorder by country");

    fireEvent.click(buttonUnorderCountry);

    await waitFor(() => {
      expect(buttonCounty.textContent).toEqual("Sort by country");
    });
  });

  test("deletes a user", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>,
    );

    await waitFor(() => {
      expect(screen.queryByText("Loading...")).toBeNull();
    });

    const userToDelete = screen.getByText("jon");

    expect(userToDelete).toBeDefined();

    const deleteButton = screen.getByTestId(`delete-button-example.com`);

    expect(deleteButton).toBeDefined();

    fireEvent.click(deleteButton);

    await waitFor(() => {
      expect(screen.queryByText("jon")).toBeNull();
    });
  });
});
