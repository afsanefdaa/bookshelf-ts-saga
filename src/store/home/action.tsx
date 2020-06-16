import { INCREASE_COUNT , DECREASE_COUNT, BOOKS_REQUEST } from "./constant";

export const IncreaseCountAction = () => ({
    type: INCREASE_COUNT,
});

export const DecreaseCountAction = () => ({
    type: DECREASE_COUNT,
});

export const SearchBooks = () => ({
    type: BOOKS_REQUEST,
});
