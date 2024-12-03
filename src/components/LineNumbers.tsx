import React from 'react';

interface LineNumbersProps {
  count: number;
}

export function LineNumbers({ count }: LineNumbersProps) {
  return (
    <div className="select-none pr-4 text-right border-r border-gray-300 dark:border-gray-700">
      {Array.from({ length: count }, (_, i) => (
        <div key={i + 1} className="text-gray-400 dark:text-gray-600 font-mono text-sm leading-6">
          {i + 1}
        </div>
      ))}
    </div>
  );
}