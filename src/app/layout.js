import React from 'react';

import './styles.css';

function RootLayout({ children }) {

  const timestamp = new Date().toLocaleString();
  console.log('layout rendered');

  return (
    <html lang="en">
      <body>
        <main>
            {children}
        </main>
        <footer>Last updated: {timestamp} </footer>
      </body>
    </html>
  );
}

export default RootLayout;
