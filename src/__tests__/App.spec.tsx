import '@testing-library/jest-dom'
import { render, screen, fireEvent } from "@testing-library/react"
import App from '../App'

test("Renders the main page", () => {
    const { container } = render(<App />)

    const heading = screen.getByText(/Testing with React/i);
    expect(heading).toBeInTheDocument();


    const greeting = screen.getByText(/Hello Aaron/);
    expect(greeting).toBeInTheDocument();

    const greetings = container.querySelectorAll(".greeting");
    expect(greetings.length).toEqual(2);
    expect(greetings[0].textContent).toContain("Aaron")
    expect(greetings[1].textContent).toContain("Julian")
})

test("Counter starts at zero", async () => {
    const { container } = render(<App />)
    const button = container.querySelector("button")
    expect(button).toBeInTheDocument();
    expect(button?.textContent).toEqual("count is 0");
})

test("Counter increments when clicked", () => {
    render(<App />)
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(button?.textContent).toEqual("count is 1");
})