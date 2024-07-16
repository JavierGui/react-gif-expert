import { render } from "@testing-library/react"
import { GifItem } from "../../src/components"

describe('Pruebas en GifItem', () => { 

    const title = 'gojo';
    const url = 'https//jose-juan.com/saitama.jpg';

    test('Hacer match con el snapshot', () => { 

        const {container} = render(<GifItem title= {title} url= {url} />);
        expect( container ).toMatchSnapshot();

     });


     

 })