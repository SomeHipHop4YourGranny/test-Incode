const TICKER_ACTION = {
    FETCHING: 'FETCHING_POSTS',
    FETCH_SUCCESS: 'FETCHING_SUCCESS',
};
const connected = (data) => ({
    type: TICKER_ACTION.FETCH_SUCCESS,
    payload: data,
});

const api = ({ data }) => (dispatch) => {
    dispatch(connected(data));
};

export { TICKER_ACTION, api };
