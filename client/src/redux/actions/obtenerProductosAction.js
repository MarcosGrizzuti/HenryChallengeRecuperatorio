import { OBTENER_PRODUCTOS, FILTRAR_PRODUCTOS_CONDICION, FILTRAR_PRODUCTOS_ORDEN, FILTRAR_PRODUCTOS_POR_CANTIDAD } from "../types"
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

export const filtrarProductosOrden = (query, orden) => async (dispatch) => {
    const fetch = await axios.get(`http://localhost:3001/api/search?query=${query}`);
    if(orden == "menor") {
        fetch.data.sort((a, b) => {
            if(a.price < b.price) {
                return -1;
            }
            if(b.price < a.price) {
                return 1;
            }
            return 0;
        })
    } else {
        fetch.data.sort((a, b) => {
            if(b.price < a.price) {
                return -1;
            }
            if(a.price < b.price) {
                return 1;
            }
            return 0;
        })
    }

    try {
        dispatch({
            type: FILTRAR_PRODUCTOS_ORDEN,
            payload: fetch.data,
        });
    } catch(err) {
        console.log(err)
    }
}

export const filtrarProductosCondicion = (query, condicion) => async (dispatch) => {
    const fetch = await axios.get(`http://localhost:3001/api/search?query=${query}`);
    if(condicion == "new") {
        var productoFiltrado = fetch.data.filter((product) => {
            return product.condition == "new";
        })
    } else {
        var productoFiltrado = fetch.data.filter((product) => {
            return product.condition == "used";
        })
    }

    try {
        dispatch({
            type: FILTRAR_PRODUCTOS_CONDICION,
            payload: productoFiltrado,
        });
    } catch(err) {
        console.log(err)
    }
}

export const filtrarProductosPorCantidad = (query, condicion) => async (dispatch) => {
    const fetch = await axios.get(`http://localhost:3001/api/search?query=${query}`);
    if(condicion === "hasta30") {
        var productoFiltrado = fetch.data.slice(0, 30)
    } else if(condicion === "pagina2") {
        var productoFiltrado = fetch.data.slice(30, )
    } else {
        var productoFiltrado = fetch.data
    }

    try {
        dispatch({
            type: FILTRAR_PRODUCTOS_CONDICION,
            payload: productoFiltrado,
        });
    } catch(err) {
        console.log(err)
    }
}
