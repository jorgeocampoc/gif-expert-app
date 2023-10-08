import { GiftItem } from "./GiftItem";
import { useFetchGifts } from "../hooks/useFetchGifts";



export const GifGrid = ( { category } ) => {
  const { images, isLoading } = useFetchGifts( category );

  return (
    <>
    <h3>{ category }</h3>
    {
      //if corto 
      isLoading && ( <h2> Is loading .... </h2> )
    }
    <div className="card-grid">
     {
        images.map( (img) => (

           <GiftItem 
            key={img.id}
            { ...img}
           />
        ))
        } 

    </div>
    </>
  )
}
