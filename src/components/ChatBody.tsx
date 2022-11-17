import { Message } from './Message';

export const ChatBody = () => {
  return (
    <div className="w-full h-full my-8">
      <div className="hidden text-xs text-center lg:block">
        {/* Conversation is empty
        <br />
        Start the conversation by sending a message */}

        <Message isMine>Hello</Message>
        <Message>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quia
          quod, voluptate, quae, voluptas voluptatibus quibusdam voluptatum
          doloremque quidem quos quas. Quisquam, quae. Quisquam, quae. Quisquam
          🤍
        </Message>
      </div>
    </div>
  );
};
