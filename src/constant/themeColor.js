import { useGlobalContext } from '@/store/context';

export const ThemeColor = () => {
  const { darkMode } = useGlobalContext();

  const trans = 'transtion-all ease-in-out duration-300';
  const bgColor = '#ffffff';
  const mainBgColor = '#fafbfc';
  const textColor = '#000';
  return { bgColor, textColor, mainBgColor, trans };
};
