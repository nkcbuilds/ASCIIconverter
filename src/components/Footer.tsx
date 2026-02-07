export function Footer() {
    return (
        <footer className="border-t border-term-border bg-term-panel">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand */}
                    <div className="space-y-3">
                        <h3 className="text-term-text-bright text-sm font-medium uppercase tracking-wide">
                            grainrad
                        </h3>
                        <p className="text-term-text-dim text-xs leading-relaxed">
                            Free WebGPU-powered ASCII, dithering, and retro effects at 60fps.
                            Transform your media with real-time visual effects.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="space-y-3">
                        <h4 className="text-term-text text-xs font-medium uppercase tracking-wide">
                            Links
                        </h4>
                        <div className="space-y-2">
                            <FooterLink href="#effects">Effects</FooterLink>
                            <FooterLink href="#gallery">Gallery</FooterLink>
                            <FooterLink href="#about">About</FooterLink>
                            <FooterLink href="https://github.com" external>GitHub</FooterLink>
                        </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="space-y-3">
                        <h4 className="text-term-text text-xs font-medium uppercase tracking-wide">
                            Built With
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            <TechBadge>WebGPU</TechBadge>
                            <TechBadge>React</TechBadge>
                            <TechBadge>TypeScript</TechBadge>
                            <TechBadge>Vite</TechBadge>
                            <TechBadge>Tailwind</TechBadge>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-8 pt-6 border-t border-term-border flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-term-text-dim text-xs">
                        © {new Date().getFullYear()} Grainrad. All effects are processed locally.
                    </p>
                    <div className="flex items-center gap-4">
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-term-text-dim hover:text-term-text transition-colors"
                            aria-label="GitHub"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                            </svg>
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-term-text-dim hover:text-term-text transition-colors"
                            aria-label="Twitter"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function FooterLink({ href, external, children }: { href: string; external?: boolean; children: React.ReactNode }) {
    return (
        <a
            href={href}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
            className="block text-term-text-dim hover:text-term-text-bright transition-colors text-xs"
        >
            {children}
            {external && (
                <svg className="w-3 h-3 inline-block ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
            )}
        </a>
    );
}

function TechBadge({ children }: { children: React.ReactNode }) {
    return (
        <span className="px-2 py-1 text-[10px] uppercase tracking-wide border border-term-border text-term-text-dim">
            {children}
        </span>
    );
}
