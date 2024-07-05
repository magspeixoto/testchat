import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 5500 }, () => {
  console.log('WebSocket server running on ws://127.0.0.1:5500');
});

wss.on('connection', (ws) => {
  console.log('Client connected');
  ws.on('message', (message) => {
    console.log('received: %s', message);
  });
  ws.send('Hello from server');
});

wss.on('error', (error) => {
  console.error('WebSocket server error:', error);
});
