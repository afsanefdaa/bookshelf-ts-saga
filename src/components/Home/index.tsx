import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './index.css';
import { IncreaseCountAction, DecreaseCountAction } from './../../store/home/action';

interface RootState {
    home: {
        count: number
    }
}

function Index() {
    const homeWrapper = (state: RootState) => state.home;
    const home = useSelector(homeWrapper);
    const dispatch = useDispatch();

  return (
    <div>
        {home.count}

        <button onClick={() => dispatch(IncreaseCountAction())}>+</button>
        <button onClick={() => dispatch(DecreaseCountAction())}>-</button>
    </div>
  );
}

export default Index;
