import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components"

describe('<GifItem>', () => {

    const title = "Saitama";
    const url = "https://one-punch/"
    
    test('Match con el snapshot', () => {
        const {container} = render(<GifItem title={title} url={url} />);

        expect(container).toMatchSnapshot();
    })

    test('Url y alt indicado', () => {
        render(<GifItem title={title} url={url} />);
        
        const {src, alt} = screen.getByRole("img");
        expect(src).toBe(url);
        expect(alt).toBe(title);
    })

    test('Title aparece', () => {
        render(<GifItem title={title} url={url} />);

        expect(screen.getByText(title)).toBeTruthy();
    })
    
    
    
})