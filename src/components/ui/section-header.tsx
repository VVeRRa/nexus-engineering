import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
    label?: ReactNode;
    title: ReactNode;
    description?: ReactNode;
    align?: "left" | "center";
    className?: string;
}

export function SectionHeader({
    label,
    title,
    description,
    align = "left",
    className
}: SectionHeaderProps) {
    return (
        <div
            className={cn(
                "mb-16 animate-on-scroll",
                align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-3xl",
                className
            )}
        >
            {label && (
                <span className="text-[var(--color-primary)] font-bold tracking-wider uppercase text-sm mb-4 block">
                    {label}
                </span>
            )}
            <h2
                className="text-4xl md:text-5xl text-[var(--color-ink)] mb-6"
                style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
            >
                {title}
            </h2>
            {description && (
                <div className="text-xl text-[var(--color-text-secondary)]">
                    {description}
                </div>
            )}
        </div>
    );
}
