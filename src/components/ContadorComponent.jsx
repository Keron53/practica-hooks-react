import React from 'react'
import { useCounter } from '../hooks/useCounter'

export const ContadorComponent = () => {
    const { contador, incrementar, decrementar, resetear} = useCounter(0)

  return (
    <>
        <h1> Contador: {contador}</h1>
        <button className="btn btn-primary" onClick={() => incrementar(1)}> +1 </button>
        <button className="btn btn-danger" onClick={() => resetear()}> reset </button>
        <button className="btn btn-primary" onClick={() => decrementar(1, false)}> -1 </button>
    </>
  )
}
