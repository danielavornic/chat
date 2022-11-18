import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [localNickname, setLocalNickname] = useState('');

  const handleNicknameChange = (e: ChangeEvent<HTMLInputElement>) =>
    setLocalNickname(e.target.value);

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    localStorage.setItem('nickname', localNickname);
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
