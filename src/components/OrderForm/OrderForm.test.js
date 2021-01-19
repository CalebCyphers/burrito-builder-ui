import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import OrderForm from "./OrderForm.js";
import { postOrder } from '../../apiCalls';
jest.mock('../../apiCalls.js')

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

  it("should display a submit button", () => {
    render(<OrderForm />)

    const submitButton = screen.getByText('Submit Order')

    expect(submitButton).toBeInTheDocument()
  })

  it("should display error handling if no ingredients are added", () => {
    render(<OrderForm />)

    const errorMessage = screen.getByText('Order: Nothing selected')

    expect(errorMessage).toBeInTheDocument()
  })

  it("should display an ingredient once an ingredient button is clicked", () => {
    render(<OrderForm />)

    const steakButton = screen.getByText('steak')

    fireEvent.click(steakButton)

    const selectedIngredient = screen.getByText('Order: steak')

    expect(selectedIngredient).toBeInTheDocument()
  })
})