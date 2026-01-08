"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { ChangeEvent, useTransition } from "react";

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const pathname = usePathname();

    function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
        const nextLocale = event.target.value;
        startTransition(() => {
            router.replace(pathname, { locale: nextLocale });
        });
    }

    return (
        <div className="relative inline-block text-left">
            <select
                defaultValue={locale}
                onChange={onSelectChange}
                disabled={isPending}
                className="block w-full pl-3 pr-8 py-2 text-sm bg-transparent border border-[var(--color-slate-700)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent text-[var(--color-slate-300)] hover:text-[var(--color-paper)] cursor-pointer appearance-none min-w-[70px]"
                style={{ fontFamily: "var(--font-mono)" }}
                aria-label="Select Language"
            >
                <option value="en" className="text-black">
                    EN
                </option>
                <option value="cs" className="text-black">
                    CS
                </option>
                <option value="de" className="text-black">
                    DE
                </option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[var(--color-slate-500)]">
                <svg
                    className="h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </div>
        </div>
    );
}
