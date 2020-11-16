import React from "react"
import ListaArticulo from "../components/articulo/listaArticulo"
import Layout from "../components/layout"

const dashboard = ({ data }) => {
  return (
    // <Layout>
    <div className="container">
      <div className="col-6">
        <ListaArticulo data={data} className="row-cols-4" />
      </div>
    </div>
    // </Layout>
  )
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
