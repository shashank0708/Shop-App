import { ADD_TO_CART, DELETE_FROM_CART, REMOVE_FROM_CART, DELETE_ALL } from "../actions/cart"
import CartItem from '../../models/cart-item'

const initialState = {
    items: {},
    totalAmount: 0
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const addedProduct = action.product
            const { price, title, imageUrl, id } = addedProduct

            let cartItem

            if (state.items[addedProduct.id]) {
                cartItem = new CartItem(
                    state.items[addedProduct.id].id,
                    state.items[addedProduct.id].productId,
                    state.items[addedProduct.id].quantity + 1,
                    price,
                    title,
                    state.items[addedProduct.id].sum + price,
                    imageUrl
                )
            } else {
                cartItem = new CartItem(Math.random().toString(), id, 1, price, title, price, imageUrl)
            }
            
            const newState = {
                items: { ...state.items, [addedProduct.id]: cartItem },
                totalAmount: state.totalAmount + price
            }
            return newState
        case REMOVE_FROM_CART:
            const productToRemove = action.product

            const cartItemToRemove = cartItem = new CartItem(
                state.items[productToRemove.id].id,
                state.items[productToRemove.id].productId,
                state.items[productToRemove.id].quantity - 1,
                productToRemove.price,
                productToRemove.title,
                state.items[productToRemove.id].sum - productToRemove.price,
                state.items[productToRemove.id].imageUrl
            )

            return {
                items: { ...state.items, [productToRemove.id]: cartItemToRemove },
                totalAmount: state.totalAmount - productToRemove.price
            }

        case DELETE_FROM_CART:
            const productToDelete = action.product

            const temp = state.items
            delete temp[productToDelete.id]

            return {
                items: temp,
                totalAmount: state.totalAmount === productToDelete.price ? 0.00 : (state.totalAmount - productToDelete.price)
            }

        case DELETE_ALL:
            return initialState

        default:
            return state
    }
}