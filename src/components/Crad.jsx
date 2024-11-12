import React from 'react'

export default function Card({Co, using, Accept, Deny}) {
  return (
    <div>
    
      <div className="my-5 border card bg-neutral text-neutral-content w-96">
        <div className="card-body items-center">
    <h2 className="card-title">{Co}</h2>
    <p>{using}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-warning">{Accept} eta change koiro na</button>
      <button className="btn btn-ghost">{Deny}</button>
    </div>
      </div>
      </div>
    </div>
    
  )
}
