import { OBTENER_PRODUCTOS } from "../types";

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
        default:
            return state;
    }
}