import React, { createContext, useContext, useState, useEffect } from 'react';
import { Lang } from './translations';

type LanguageContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Load from localStorage or default to Spanish
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Lang) || 'es';
  });

  // Save to localStorage when language changes
  useEffect(() => {
    localStorage.setItem('language', lang);
  }, [lang]);

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

