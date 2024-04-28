import { render, screen } from "@testing-library/react"
import { authOptions } from "@/lib/auth"
import MeasurementsPage from "./page"

describe("MeasurementsPage", () => {
  it("redirects unauthenticated users to sign-in page", async () => {
    // Mock getCurrentUser to return null
    const mockGetCurrentUser = jest.fn().mockResolvedValue(null)
    jest.mock("@/lib/session", () => ({
      getCurrentUser: mockGetCurrentUser
    }))
    
    render(<MeasurementsPage params={{}} searchParams={{}} />)

    expect(mockGetCurrentUser).toHaveBeenCalled()
    expect(window.location.pathname).toBe(authOptions?.pages?.signIn || "/signin")
  })

  it("renders measurements list for authenticated user", async () => {
    // Mock getCurrentUser to return a user object
    const mockGetCurrentUser = jest.fn().mockResolvedValue({ id: "123" })
    jest.mock("@/lib/session", () => ({
      getCurrentUser: mockGetCurrentUser
    }))

    render(<MeasurementsPage params={{}} searchParams={{ from: "2023-01-01", to: "2023-12-31" }} />)
    
    expect(mockGetCurrentUser).toHaveBeenCalled()
    expect(screen.getByText("Measurements")).toBeInTheDocument()
    expect(screen.getByText("Here are your recent measurements.")).toBeInTheDocument()
  })
})