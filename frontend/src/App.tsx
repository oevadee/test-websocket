import { io } from 'socket.io-client';

const socket = io('http://localhost:3000');
socket.on('connect', () => {
  console.log(`You connected.`, { id: socket.id });
});

socket.emit('event', 'adi', 10, ['as', 'ass']);

export const App = () => (
  <>
    <p>Hello Vite + Preact!</p>
    <p>
      <a
        class="link"
        href="https://preactjs.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn Preact
      </a>
    </p>
  </>
);
