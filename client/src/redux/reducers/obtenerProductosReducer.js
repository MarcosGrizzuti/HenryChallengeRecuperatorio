import { OBTENER_PRODUCTOS, FILTRAR_PRODUCTOS_CONDICION, FILTRAR_PRODUCTOS_ORDEN } from "../types"

const initialState = {
  productos: [],
};

export function productosReducer(state = initialState, action) {
    switch (action.type) {
        case OBTENER_PRODUCTOS:
            return {
                ...state,
                productos: action.payload,
            };
        case FILTRAR_PRODUCTOS_CONDICION:
            return {
                ...state,
                productos: action.payload,
            };
        case FILTRAR_PRODUCTOS_ORDEN:
            return {
                ...state,
                productos: action.payload,
            };
        default:
            return state;
    }
}