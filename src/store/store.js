import { createStore } from 'redux';

const reducerFunction = (state = { favouriteItems: [] }, action) => {
    const tekrarlananElemIndeksi = state.favouriteItems.findIndex(item => item.id === action.payload.id);
    if(action.type === 'addItem') {

        if(tekrarlananElemIndeksi > -1) {
            return {
                ...state,
                favouriteItems: [...state.favouriteItems]
            } 
        }
        else {
            return {
                ...state,
                favouriteItems: [...state.favouriteItems, action.payload]
            }
        }
    }

    if (action.type === 'removeItem') {
        const updatedList = state.favouriteItems.filter(item => item.id !== action.payload.id);
        return {
            ...state,
            favouriteItems: updatedList
        };
    }
    return state;
}

const store = createStore(reducerFunction);

export default store;
