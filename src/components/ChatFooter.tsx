import { useState } from 'react';
import cn from 'classnames';
import { RiSendPlane2Line } from 'react-icons/ri';

export const ChatFooter = () => {
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);

  const submitMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (message.trim() === '') {
      return;
    }

    setIsSending(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSending(false);
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
        <button
          type="submit"
          className={cn('btn btn-square btn-primary', isSending && 'loading')}
        >
          {!isSending && <RiSendPlane2Line size={18} />}
        </button>
      </form>
    </div>
  );
};
