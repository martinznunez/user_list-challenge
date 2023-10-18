import {fireEvent, render, screen} from "@testing-library/react";
import {describe, test} from "vitest";

import {IUser} from "../../interface";

import Table from ".";

const handleDeleteUser = vi.fn();
const handleSort = vi.fn();

describe("Table Component", () => {
  const dataUser: IUser[] = [
    {
      email: "user1@example.com",
      picture: {
        thumbnail: "thumbnail1.jpg",
        large: "",
        medium: "",
      },
      gender: "",
      name: {
        first: "John",
        last: "Doe",
        title: "",
      },
      location: {
        country: "USA",
        street: {
          number: 0,
          name: "",
        },
        city: "",
        state: "",
        postcode: 0,
      },
      login: {
        username: "",
        password: "",
        salt: "",
        md5: "",
        sha1: "",
        sha256: "",
      },
    },
    {
      email: "user2@example.com",
      picture: {
        thumbnail: "thumbnail2.jpg",
        large: "",
        medium: "",
      },
      gender: "",
      name: {
        first: "Jane",
        last: "Smith",
        title: "",
      },
      location: {
        country: "Canada",
        street: {
          number: 0,
          name: "",
        },
        city: "",
        state: "",
        postcode: 0,
      },
      login: {
        username: "",
        password: "",
        salt: "",
        md5: "",
        sha1: "",
        sha256: "",
      },
    },
  ];

  test("renders table rows for each user", () => {
    render(
      <Table
        dataUser={dataUser}
        handleDeleteUser={handleDeleteUser}
        handleSort={handleSort}
        isFilesColors={true}
      />,
    );
    const nameHeader = screen.getByText("Name");
    const lastNameHeader = screen.getByText("Last name");
    const countyHeader = screen.getByText("County");
    const actionsHeader = screen.getByText("actions");

    expect(nameHeader).toBeDefined();
    expect(lastNameHeader).toBeDefined();
    expect(countyHeader).toBeDefined();
    expect(actionsHeader).toBeDefined();

    const rows = screen.getAllByRole("row");

    expect(rows).toHaveLength(dataUser.length + 1);
  });

  test("handles delete user button click", () => {
    render(
      <Table
        dataUser={dataUser}
        handleDeleteUser={handleDeleteUser}
        handleSort={handleSort}
        isFilesColors={true}
      />,
    );

    const removeButton = screen.getAllByText("Remove")[0];

    fireEvent.click(removeButton);

    expect(handleDeleteUser).toHaveBeenCalledWith(dataUser[0].email);
  });

  test("should call handleSort when clicking on County header", () => {
    render(
      <Table
        dataUser={dataUser}
        handleDeleteUser={handleDeleteUser}
        handleSort={handleSort}
        isFilesColors={true}
      />,
    );

    const countyHeader = screen.getByText("County");

    fireEvent.click(countyHeader);

    expect(handleSort).toHaveBeenCalledTimes(1);
  });

  test("should render default content when dataUser is empty", () => {
    render(
      <Table
        dataUser={[]}
        handleDeleteUser={handleDeleteUser}
        handleSort={handleSort}
        isFilesColors={true}
      />,
    );

    const defaultContent = screen.getByText("No results found");

    expect(defaultContent).toBeDefined();
  });
});
