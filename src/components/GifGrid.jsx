import { GiftItem } from "./GiftItem";
import { useFetchGifts } from "../hooks/useFetchGifts";



export const GifGrid = ( { category } ) => {
  const { images, isLoading } = useFetchGifts( category );
 
  return (
    <div className="  col-sm-12  bg-primary">
      <hr />
    <h3 className="fs-2 text-sm text-md text-lg text-xl text-xxs text-xxxs text-center pb-2 bg-primary"> { category } </h3>
    {
      //if corto 
      isLoading && ( <h2 className="text-center "> Is loading .... </h2> )
    }
    <div className="card-grid bg-primary">
     {
      images.length!== 0 ?(
        images.map( (img) => (

          <GiftItem 
           key={img.id}
           { ...img}
          />
       ))
      ): !isLoading &&<p className="p-5 bg-primary">No se obtuvo ningun resultado en la busqueda</p> 
        } 

    </div>
    </div>
  )
}
