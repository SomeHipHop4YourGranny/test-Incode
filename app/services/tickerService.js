import io from 'socket.io-client';

let socket = null;
let connections = [];

const connect = (stockSymbol, interval, onConnect) => {
    if (connections.length > 0) {
        disconnect();
    }
    socket = io('http://localhost:4000');
    connections.push(socket.id);

    socket.on('connect', () => {
        console.log('connected');

        socket.on(stockSymbol, (data) => {
            onConnect({ data: JSON.parse(data) });
            console.log(data);
        });

        socket.emit('ticker', stockSymbol, interval);
    });

    socket.on('disconnect', () => {
        console.log('disconnected');
    });
};

const disconnect = () => {
    if (connections.length > 0) {
        socket.disconnect(connections[0]);
    }

    connections = [];
};

export { connect, disconnect };
