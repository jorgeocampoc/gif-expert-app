
export const Historial = ({categories}) => {
  console.log(categories);
  return (
    <div className={` h-100 col-12 ms-2 text-white rounded border  mt-2 bg-primary  ` }>
    <h5 className=" mt-3  text-sm text-md text-lg text-xl text-xxs text-xxxs text-center bg-primary ">
      Historial de búsquedas
    </h5>
    <hr />
    <div className="overflow-auto bg-primary ">
      <ol className="bg-primary">
        {categories.map((cat) => (
          <li key={cat} className="bg-primary fs-5 text-sm text-md text-lg text-xl text-xxs text-xxxs ">
            {cat}
          </li>
        ))}
      </ol>
    </div>
  </div>
  
  )
}
