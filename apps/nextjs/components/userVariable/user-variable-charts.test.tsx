import { render, screen, waitFor } from "@testing-library/react";
import { UserVariableCharts } from "./user-variable-charts";
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
    name: "Mock Variable",
    charts: {
      // Mock chart data
    },
  },
];

describe("UserVariableCharts", () => {
  it("renders charts correctly with data", async () => {
    render(<UserVariableCharts variableId={1} />);
    
    await waitFor(() => {
      expect(screen.getByText("Mock Variable")).toBeInTheDocument();
      // Assert charts are rendered
    });
  });

  it("renders loading spinner", () => {
    render(<UserVariableCharts variableId={1} />);
    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
  });

  it("handles fetch error", async () => {
    global.fetch.mockImplementationOnce(() => Promise.reject("API Error"));
    render(<UserVariableCharts variableId={1} />);
    
    await waitFor(() => {
      expect(screen.getByText("Error fetching user variables")).toBeInTheDocument();
    });
  });
});