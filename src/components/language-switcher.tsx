"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { useTransition, useState, useEffect, useRef } from "react";

interface LanguageSwitcherProps {
    direction?: 'up' | 'down';
}

export default function LanguageSwitcher({ direction = 'down' }: LanguageSwitcherProps) {
    const locale = useLocale();
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const locales = [
        { code: 'en', label: 'EN' },
        { code: 'cs', label: 'CS' },
        { code: 'de', label: 'DE' },
        { code: 'fr', label: 'FR' },
        { code: 'es', label: 'ES' },
        { code: 'ua', label: 'UA' },
        { code: 'pt', label: 'PT' },
    ];

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    function onSelect(nextLocale: string) {
        setIsOpen(false);
        startTransition(() => {
            router.replace(pathname, { locale: nextLocale });
        });
    }

    return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                disabled={isPending}
                className="flex items-center justify-between w-[80px] px-3 py-2 text-sm bg-transparent border border-[var(--color-slate-700)] rounded-md hover:border-[var(--color-slate-500)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent text-[var(--color-ink)] transition-colors"
                style={{ fontFamily: "var(--font-mono)" }}
                aria-label="Select Language"
                aria-expanded={isOpen}
            >
                <span className="uppercase">{locale}</span>
                <svg
                    className={`h-4 w-4 text-[var(--color-slate-500)] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>

            {isOpen && (
                <div
                    className={`absolute z-50 w-full min-w-[80px] bg-[var(--color-surface)] border border-[var(--color-border)] rounded-md shadow-lg overflow-hidden ${direction === 'up' ? 'bottom-full mb-1' : 'top-full mt-1'}`}
                >
                    <ul className="py-1 max-h-60 overflow-auto">
                        {locales.map((l) => (
                            <li key={l.code}>
                                <button
                                    type="button"
                                    onClick={() => onSelect(l.code)}
                                    className={`w-full text-left px-3 py-2 text-sm hover:bg-[var(--color-slate-800)] transition-colors flex items-center justify-between ${locale === l.code ? 'text-[var(--color-primary)] font-bold' : 'text-[var(--color-text-secondary)]'}`}
                                    style={{ fontFamily: "var(--font-mono)" }}
                                >
                                    {l.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
