import { Outlet } from 'react-router-dom';

export default function RootLayout() {
  return (
    <>
      <main className="pt-24">
        <Outlet />
      </main>
    </>
  );
}
