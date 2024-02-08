import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components"

describe('<AddCategory/>', () => {
  
    test('Cambio de texto en el input', () => {
        
        render(<AddCategory onNewCategory={ () => {}}/>)

        const input = screen.getByRole("textbox");

        fireEvent.input(input, {target: {value: "Saitama"}});

        expect(input.value).toBe("Saitama");

    })

    test('Debe llamar onNewCategory si input tiene valor', () => {
      
        const inputValue = "Saitama";

        const onNewCategory = jest.fn();
        //es un mock, una simulacion de una funcion


        render(<AddCategory onNewCategory={onNewCategory}/>)

        const input = screen.getByRole("textbox");
        const form = screen.getByRole("form");

        fireEvent.input(input, {target: {value: "Saitama"}});

        fireEvent.submit(form);

        expect(input.value).toBe("");

        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);

    })

    test('No debe llamar a onNewCategory si input vacio', () => {

        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory}/>)

        const form = screen.getByRole("form");
        fireEvent.submit(form);

        //expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalled();

      
    })
    
       
})
