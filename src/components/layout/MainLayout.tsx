import React from 'react';
import Header from './Header';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container">
      <div className="inner">
        <Header />
        {children}
      </div>
    </div>
  );
};
