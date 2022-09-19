import React from 'react'

export default function Total({valor,color}) {
  return (
    <><h4 style={{ "--col": color }}>{valor}%</h4>
      <svg width="200" height="200">
      <circle cx="50%" cy="50%" r="80"></circle>
      <circle cx="50%" cy="50%" r="80" style={{ "--per": valor, "--col": color }}></circle>

    </svg></>
  )
}
