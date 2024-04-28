import { render, screen, waitFor } from "@testing-library/react"
import { MeasurementsList } from "./measurements-list"

const mockUser = { id: "123" }

describe("MeasurementsList", () => {
  beforeEach(() => {
    // Mock fetch to return sample measurements data
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue([
        { id: 1, variableId: 100, startAt: "2023-06-01" },
        { id: 2, variableId: 100, startAt: "2023-06-02" },
      ])
    })
  })

  it("fetches and renders measurements correctly", async () => {
    render(
      <MeasurementsList 
        user={mockUser}
        variableId={100}
        measurementsDateRange={{ from: "2023-06-01", to: "2023-06-30" }}
      />
    )

    await waitFor(() => expect(screen.getByText("Measurements")).toBeInTheDocument())
    expect(fetch).toHaveBeenCalledWith(expect.stringContaining("/api/dfda/measurements?variableId=100&earliestMeasurementTime=2023-06-01&latestMeasurementTime=2023-06-30"))
  })

  it("fetches all measurements when variableId not provided", async () => {
    render(
      <MeasurementsList
        user={mockUser} 
        measurementsDateRange={{ from: "", to: "" }}
      />
    )
    
    await waitFor(() => expect(screen.getByText("Measurements")).toBeInTheDocument())
    expect(fetch).toHaveBeenCalledWith("/api/dfda/measurements")
  })

  it("shows loading state while fetching data", () => {
    render(
      <MeasurementsList
        user={mockUser}
        measurementsDateRange={{ from: "", to: "" }} 
      />
    )

    expect(screen.getByText("Loading...")).toBeInTheDocument()
  })

  it("shows no data message when measurements are empty", async () => {
    global.fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue([])
    })

    render(
      <MeasurementsList
        user={mockUser}
        measurementsDateRange={{ from: "", to: "" }}
      />
    )

    await waitFor(() => expect(screen.getByText("No data found.")).toBeInTheDocument())
  })
})