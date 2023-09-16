import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./utils/global.context";

const Card = ({ name: cardname, username, id, showButton }) => {
  const { setArr } = useGlobalContext();
  const [selectedDentist, setSelectedDentist] = useState();
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;

  useEffect(() => {
    fetch (url)
      .then((res) => res.json())
      .then((data) => setSelectedDentist(data));
  }, [url]);

  const addFav = () => {
    const array = JSON.parse(localStorage.getItem('arr'));
    const existsDentist = array.find((element) => element.id === selectedDentist.id);

    if (existsDentist) {
      console.log('No se puede agregar el dentista');
    } else {
      console.log('Se agrego el dentista');
      array.push(selectedDentist);
      localStorage.setItem('arr', JSON.stringify(array));
      setArr(array);
    }
  }

  const removeCard = () => {
    const array = JSON.parse(localStorage.getItem('arr'));
    const index = array.findIndex((element) => element.id === selectedDentist.id);
    if (index > -1) {
      array.splice(index, 1);
      localStorage.setItem('arr', JSON.stringify(array));
      setArr(array);
    }
  };



  
  return (
    <div className = "card">
      <Link key={id} to={`/dentist/${id}`}>
        <div>
          <img className="card-img" src="/images/doctor.jpg" alt="doctor" width={200}/>
          <h4>{cardname}</h4>
          <h3>{username}</h3>
        </div>
      </Link>
      { showButton ? 
          <button onClick={addFav} className="favButton">
            Añadir a favoritos
          </button> : 
          <button onClick={removeCard} className="favButton">
            Eliminar de favoritos
          </button>
      }
    </div>
  );
};

export default Card;