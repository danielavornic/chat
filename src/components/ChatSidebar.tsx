import { RiLogoutBoxLine } from 'react-icons/ri';

export const ChatSidebar = ({ users }: { users: any }) => {
  const signOut = () => {
    localStorage.removeItem('nickname');
    window.location.reload();
  };

  return (
    <div className="drawer-side">
      <label htmlFor="sidebar" className="drawer-overlay"></label>
      <div className="h-full menu text-base-content overflow-x-hidden p-4 w-80 bg-base-100 flex justify-between flex-nowrap">
        <li className="disabled">
          <div>
            <h2 className="font-bold text-xl text-primary">Chat App</h2>
          </div>
        </li>

        <ul className="h-full my-4 overflow-y-auto flex-nowrap">
          <li className="disabled">
            <div>
              <a className="font-bold text-secondary">Channels</a>
            </div>
          </li>
          <ul className="mb-4">
            <li>
              <a>General</a>
            </li>
            <li>
              <a>Random</a>
            </li>
          </ul>

          <li className="disabled">
            <div>
              <a className="font-bold text-secondary">Online users</a>
            </div>
          </li>
          <ul>
            {users.map((user: any) => (
              <li key={user.id}>
                <a>{user.nickname}</a>
              </li>
            ))}
          </ul>
        </ul>

        <li className="disabled">
          <div className="flex flex-col">
            <p className="text-gray-500">Signed in as John Doe</p>
            <button className="btn btn-secondary btn-sm" onClick={signOut}>
              <RiLogoutBoxLine className="mr-2" />
              Sign out
            </button>
          </div>
        </li>
      </div>
    </div>
  );
};
