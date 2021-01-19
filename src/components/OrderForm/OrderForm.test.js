import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import OrderForm from "./OrderForm.js";

describe("OrderForm", () => {

  it("Should Display ingredient buttons", () => {
    render(<OrderForm />)

    const beansButton = screen.getByText('beans')
    const steakButton = screen.getByText('steak')
    const carnitasButton = screen.getByText('carnitas')
    const sofritasButton = screen.getByText('sofritas')
    const lettuceButton = screen.getByText('lettuce')
    const quesoButton = screen.getByText('queso fresco')
    const picoButton = screen.getByText('pico de gallo')
    const sauceButton = screen.getByText('hot sauce')
    const guacamoleButton = screen.getByText('guacamole')
    const jalapenosButton = screen.getByText('jalapenos')
    const cilantroButton = screen.getByText('cilantro')
    const sourCreamButton = screen.getByText('sour cream')

    expect(beansButton).toBeInTheDocument()
    expect(steakButton).toBeInTheDocument()
    expect(carnitasButton).toBeInTheDocument()
    expect(sofritasButton).toBeInTheDocument()
    expect(lettuceButton).toBeInTheDocument()
    expect(quesoButton).toBeInTheDocument()
    expect(picoButton).toBeInTheDocument()
    expect(sauceButton).toBeInTheDocument()
    expect(guacamoleButton).toBeInTheDocument()
    expect(jalapenosButton).toBeInTheDocument()
    expect(cilantroButton).toBeInTheDocument()
    expect(sourCreamButton).toBeInTheDocument()

  })
})