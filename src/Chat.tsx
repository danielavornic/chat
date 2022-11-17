import { Socket } from 'socket.io-client';
import { ChatSidebar, ChatHeader, ChatFooter, ChatBody } from './components';

const Chat = ({ socket }: { socket: Socket }) => {
  return (
    <div className="min-h-screen shadow bg-base-200 drawer drawer-mobile h-52">
      <input id="sidebar" type="checkbox" className="drawer-toggle" />
      <div className="flex flex-col h-full items-center justify-between drawer-content px-4 py-6">
        <ChatHeader />
        <ChatBody />
        <ChatFooter />
      </div>
      <ChatSidebar />
    </div>
  );
};

export default Chat;
