/** @jsx jsx */
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { IncreaseCountAction, DecreaseCountAction, SearchBooks } from './../../store/home/action';
import { css } from "@emotion/core";

import { jsx } from '@emotion/core'

const base = css`
    background-color: hotpink;
`;

interface RootState {
    home: {
        count: number,
        books: {
            data: any,
            loading: boolean
        }
    }
}

const Index = () => {
    const homeWrapper = (state: RootState) => state.home;
    const home = useSelector(homeWrapper);
    const dispatch = useDispatch();

    return(
        <div>
            <section css={base}>
                {home.count}

                <button onClick={() => dispatch(IncreaseCountAction())}>+</button>
                <button onClick={() => dispatch(DecreaseCountAction())}>-</button>
                <button onClick={() => dispatch(SearchBooks())}>get books</button>
                <div>
                    {
                        home?.books?.loading ? <h1>Loading...</h1> : (
                            home?.books?.data?.docs?.map((el: any) => (
                                    <div>
                                        <span>title : {el.title}</span>
                                        <span>type : {el.type}</span>
                                    </div>
                                )
                            )
                        )
                    }
                </div>
            </section>
        </div>
    )
};

export default Index;
