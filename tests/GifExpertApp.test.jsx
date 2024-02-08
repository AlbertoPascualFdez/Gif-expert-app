import { fireEvent, render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

describe('<GifExpertApp/>', () => {
  
    test('Nueva categoria ', () => {

        render(<GifExpertApp/>)

        const input = screen.getByRole("textbox");
        const form = screen.getByRole("form");

        fireEvent.input(input, {target: {value: "Saitama"}});

        fireEvent.submit(form);

       // screen.debug();

        expect(screen.getByText("Saitama"));
    })

    test('Ya existia categoria ', () => {

        render(<GifExpertApp/>)

        const input = screen.getByRole("textbox");
        const form = screen.getByRole("form");

        fireEvent.input(input, {target: {value: "One Punch"}});

        fireEvent.submit(form);

       // screen.debug();

       //si la cat ya existia no se debe volver a poner
        expect(screen.getAllByText("One Punch").length).toBe(1);
    })
    
})
