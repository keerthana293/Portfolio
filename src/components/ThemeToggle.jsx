import { useTheme } from '../context/ThemeContext';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === 'light';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-2 text-xs font-medium text-text transition hover:border-accent hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      aria-label={isLight ? 'Activate dark mode' : 'Activate light mode'}
      title={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      <span aria-hidden="true">
        {isLight ? (
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
            <path d="M21 12.8A9 9 0 1 1 11.2 3a1 1 0 0 1 .9 1.5 7 7 0 1 0 7.4 7.4 1 1 0 0 1 1.5.9Z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
            <path d="M12 4a1 1 0 0 1 1 1v1.3a1 1 0 0 1-2 0V5a1 1 0 0 1 1-1Zm0 12.7a1 1 0 0 1 1 1V19a1 1 0 1 1-2 0v-1.3a1 1 0 0 1 1-1ZM5 11a1 1 0 0 1 1 1 1 1 0 0 1-1 1H3.7a1 1 0 1 1 0-2H5Zm15.3 0a1 1 0 1 1 0 2H19a1 1 0 0 1 0-2h1.3ZM6.8 6.8a1 1 0 0 1 1.4 0l.9.9a1 1 0 0 1-1.4 1.4l-.9-.9a1 1 0 0 1 0-1.4Zm8.3 8.3a1 1 0 0 1 1.4 0l.9.9a1 1 0 0 1-1.4 1.4l-.9-.9a1 1 0 0 1 0-1.4Zm2.3-8.3a1 1 0 0 1 0 1.4l-.9.9a1 1 0 1 1-1.4-1.4l.9-.9a1 1 0 0 1 1.4 0Zm-8.3 8.3a1 1 0 0 1 0 1.4l-.9.9a1 1 0 1 1-1.4-1.4l.9-.9a1 1 0 0 1 1.4 0ZM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z" />
          </svg>
        )}
      </span>
      <span>{isLight ? 'Dark' : 'Light'}</span>
    </button>
  );
}

export default ThemeToggle;
