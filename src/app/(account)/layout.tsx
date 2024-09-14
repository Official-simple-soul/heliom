// In Production
'use client';
import PageWrapper from './components/PageWrapper';
import { sideItem } from './data/sidebar_data';
import { usePathname } from 'next/navigation';

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <PageWrapper route={pathname} sideItem={sideItem}>
      {children}
    </PageWrapper>
  );
}

export default Layout;
