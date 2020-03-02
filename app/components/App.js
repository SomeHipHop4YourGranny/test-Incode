import '../styles/application.scss';

import React, { PureComponent } from 'react';

class App extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            name: 'AAPL',
            interval: 5000,
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.props.handleSocketSubmit(
            this.state.name,
            Number(this.state.interval),
        );
    }

    render() {
        return (
            <div className="stock-ticker">
                <h1>Ticker tracker</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Ticker name:
                        <input
                            type="text"
                            name="name"
                            onInput={this.handleInputChange}
                            defaultValue="AAPL"
                        />
                    </label>
                    <label>
                        Interval (ms):
                        <input
                            type="text"
                            name="interval"
                            onInput={this.handleInputChange}
                            defaultValue="5000"
                        />
                    </label>
                    <input type="submit" value="Tracking" />
                    <input
                        type="button"
                        value="Stop Tracking"
                        onClick={this.props.disconnect}
                    />
                </form>
            </div>
        );
    }
}

export default App;
