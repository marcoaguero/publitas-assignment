export const initialState =
    JSON.parse(localStorage.getItem("cart_items")) || {
        products: [],
        total: 0
    }


const shopReducer = (state, action) => {


    const { type, payload } = action;

    switch (type) {

        case "ADD_TO_CART": {

            return { ...state, products: payload.products }

        }

        case "UPDATE_QUANTITY_CART": {
            return { ...state, products: payload.products }
        }
        case "REMOVE_FROM_CART": {
            return { ...state, products: payload.products }
        }

        case "CALCULATE_TOTAL_PRICE": {
            return { ...state, total: payload.total }
        }

        case "CLEAR_CART": {
            return { initialState }
        }

        default: {
            throw new Error(`Unknown action type: ${type}`)
        }

    }



}


export default shopReducer;