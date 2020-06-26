export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const DELETE_FROM_CART = 'DELETE_FROM_CART'
export const DELETE_ALL = 'DELETE_ALL'

export const addToCart = product => {
    return { type: ADD_TO_CART, product: product }
}

export const removeFromCart = product => {
    return { type: REMOVE_FROM_CART, product: product }
}

export const deleteFromCart = product => {
    return { type: DELETE_FROM_CART, product: product }
}

export const deleteAll = () => {
    return {type:DELETE_ALL}
}