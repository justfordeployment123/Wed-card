import { useLanguage } from '../i18n/LanguageContext';
import { Lang } from '../i18n/translations';

export function LanguageSwitcher({ variant = 'default' }: { variant?: 'default' | 'light' | 'dark' }) {
  const { lang, setLang } = useLanguage();

  const languages: { code: Lang; label: string }[] = [
    { code: 'es', label: 'ES' },
    { code: 'en', label: 'EN' },
    { code: 'de', label: 'DE' },
  ];

  const getStyles = () => {
    if (variant === 'light') {
      return {
        active: 'bg-white text-[#703d4e] shadow-md',
        inactive: 'bg-transparent border border-white text-white hover:bg-white hover:text-[#703d4e]',
      };
    }
    if (variant === 'dark') {
      return {
        active: 'bg-[#717070] text-white shadow-md',
        inactive: 'bg-transparent border border-[#717070] text-[#717070] hover:bg-[#717070] hover:text-white',
      };
    }
    return {
      active: 'bg-[#717070] text-white shadow-md',
      inactive: 'bg-transparent border border-[#717070] text-[#717070] hover:bg-[#717070] hover:text-white',
    };
  };

  const styles = getStyles();

  return (
    <div className="flex gap-2 items-center">
      {languages.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          className={`
            px-3 py-1.5 rounded-full text-xs font-medium uppercase tracking-wide
            transition-all duration-200
            ${lang === code ? styles.active : styles.inactive}
          `}
          style={{
            minWidth: '40px',
          }}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

