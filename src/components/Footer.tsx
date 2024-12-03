import React from 'react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full py-4 px-6 mt-8 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto text-center text-sm text-gray-600 dark:text-gray-400">
        <p>© {currentYear} JSON Prettifier. All rights reserved.</p>
        <p className="mt-1">
          Connect with me on{' '}
          <a 
            href="https://www.linkedin.com/in/raviteja-tk/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            LinkedIn
          </a>          
        </p>
      </div>
    </footer>
  );
}