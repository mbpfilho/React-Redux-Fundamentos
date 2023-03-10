/* eslint-disable import/no-anonymous-default-export */
import React from "react"

export default props=>{
  const min = Math.ceil(props.min);
  const max = Math.floor(props.max);
  const aleatorio=Math.floor(Math.random()*(max - min) + min);
  return(
    <div>
      <h2>Valor Aleatório</h2>
      <p><strong>Valor Mínimo: </strong>{min}</p>
      <p><strong>Valor Máximo: </strong>{max}</p>
      <p><strong>Valor Escolhido: </strong>{aleatorio}</p>
    </div>
  )
}