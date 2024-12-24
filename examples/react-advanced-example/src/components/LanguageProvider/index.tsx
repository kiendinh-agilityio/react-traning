import { createContext, useContext, useState, ReactNode } from 'react';

import './index.css';

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
}

// Language context
const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
});

// Custom hook
const useLanguage = () => useContext(LanguageContext);

// LanguageProvider
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState('en');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Example component
const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageEn = () => setLanguage('en');

  const handleLanguageFr = () => setLanguage('fr');

  return (
    <div>
      <p>Current Language: {language}</p>
      <button className='btn-primary' onClick={handleLanguageEn}>
        English
      </button>
      <button onClick={handleLanguageFr}>French</button>
    </div>
  );
};

export default LanguageProvider;
export { LanguageSwitcher };
