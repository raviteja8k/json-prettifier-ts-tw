import React from 'react';
import { Copy, Check } from 'lucide-react';
import { LineNumbers } from './LineNumbers';

interface JsonOutputProps {
  value: string;
  onCopy: () => void;
  copied: boolean;
}

export function JsonOutput({ value, onCopy, copied }: JsonOutputProps) {
  const lineCount = value.split('\n').length;

  return (
    <div className="flex-1">
      <div className="flex justify-between items-center mb-2">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Prettified JSON
        </label>
        <button
          onClick={onCopy}
          className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-md bg-blue-50 text-blue-700 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-200 dark:hover:bg-blue-800 transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 mr-1" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 mr-1" />
              Copy
            </>
          )}
        </button>
      </div>
      <div className="w-full h-[300px] p-4 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg overflow-auto">
        <div className="flex">
          <LineNumbers count={lineCount} />
          <pre className="flex-1 pl-4">
            <code className="text-sm font-mono text-gray-800 dark:text-gray-200">
              {value}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}