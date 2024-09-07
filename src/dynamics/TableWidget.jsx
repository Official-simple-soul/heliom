import dynamic from 'next/dynamic';

// Dynamically import the TableWidget component
const TableWidget = dynamic(
  () => import('@msflib/react').then((mod) => mod.TableWidget),
  { ssr: false }
);

export default TableWidget;
