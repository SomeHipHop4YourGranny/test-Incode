import { TICKER_ACTION } from './action';

const initialState = {};

const stockTicker = (state = initialState, action) => {
    switch (action.type) {
        case TICKER_ACTION.FETCH_SUCCESS:
            return { ...state, ticker: action.payload };
        default:
            return state;
    }
};

export default stockTicker;
