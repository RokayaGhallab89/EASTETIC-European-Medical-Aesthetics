import React, { createContext, useContext, useState, useEffect } from 'react';

export interface RouteState {
  path: string;
  params: Record<string, string>;
}

interface RouterContextType {
  currentPath: string;
  params: Record<string, string>;
  navigate: (to: string) => void;
}

const RouterContext = createContext<RouterContextType>({
  currentPath: '/',
  params: {},
  navigate: () => {},
});

export const useRouter = () => useContext(RouterContext);

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/';
    }
    return '/';
  });

  const [params, setParams] = useState<Record<string, string>>({});

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname || '/';
      setCurrentPath(path);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Parse path and dynamic parameters like /products/:slug
  useEffect(() => {
    if (currentPath.startsWith('/products/')) {
      const slug = currentPath.replace('/products/', '').split('/')[0];
      if (slug) {
        setParams({ slug });
      } else {
        setParams({});
      }
    } else {
      setParams({});
    }

    // Scroll to top smoothly on page transition
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentPath]);

  const navigate = (to: string) => {
    if (to.startsWith('#')) {
      // If anchor on same page or go to home anchor
      if (currentPath !== '/') {
        window.history.pushState({}, '', '/' + to);
        setCurrentPath('/');
        setTimeout(() => {
          const el = document.querySelector(to);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        const el = document.querySelector(to);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    if (to !== currentPath) {
      window.history.pushState({}, '', to);
      setCurrentPath(to);
    }
  };

  return (
    <RouterContext.Provider value={{ currentPath, params, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};
