// In Production
import { MdSpaceDashboard } from 'react-icons/md';
import { IoPerson } from 'react-icons/io5';
import { FaTasks } from 'react-icons/fa';
import { IoSettings } from 'react-icons/io5';

export const sideItem = [
  {
    authorizedUsers: ['all'],
    name: 'Dashboard',
    link: '/dashboard',
    logo: <MdSpaceDashboard />,
  },
  {
    authorizedUsers: ['all'],
    name: 'My Devices',
    link: '/devices',
    logo: <IoPerson />,
  },
  {
    authorizedUsers: ['all'],
    name: 'Subscription',
    link: 'subscriptions',
    logo: <FaTasks />,
  },
  {
    authorizedUsers: ['all'],
    name: 'Settings',
    link: '/settings',
    logo: <IoSettings />,
  },
];
