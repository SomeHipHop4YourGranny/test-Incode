import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { tickerAction } from '../store/rootAction';
import { connect as socketConnect, disconnect } from '../services';

import App from '../components/App';
import Ticker from '../components/ticker';

function AppContainer(props) {
    const { api, ticker } = props;
    function handleSocketSubmit(tickerName, interval) {
        socketConnect(tickerName, interval, api);
    }

    return (
        <div>
            <App
                handleSocketSubmit={handleSocketSubmit}
                disconnect={disconnect}
            />
            {Object.entries(ticker).length !== 0 && ticker ? (
                <Ticker
                    name={ticker.ticker}
                    exchange={ticker.exchange}
                    price={ticker.price}
                    change={ticker.change}
                    change_percent={ticker.change_percent}
                    last_trade_time={ticker.last_trade_time}
                    dividend={ticker.dividend}
                    yield={ticker.yield}
                />
            ) : (
                false
            )}
        </div>
    );
}

const mapStateToProps = (state) => ({
    ticker: state.stockTicker.ticker,
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ api: tickerAction.api }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);

AppContainer.propTypes = {
    api: PropTypes.func.isRequired,
    ticker: PropTypes.object,
};

AppContainer.defaultProps = {
    ticker: {},
};
