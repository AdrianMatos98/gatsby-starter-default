import axios from "axios"
export const resp = async () => {
  try {
    const resp = await axios.get(`http://localhost:1337/articulos`)
    console.log("fetch")
    console.log(resp)
    if (resp.status === 200) {
      return resp.data
    } else {
      // throw await resp.json();
      return null
    }
  } catch (err) {
    throw err
  }
}
