// In Production
'use client';
import { ToastContainer } from 'react-toastify';
import PageWrapper from './components/PageWrapper';
import { sideItem } from './data/sidebar_data';
import { usePathname } from 'next/navigation';
import 'react-toastify/dist/ReactToastify.css';

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <PageWrapper route={pathname} sideItem={sideItem}>
      {children}
      <ToastContainer />
    </PageWrapper>
  );
}

export default Layout;
