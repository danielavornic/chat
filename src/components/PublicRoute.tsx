import { Navigate, Outlet } from 'react-router-dom';

export const PublicRoute = () => {
  const nickname = localStorage.getItem('nickname');

  if (nickname) return <Navigate to="/chat" replace />;

  return <Outlet />;
};
