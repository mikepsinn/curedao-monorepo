import { render, screen, waitFor } from "@testing-library/react";
import { UserVariableList } from "./user-variable-list";
import { UserVariable } from "@/types/models/UserVariable";

// Mock the fetch request
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockUserVariableData),
  })
) as jest.Mock;

const mockUserVariableData: UserVariable[] = [
  {
    id: 1,
    name: "Mock Variable 1",
  },
  {
    id: 2,
    name: "Mock Variable 2",
  },
];

describe("UserVariableList", () => {
  it("renders list of user variables", async () => {
    render(<UserVariableList user={{ id: "1" }} searchParams={{}} />);
    
    await waitFor(() => {
      expect(screen.getByText("Mock Variable 1")).toBeInTheDocument();
      expect(screen.getByText("Mock Variable 2")).toBeInTheDocument();
    });
  });

  it("renders loading spinner", () => {
    render(<UserVariableList user={{ id: "1" }} searchParams={{}} />);
    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
  });

  it("handles empty list", async () => {
    global.fetch.mockImplementationOnce(() =>
      Promise.resolve({
        json: () => Promise.resolve([]),
      })
    );
    render(<UserVariableList user={{ id: "1" }} searchParams={{}} />);
    
    await waitFor(() => {
      expect(screen.getByText("Get Started!")).toBeInTheDocument();
    });
  });

  it("handles fetch error", async () => {
    global.fetch.mockImplementationOnce(() => Promise.reject("API Error"));
    render(<UserVariableList user={{ id: "1" }} searchParams={{}} />);
    
    await waitFor(() => {
      expect(screen.getByText("Error fetching user variables")).toBeInTheDocument();
    });
  });
});