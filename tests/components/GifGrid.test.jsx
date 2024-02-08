import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components"
import { useFetchHook } from "../../src/hooks/useFetchHook"

//mock de un hook personalizado
jest.mock("../../src/hooks/useFetchHook");

describe('<GifGrid/>', () => {

    const category = "One Punch"
  
    test('Debe mostrar el loading inicialmente', () => {

        useFetchHook.mockReturnValue({
            images: [],
            isLoading: true
        })

        render(<GifGrid category={category}/>);

        expect(screen.getByText("Cargando..."));

        expect(screen.getByText(category));

        //screen.debug()
      
    })

    test('Debe mostrar items cuando se cargan las imagenes', () => {

        const gifs = [
            {
                id:"abc",
                title:"Saitama",
                url: "saitama.png",
            },
            {
                id:"123",
                title:"Goku",
                url: "goku.png",
            }
        
        ]

        useFetchHook.mockReturnValue({
            images: gifs,
            isLoading: false
        })

        render(<GifGrid category={category}/>);

        expect(screen.getAllByRole("img").length).toBe(2);
      
    })
    
    
})
