import React, { useState, useEffect } from "react"
import axios from "axios"
import { MiniaturaArticulo } from "./MiniaturaArticulo"
import { resp } from "../llamada"
import { useForm } from "../../hooks/useForm"

const ListaArticulo = ({ data }) => {
  const handleSubmit = event => {
    event.preventDefault()

    // console.log(values)

    if (update.update) {
      axios
        .put(
          `https://strapi-backend-app.herokuapp.com/articulos/${update.id}`,
          values
        )
        .then(res => {
          console.log("update")
          console.log(res.data)
          setListaGet(c =>
            c.map(item => {
              return item.id === update.id
                ? (item = { ...item, ...values })
                : item
            })
          )

          setUpdate({ id: null, update: false })
        })
    } else {
      axios
        .post(`https://strapi-backend-app.herokuapp.com/articulos`, values)
        .then(res => {
          console.log("posteo")
          console.log(res.data)
          setListaGet(c => [...c, res.data])
        })
    }

    reset()
  }

  const handleDelete = id => {
    axios
      .delete(`https://strapi-backend-app.herokuapp.com/articulos/${id}`)
      .then(res => {
        console.log("delete")
        setListaGet(c =>
          c.filter(item => {
            return item.id !== id
          })
        )
      })
  }

  const handleSetUpdate = id => {
    const a = { ...listaGet.find(item => item.id === id) }
    reset({ titulo: a.titulo, descripcion: a.descripcion })
    setUpdate({ id: id, update: true })
  }

  const [listaGet, setListaGet] = useState([])

  const [update, setUpdate] = useState({
    id: null,
    update: false,
  })

  const [values, handleInputChange, reset] = useForm({
    titulo: "",
    descripcion: "",
  })

  const { titulo, descripcion } = values

  useEffect(() => {
    resp().then(resp => {
      setListaGet(resp)
    })
  }, [setListaGet])

  return (
    <div className="col listaArticulo">
      <div className="row">
        <p>{update.update ? "Actualizando articulo" : "Agregando articulo"}</p>
        <form className="col-10 mx-auto mt-3" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="forTitulo">Titulo</label>
            <input
              type="text"
              className="form-control"
              id="forTitulo"
              placeholder="Titulo"
              name="titulo"
              value={titulo}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="formDescripcion">Descripción</label>
            <textarea
              className="form-control"
              id="formDescripcion"
              placeholder="Descripción"
              rows="3"
              name="descripcion"
              value={descripcion}
              onChange={handleInputChange}
            ></textarea>
          </div>

          <button className="btn btn-primary" type="submit">
            Enviar
          </button>
        </form>
      </div>

      <div>
        <p>ListaArticulo</p>
      </div>
      {/* <div className="row">
        <div className="col">
          {data.allStrapiArticulo.edges.map(({ node }) => (
            <MiniaturaArticulo
              key={node.strapiId}
              titulo={node.titulo}
              descripcion={node.descripcion}
            />
          ))}
        </div>
      </div> */}

      <div className="row">
        <div className="col">
          {listaGet &&
            listaGet.map(data => (
              <MiniaturaArticulo
                key={data.id}
                id={data.id}
                titulo={data.titulo}
                descripcion={data.descripcion}
                handleDelete={handleDelete}
                handleSetUpdate={handleSetUpdate}
              />
            ))}
        </div>
      </div>
    </div>
  )
}

{
  /* </div>
  
  
</div> */
}
export default ListaArticulo
