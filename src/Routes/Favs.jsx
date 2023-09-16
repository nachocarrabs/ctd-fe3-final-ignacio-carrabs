import React from "react";
import Card from "../Components/Card";
import { useGlobalContext } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const {setArr} = useGlobalContext()
  const favourites = JSON.parse(localStorage.getItem("arr"))

  const clearFav = () =>{
    setArr(localStorage.setItem("arr", JSON.stringify([])))
  };


  return (
    <div className="favVista">
      <h1>Dentistas favoritos</h1>
      <div className="card-grid" >
        {favourites.map((favs) =>
        <Card key = {favs.id} name={favs.name} username={favs.username} id={favs.id} showButton={false} />
        )}
      </div>
        <button onClick={clearFav} className="btn-deleteFav"> Borrar favoritos </button>
    </div>
  );
};

export default Favs;
