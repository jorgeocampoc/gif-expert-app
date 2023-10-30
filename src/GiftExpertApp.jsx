import { useState } from "react";
import { AddCategory, GifGrid } from "./components"; // metodo barril, lo primero que llama la carpeta compoenent es a index
import { Historial } from "./components/Historial";

export const GiftExpertApp = () => {
  const api = "ukGGFOm5uTAiGpaxD6JW2wFIYC1HE9T6";

  const [categories, setCategories] = useState([]);
  const onAddCategory = (newCategory) => {
    return categories.includes(newCategory)
      ? alert(`${newCategory} is already exists`)
      : setCategories([newCategory, ...categories]);
  };

  return (
    <div className="bg-dark ">
      <div className="bg-dark pt-5 pb-2">
      <h1 className="text-white titleP bg-dark" style={{ textAlign: "center" }}>
        GIFT APP
      </h1>
      </div>

     <div className="row  mt-3  pt-3 ps-3  m-1 ">
        
        <div className="col-11 col-sm-8 col-md-9 container-fluid border bg-primary p-4 rounded mb-3  ">
        <AddCategory onNewCategory={onAddCategory} />
        <div className="row text-white  ">
          {categories.map((category) => (
            <GifGrid key={category} category={category} />
          ))}
        </div>
        </div>
        <div className="col-11 col-sm-3 col-md-2  ps-2 pe-4 pb-4 pt-2 ms-3 bg-primary border rounded  mb-3 me-4  ">
          <Historial categories={categories} />
        </div>
      </div>

    </div>
  );
};
