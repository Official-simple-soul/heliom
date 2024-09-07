// components/DynamicFormBuilder.tsx
import dynamic from 'next/dynamic';

// Dynamically import the FormBuilder component
const FormBuilder = dynamic(
  () => import('@msflib/react').then((mod) => mod.FormBuilder),
  { ssr: false }
);

export default FormBuilder;
