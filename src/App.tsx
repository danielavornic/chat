import { useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import io from 'socket.io-client';

import Chat from './Chat';
import Home from './Home';

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
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/chat" element={<Chat socket={socket} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
