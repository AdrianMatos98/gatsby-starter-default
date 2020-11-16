import React from "react"

export const MiniaturaArticulo = ({
  id,
  titulo,
  descripcion,
  handleDelete,
  handleSetUpdate,
}) => {
  return (
    <div className="card mb-2 col-12">
      {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
      <div className="card-body">
        <h5 className="card-title">{titulo}</h5>
        <p className="card-text">{descripcion}</p>
        <button className="btn btn-primary" onClick={() => handleSetUpdate(id)}>
          update
        </button>
        <button className="btn btn-danger ml-2" onClick={() => handleDelete(id)}>
          Delete
        </button>
      </div>
    </div>
  )
}
