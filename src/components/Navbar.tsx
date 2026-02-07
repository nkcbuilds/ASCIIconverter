import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isThemeOpen, setIsThemeOpen] = useState(false);
    const { theme, setTheme, themes } = useTheme();

    return (
        <header className="panel sticky top-0 z-40">
            <nav className="flex items-center justify-between px-4 py-3">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <a
                        href="/"
                        className="text-term-text-bright hover:text-term-accent transition-colors text-sm font-medium uppercase tracking-wide"
                    >
                        grainrad
                    </a>
                    <span className="text-term-text-dim text-xs hidden sm:inline">
                        WebGPU Effects
                    </span>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-4">
                    <NavLink href="#effects">Effects</NavLink>
                    <NavLink href="#gallery">Gallery</NavLink>
                    <NavLink href="#about">About</NavLink>

                    {/* Theme Selector */}
                    <div className="relative">
                        <button
                            onClick={() => setIsThemeOpen(!isThemeOpen)}
                            className="btn-terminal flex items-center gap-2"
                        >
                            <span className="w-2 h-2 bg-term-accent rounded-full" />
                            <span>{themes.find(t => t.id === theme)?.name || 'Theme'}</span>
                            <ChevronIcon open={isThemeOpen} />
                        </button>

                        <AnimatePresence>
                            {isThemeOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="absolute top-full right-0 mt-2 w-48 bg-term-panel border border-term-border shadow-lg z-50"
                                >
                                    {themes.map((t) => (
                                        <button
                                            key={t.id}
                                            onClick={() => {
                                                setTheme(t.id);
                                                setIsThemeOpen(false);
                                            }}
                                            className={`w-full px-4 py-2 text-left text-sm hover:bg-term-border transition-colors flex items-center gap-2 ${theme === t.id ? 'text-term-accent' : 'text-term-text'
                                                }`}
                                        >
                                            <span className={`w-2 h-2 rounded-full ${theme === t.id ? 'bg-term-accent' : 'bg-term-text-dim'}`} />
                                            <span>{t.name}</span>
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* GitHub Link */}
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-term-text-dim hover:text-term-text-bright transition-colors"
                        aria-label="GitHub"
                    >
                        <GithubIcon />
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden text-term-text-dim hover:text-term-text-bright transition-colors p-1"
                    aria-label="Toggle menu"
                >
                    <MenuIcon open={isMenuOpen} />
                </button>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="md:hidden border-t border-term-border overflow-hidden"
                    >
                        <div className="px-4 py-4 space-y-3">
                            <MobileNavLink href="#effects" onClick={() => setIsMenuOpen(false)}>Effects</MobileNavLink>
                            <MobileNavLink href="#gallery" onClick={() => setIsMenuOpen(false)}>Gallery</MobileNavLink>
                            <MobileNavLink href="#about" onClick={() => setIsMenuOpen(false)}>About</MobileNavLink>

                            <div className="pt-3 border-t border-term-border">
                                <p className="text-term-text-dim text-xs uppercase tracking-wide mb-2">Theme</p>
                                <div className="flex flex-wrap gap-2">
                                    {themes.map((t) => (
                                        <button
                                            key={t.id}
                                            onClick={() => setTheme(t.id)}
                                            className={`px-3 py-1 text-xs border transition-colors ${theme === t.id
                                                    ? 'border-term-accent text-term-accent'
                                                    : 'border-term-border text-term-text-dim hover:border-term-text'
                                                }`}
                                        >
                                            {t.name}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <a
            href={href}
            className="text-term-text-dim hover:text-term-text-bright transition-colors text-sm uppercase tracking-wide"
        >
            {children}
        </a>
    );
}

function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
    return (
        <a
            href={href}
            onClick={onClick}
            className="block text-term-text hover:text-term-text-bright transition-colors text-sm uppercase tracking-wide py-1"
        >
            {children}
        </a>
    );
}

function ChevronIcon({ open }: { open: boolean }) {
    return (
        <svg
            className={`w-3 h-3 transition-transform ${open ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
    );
}

function MenuIcon({ open }: { open: boolean }) {
    return (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
        </svg>
    );
}

function GithubIcon() {
    return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
        </svg>
    );
}
