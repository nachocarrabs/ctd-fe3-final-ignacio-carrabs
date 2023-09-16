import React from 'react'
import Form from '../Components/Form'
import "../Styles/contactStyles.css"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div className="contact vista" >
      <h2>Querés saber más?</h2>
      <p>Envianos tus dudas y te contactaremos</p>
      <Form/>
    </div>
  )
}

export default Contact