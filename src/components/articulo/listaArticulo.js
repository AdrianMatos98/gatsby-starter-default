import React, { useState, useEffect } from "react"
import axios from "axios"
import { MiniaturaArticulo } from "./MiniaturaArticulo"
import { resp } from "../llamada"
import { Button, Col, Form } from "react-bootstrap"
import '../../styles/style.scss'

const ListaArticulo = ({ data }) => {
  const handleChange = event => {
    this.setState({ name: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()

    const user = {
      titulo: "titulo 13",
      descripcion: "descripcion 13",
    }

    axios.post(`http://localhost:1337/articulos`, user).then(res => {
      console.log("posteo")
      console.log(res.data)
      setListaGet(c => [...c, res.data])
    })
  }
  const [listaGet, setListaGet] = useState([])

  useEffect(() => {
    resp().then(resp => {
      setListaGet(resp)
    })
  }, [setListaGet])

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <Col></Col>
          <label>
            Person Name:
            <input type="text" name="name" onChange={handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>

        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      ListaArticulo
      {data.allStrapiArticulo.edges.map(({ node }) => (
        <MiniaturaArticulo
          key={node.strapiId}
          titulo={node.titulo}
          descripcion={node.descripcion}
        />
      ))}
      <div></div>
      <div>
        {listaGet &&
          listaGet.map(data => (
            <MiniaturaArticulo
              key={data.id}
              titulo={data.titulo}
              descripcion={data.descripcion}
            />
          ))}
      </div>
    </div>
  )
}

export default ListaArticulo
