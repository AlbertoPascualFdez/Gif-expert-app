import { GifItem } from "./GifItem";
import { useFetchHook } from "../hooks/useFetchHook";


export const GifGrid = ({category}) => {

//    const [images, setImages]  = useState([])

    const {images, isLoading} = useFetchHook(category);

    //no se debe poner la ejecucion de una funcion directamente en un functional component, ya que se ejecutara cada vez que se re renderice, y puede que no queramos eso.
    //getGifs(category);

//    const getImages = async() =>{
//        const newImages = await getGifs(category);
//        console.log("hola", newImages);
//        setImages(newImages);
//    }

    //se ejecuta en determinadas situaciones (cuando cambia el valor de una variable, en el primer renderizado, etc)
//    useEffect(() =>{
            //opcion 1
           // getGifs(category).then(newImages => setimages(newImages));

           //opcion 2
//           getImages();
//        },
//        [] //dependencias vacias -> se ejecuta solo una vez
//    )

    return (
        <>
            <h3>{category}</h3>

            {
                //isLoading ? (<h2>Cargando...</h2>): null
                isLoading && (<h2>Cargando...</h2>)
            }
            

            <div className="card-grid">
                {
                images.map((image) => (
                //images.map(({id, title}) => (
                   /*  <li key={id}>{title}</li> */
                   <GifItem key={image.id} {...image}/>//manda todas las propiedades que tenga el objeto image
                ))
                }
            </div>
 
        </>
    )
}
