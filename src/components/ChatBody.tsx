import { MessageInterface } from '@/types';
import { Socket } from 'socket.io-client';
import { Message } from './Message';

interface ChatBodyProps {
  messages: MessageInterface[];
  socket: Socket;
}

export const ChatBody = ({ messages, socket }: ChatBodyProps) => {
  return (
    <div className="w-full h-full my-8 overflow-y-auto flex flex-col">
      {messages && messages.length > 0 ? (
        messages.map((message, index) => (
          <Message
            key={message.id}
            isLast={index === messages.length - 1}
            isMine={message.socketID === socket.id}
            {...message}
          />
        ))
      ) : (
        <div className="text-center text-xs mx-auto">
          Conversation is empty
          <br />
          Start the conversation by sending a message
        </div>
      )}
    </div>
  );
};
