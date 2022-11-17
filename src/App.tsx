import { useEffect, useState } from 'react';
import io from 'socket.io-client';

function App() {
  const [socket] = useState(() => io('http://localhost:4000'));

  useEffect(() => {
    socket.on('connect', () => {
      console.log('connected');
    });
    socket.on('disconnect', () => {
      console.log('disconnected');
    });
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}

export default App;
