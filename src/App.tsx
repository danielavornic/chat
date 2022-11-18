import { useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import io from 'socket.io-client';

import Chat from './Chat';
import { ProtectedRoute } from './components';
import { PublicRoute } from './components/PublicRoute';
import Home from './Home';
import { useUser } from './hooks/useUser';

const socket = io('http://localhost:4000');

function App() {
  const { setNickname } = useUser();

  useEffect(() => {
    socket.on('connect', () => {
      console.log('connected');
    });
    socket.on('disconnect', () => {
      console.log('disconnected');
    });

    const nickname = localStorage.getItem('nickname');
    if (nickname?.length) {
      setNickname(nickname);
    }

    return () => {
      socket.off('connect');
      socket.off('disconnect');
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="chat" element={<ProtectedRoute />}>
          <Route path="/chat" element={<Chat socket={socket} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
