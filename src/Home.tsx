import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Socket } from 'socket.io-client';

const Home = ({ socket }: { socket: Socket }) => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState('');

  const handleNicknameChange = (e: ChangeEvent<HTMLInputElement>) =>
    setNickname(e.target.value);

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    socket.emit('newUser', { nickname, socketID: socket.id });

    localStorage.setItem('nickname', nickname);
    setNickname('');
    navigate('/chat');
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-lg -mt-16">
          <img
            src="/images/home-bird.svg"
            alt="bird"
            className="w-1/2 mb-6 ml-auto mr-auto"
          />
          <h1 className="text-3xl font-bold mb-12">Chat App</h1>
          <form id="nickname-form" onSubmit={handleFormSubmit}>
            <input
              className="input input-md w-64"
              name="nickname"
              placeholder="Nickname"
              onChange={handleNicknameChange}
            />
            <button
              type="submit"
              form="nickname-form"
              className="btn btn-primary btn-md ml-4"
            >
              Get Started
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
