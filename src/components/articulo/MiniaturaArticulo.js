import React, { useState } from "react"
import { Media, Col } from "react-bootstrap"

export const MiniaturaArticulo = ({titulo, descripcion }) => {

    const [listaGet, setListaGet] = useState([])

  return (
    <Media>
      <Media.Body>
        <Col>
          <p>{titulo}</p>
          <p>{descripcion}</p>
        </Col>
      </Media.Body>
    </Media>
  )
}
