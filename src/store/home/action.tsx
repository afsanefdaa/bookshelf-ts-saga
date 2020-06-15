import { INCREASE_COUNT , DECREASE_COUNT } from "./constant";

export const IncreaseCountAction = () => ({
    type: INCREASE_COUNT,
});

export const DecreaseCountAction = () => ({
    type: DECREASE_COUNT,
});
