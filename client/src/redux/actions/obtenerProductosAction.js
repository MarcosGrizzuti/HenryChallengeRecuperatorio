import { OBTENER_PRODUCTOS } from "../types"
import axios from "axios";

export const obtenerProductos = (query) => async (dispatch) => {
    const fetch = await axios.get(`http://localhost:3001/api/search?query=${query}`);

    try {
        dispatch({
            type: OBTENER_PRODUCTOS,
            payload: fetch.data,
        });
    } catch(err) {
        console.log(err)
    }
}