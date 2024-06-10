import { Incrementar } from './Incrementar'
import { useCallback, useState } from 'react'

export const CallBackComponent = () => {

    const [counter, setCounter] = useState(0)

    const IncrementarPadre = useCallback( 
        (val) =>{
        setCounter(contador => contador + val)
    },[])
  return (
    <>
        <h1>Contador: {counter} </h1>
        <Incrementar Incrementar={IncrementarPadre}></Incrementar>
    </>
  )
}
