import { useState } from "react"

export const AddCategory = ( { onNewCategory } ) => {
    const [inputValue, setInputValue] = useState('');
    const onInputChange = ({ target }) =>{
        setInputValue( target.value )
    }
    const onSubmit = ( event )=>{
        //event.preventdefaul = para que cuando se envie la informacion no aga refresh
        event.preventDefault();
        const valueInput = inputValue.trim(); 
        return ( valueInput.length < 1 )? '' :
      /*   setCategories( categories => [inputValue, ...categories], setInputValue(''))  */
      onNewCategory( valueInput ), setInputValue('');
        
    }

    return (
       <div className="col-12 mb-2 ">
         <form onSubmit={ onSubmit }>
            <input type="text"
                placeholder="Search gifs"
                value = { inputValue }
                //cuando se manda solo un parametro no es nesesario mandar ela rgumento event
                onChange={ onInputChange }
            />
        </form>
       </div>
        
    )
}
