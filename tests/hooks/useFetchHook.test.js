import { renderHook, waitFor } from "@testing-library/react"
import { useFetchHook } from "../../src/hooks/useFetchHook"

describe('UseFetchHook', () => {
  
    test('Debe devolver el estado inicial', () => {
      
        const { result } = renderHook(() => useFetchHook("One Punch"));
        console.log(result);

        const {images, isLoading} = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    })

    test('Debe devolver array imaganes y isLoading a false', async () => {
      
        const { result } = renderHook(() => useFetchHook("One Punch"));

        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0),
           /*  {
                timeout: 1000
            } */
        )

        const {images, isLoading} = result.current;
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();



    })
    
    
})
