import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render Header component with Login button", () => {
    render(<BrowserRouter>
    <Provider store = {appStore}>
    <Header />
    </Provider>
    </BrowserRouter>);

    // const loginButton =screen.getByText("Login");
    const loginButton =screen.getByRole("button", {name: "Login"});

    expect(loginButton).toBeInTheDocument();
})

it("Should render Header component with Card", () => {
    render(<BrowserRouter>
    <Provider store = {appStore}>
    <Header />
    </Provider>
    </BrowserRouter>);

    const cartItem =screen.getByText(/Cart/);
    expect(cartItem).toBeInTheDocument();
})

it("Should render Header component with Login/logout button", () => {
    render(<BrowserRouter>
    <Provider store = {appStore}>
    <Header />
    </Provider>
    </BrowserRouter>);

    const loginButton =screen.getByRole("button", {name: "Login"});
    fireEvent.click(loginButton);
    const logoutButton =screen.getByRole("button", {name: "Logout"});
    expect(logoutButton).toBeInTheDocument();
})
