import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type ThemeType = 'default' | 'vt320' | 'cassette' | 'coldwar';

interface ThemeContextType {
    theme: ThemeType;
    setTheme: (theme: ThemeType) => void;
    themes: { id: ThemeType; name: string; description: string }[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const themes: { id: ThemeType; name: string; description: string }[] = [
    { id: 'default', name: 'Monochrome', description: 'Clean grayscale terminal' },
    { id: 'vt320', name: 'VT320', description: 'Amber phosphor CRT' },
    { id: 'cassette', name: 'Cassette', description: 'Green terminal with vignette' },
    { id: 'coldwar', name: 'Cold War', description: 'Radar grid aesthetic' },
];

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<ThemeType>(() => {
        if (typeof window !== 'undefined') {
            return (localStorage.getItem('grainrad-theme') as ThemeType) || 'default';
        }
        return 'default';
    });

    useEffect(() => {
        // Remove all theme classes
        document.body.classList.remove('theme-vt320', 'theme-cassette', 'theme-coldwar');

        // Add the current theme class if not default
        if (theme !== 'default') {
            document.body.classList.add(`theme-${theme}`);
        }

        // Persist to localStorage
        localStorage.setItem('grainrad-theme', theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme, themes }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}
