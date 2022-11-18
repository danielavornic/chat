import { useState } from 'react';
import { RiSendPlane2Line } from 'react-icons/ri';
import { Socket } from 'socket.io-client';

import { useUser } from '../hooks/useUser';

interface ChatFooterProps {
  socket: Socket;
}

export const ChatFooter = ({ socket }: ChatFooterProps) => {
  const { nickname } = useUser();
  const [message, setMessage] = useState('');

  const submitMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (message.trim() === '') return;

    socket.emit('message', {
      nickname,
      message,
      id: `${socket.id}${Math.random()}`,
      socketID: socket.id,
      time: new Date().toLocaleTimeString(),
    });

    setMessage('');
  };

  return (
    <div className="w-full bg-white p-2 rounded-xl">
      <form
        id="message-form"
        className="flex justify-between items-center"
        onSubmit={submitMessage}
      >
        <input
          type="text"
          placeholder="Type here"
          className="input input-ghost w-full focus:outline-none"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit" className="btn btn-square btn-primary">
          <RiSendPlane2Line size={18} />
        </button>
      </form>
    </div>
  );
};
