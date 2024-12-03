import React from 'react';

interface JsonInputProps {
  value: string;
  onChange: (value: string) => void;
  error: string | null;
}

export function JsonInput({ value, onChange, error }: JsonInputProps) {
  return (
    <div className="flex-1">
      <label htmlFor="json-input" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        Input JSON
      </label>
      <textarea
        id="json-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full h-[300px] p-4 font-mono text-sm border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 dark:bg-gray-900 dark:text-white dark:border-gray-700 ${
          error ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
        }`}
        placeholder="Paste your JSON here..."
      />
      {error && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}