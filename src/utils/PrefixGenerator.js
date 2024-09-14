// In Production
import React from 'react';

export function PrefixGenerator({ data, text }) {
  const prefix = data?.first_name
    ? data?.first_name.slice(0, 1) + '' + data?.last_name.slice(0, 1)
    : '';

  return (
    <div className="rounded-full bg-gray-300 absolute left-0 right-0 bottom-0 top-0 w-full h-full flex items-center justify-center">
      <h1 className="p-3 font-mono" style={{ fontSize: text }}>
        {prefix}
      </h1>
    </div>
  );
}

export default PrefixGenerator;
