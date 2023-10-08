import { useState } from "react"
import { AddCategory, GifGrid } from "./components" // metodo barril, lo primero que llama la carpeta compoenent es a index

export const GiftExpertApp = () => {
  const api = 'ukGGFOm5uTAiGpaxD6JW2wFIYC1HE9T6'

  const [ categories, setCategories ] = useState( [''] )
  const onAddCategory = ( newCategory ) =>{
    return ( categories.includes( newCategory ) )? alert( `${newCategory} is already exists` ):
    setCategories([ newCategory, ...categories ])
  }


  return (
    <>
    <h1>GiftExpertApp</h1>
    <AddCategory onNewCategory = { onAddCategory }
     /* setCategories = {setCategories}  *//
     > 
      { categories.map(category =>
         <GifGrid key={ category } category={ category } />
    ) }
    </>
  )
}
