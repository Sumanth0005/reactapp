import { useState, useEffect, useRef, useCallback } from "react";
import { useTheme } from "../Theme/ThemeContext";
import { Sun, Moon, Droplet, Palette } from "lucide-react";

const themes = [
  { name: "light", icon: <Sun size={18} /> },
  { name: "dark", icon: <Moon size={18} /> },
  { name: "ocean", icon: <Droplet size={18} /> },
  { name: "classic", icon: <Palette size={18} /> },
] as const;

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, handleClickOutside]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Escape") setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="p-2 rounded bg-gray-200 dark:bg-gray-800"
        aria-label="Toggle Theme"
        onKeyDown={handleKeyDown}
      >
        {themes.find((t) => t.name === theme)?.icon}
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-900 border rounded shadow-md z-10">
          {themes.map(({ name, icon }) => (
            <button
              key={name}
              className={`flex items-center gap-2 px-4 py-2 w-full text-left hover:bg-gray-100 dark:hover:bg-gray-700 ${
                theme === name ? "font-bold" : ""
              }`}
              onClick={() => {
                setTheme(name);
                setIsOpen(false);
              }}
              onKeyDown={handleKeyDown}
            >
              {icon} {name.charAt(0).toUpperCase() + name.slice(1)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
