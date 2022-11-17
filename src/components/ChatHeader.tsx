import { RiMenuLine } from 'react-icons/ri';

export const ChatHeader = () => {
  return (
    <div className="w-full flex items-center justify-between bg-white p-4 rounded-xl">
      <div>
        <h2 className="text-xl text-secondary font-bold">Channel</h2>
        <p>Description</p>
      </div>
      <label
        htmlFor="sidebar"
        className="btn btn-primary btn-square drawer-button lg:hidden"
      >
        <RiMenuLine size={18} />
      </label>
    </div>
  );
};
