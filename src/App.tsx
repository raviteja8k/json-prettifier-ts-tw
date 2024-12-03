import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { JsonInput } from './components/JsonInput';
import { JsonOutput } from './components/JsonOutput';
import { Footer } from './components/Footer';
import { prettifyJson } from './utils/jsonUtils';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const [input, setInput] = useState('');
  const [formatted, setFormatted] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const { formatted, error } = prettifyJson(input);
    setFormatted(formatted);
    setError(error);
  }, [input]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(formatted);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors flex flex-col">
      <Header darkMode={darkMode} onToggleDarkMode={() => setDarkMode(!darkMode)} />
      
      <main className="flex-1 max-w-7xl mx-auto p-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <JsonInput
            value={input}
            onChange={setInput}
            error={error}
          />
          <JsonOutput
            value={formatted}
            onCopy={handleCopy}
            copied={copied}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;