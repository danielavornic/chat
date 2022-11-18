import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = () => {
  const nickname = localStorage.getItem('nickname');

  if (!nickname) return <Navigate to="/" replace />;

  return <Outlet />;
};
