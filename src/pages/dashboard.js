import React from "react"
import ListaArticulo from "../components/articulo/listaArticulo"

const dashboard = ({ data }) => {
  return <ListaArticulo data={data}/>
}

export default dashboard
export const pageQuery = graphql`
  query IndexQuery {
    allStrapiArticulo {
      edges {
        node {
          strapiId
          titulo
          descripcion
        }
      }
    }
  }
`