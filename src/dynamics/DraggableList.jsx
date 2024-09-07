// components/DynamicFormBuilder.tsx
import dynamic from 'next/dynamic';

// Dynamically import the FormBuilder component
const DraggableList = dynamic(
  () => import('@msflib/react').then((mod) => mod.DraggableList),
  { ssr: false }
);

export default DraggableList;
