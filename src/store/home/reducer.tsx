import { INCREASE_COUNT , DECREASE_COUNT } from "./constant";

interface initialStateInterface {
    count: number;
}

const initialState = {
    count: 0
};

export default function (state: initialStateInterface = initialState, action: any) {
    switch (action.type) {
        case INCREASE_COUNT:
            return { count:  state.count + 1 };
        case DECREASE_COUNT:
            return { count:  state.count - 1 };
        default:
            return state;
    }
}
