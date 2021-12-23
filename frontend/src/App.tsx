import { io } from 'socket.io-client';

const socket = io('http://localhost:3000');
socket.on('connect', () => {
  console.log(`You connected.`, { id: socket.id });
});

socket.emit('event', 'adi', 10, ['as', 'ass']);

export const App = () => {
  const handleSubmit = (values: any) => {
    console.log(values);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}></form>
    </div>
  )
}
