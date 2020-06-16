import {INCREASE_COUNT, DECREASE_COUNT, BOOKS_REQUEST, BOOKS_SUCCESS} from "./constant";

interface initialStateInterface {
    count: number;
    books: {
        data: any,
        loading: boolean,
    }
}

interface actionInterface {
    type: string;
    payload: any;
}

const initialState = {
    count: 0,
    books: {
        data: {},
        loading: false,
    }
};

export default function (state: initialStateInterface = initialState, action: actionInterface) {
    switch (action.type) {
        case INCREASE_COUNT:
            return { count:  state.count + 1 };
        case DECREASE_COUNT:
            return { count:  state.count - 1 };
        case BOOKS_REQUEST:
            return { ...state, books: { ...state.books, loading: true } };
        case BOOKS_SUCCESS:
            return { ...state, books: { data: action.payload, loading: false}};
        default:
            return state;
    }
}
