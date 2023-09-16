import React from 'react'
import { useGlobalContext } from '../Components/utils/global.context'
import { useParams } from 'react-router-dom';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico}

  const { apiState } = useGlobalContext();
  const paramsId = useParams();
  const dentist = apiState.find ((d) => paramsId.id === d.id)

  return (
    <>
      <h1>Detalles de {dentist.id} </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone number</th>
          <th>Website</th>
        </tr>
        <tr>
          <td> {dentist.name} </td>
          <td> {dentist.email} </td>
          <td> {dentist.phone} </td>
          <td> {dentist.website} </td>
        </tr>
      </table>
    </>
  )
}

export default Detail