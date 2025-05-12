import { render, screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import "@testing-library/jest-dom"
import MOCK_DATA from "../mocks/resCardDate.json"

test("it should render the RestaurantCard component with mock data", () => {
render(<RestaurantCard resData={MOCK_DATA} />)

const resCard = screen.getByText("Beanlore Coffee Roasters")

expect(resCard).toBeInTheDocument()
})