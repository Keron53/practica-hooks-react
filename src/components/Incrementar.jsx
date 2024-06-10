import React from "react"

export const Incrementar = React.memo(({ Incrementar }) => {

    console.log('me estoy redibujando')

  return (
    <button className="btn btn-primary" onClick={() => Incrementar(10)}> +1</button>
  )
}
)