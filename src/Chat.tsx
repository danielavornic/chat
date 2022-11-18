import { useEffect, useState } from 'react';
import { Socket } from 'socket.io-client';

import { ChatSidebar, ChatHeader, ChatFooter, ChatBody } from './components';
import { MessageInterface } from './types';

const Chat = ({ socket }: { socket: Socket }) => {
  const [messages, setMessages] = useState<MessageInterface[]>([]);

  useEffect(() => {
    socket.on('messageResponse', (message: MessageInterface) => {
      const isMessageInState = messages.find(
        (m) => m.id === message.id && m.socketID === message.socketID,
      );

      if (!isMessageInState) setMessages((messages) => [...messages, message]);
    });

    return () => {
      socket.off('messageResponse');
    };
  }, [socket]);

  return (
    <div className="min-h-screen shadow bg-base-200 drawer h-52 drawer-mobile ">
      <input id="sidebar" type="checkbox" className="drawer-toggle" />
      <div className="flex flex-col h-full overflow-hidden overflow-y-auto items-center justify-between drawer-content px-4 py-6">
        <ChatHeader />
        <ChatBody messages={messages} socket={socket} />
        <ChatFooter socket={socket} />
      </div>
      <ChatSidebar />
    </div>
  );
};

export default Chat;
