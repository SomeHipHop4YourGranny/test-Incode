import React, { PureComponent } from 'react';

class Ticker extends PureComponent {
    render() {
        return (
            <div className="ticker">
                <p>name: {this.props.name}</p>
                <p>exchange: {this.props.exchange}</p>
                <p>price: {this.props.price}</p>
                <p>change: {this.props.change}</p>
                <p>change_percent: {this.props.change_percent}</p>
                <p>last_trade_time: {this.props.last_trade_time}</p>
                <p>dividend: {this.props.dividend}</p>
                <p>yield: {this.props.yield}</p>
            </div>
        );
    }
}

export default Ticker;
