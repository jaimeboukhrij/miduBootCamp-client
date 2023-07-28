import React from "react"
import "@testing-library/jest-dom/extend-expect"
import { fireEvent, getAllByText, getByText, render } from "@testing-library/react"
import Note from "./Note"

test("renders content", () => {
  const note = {
    content: "This is a test",
    important: true
  }

  const component = render(<Note note={note} />)
  component.getByText("This is a test")
  component.getByText("make not important")
})

test("clicking the button calls event handler once", () => {
  const note = {
    content: "This is a test",
    important: true
  }
  const component = render(<Note note={note} toggleImportance={() => { }} />)

  const button = component.getByText("make not important")
  fireEvent.click(button)
})

