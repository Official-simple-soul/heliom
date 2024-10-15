'use client';
import { ToastContainer } from 'react-toastify';
import PageWrapper from './components/PageWrapper';
import { sideItem } from './data/sidebar_data';
import { usePathname, useRouter } from 'next/navigation';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import useLocalStorage from '@/hooks/useLocalStorage';
import { useEffect } from 'react';
import { setAccountProfile, logout } from '@/store/slices/authSlice';
import { AppDispatch, RootState } from '@/store';
import CreateAccount from './components/CreateAccount';

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const dispatch = useDispatch<AppDispatch>();
  const [localProfile] = useLocalStorage('accountProfile', null);
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const router = useRouter();

  useEffect(() => {
    if (localProfile) {
      dispatch(setAccountProfile(localProfile));
    } else if (!isAuthenticated) {
      dispatch(logout());
      router.replace('/login');
    }
  }, [localProfile, isAuthenticated, dispatch, router]);

  return (
    <PageWrapper route={pathname} sideItem={sideItem}>
      {children}
      <ToastContainer />
      <CreateAccount />
    </PageWrapper>
  );
}

export default Layout;
