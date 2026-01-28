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
    className,
    animate = true,
}: SectionHeaderProps & { animate?: boolean }) {
    // Check if we should inherit color (implying parent sets it, e.g. text-white)
    // Also explicitly check for white request to force it via style if needed
    const isWhite = className?.includes("text-white") || className?.includes("!text-white");
    const inheritColor = className?.includes("text-slate");

    return (
        <div
            className={cn(
                "mb-16",
                animate && "animate-on-scroll",
                align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-3xl",
                className
            )}
        >
            {label && (
                <span className="text-[var(--color-secondary)] font-bold tracking-wider uppercase text-sm mb-4 block">
                    {label}
                </span>
            )}
            <h2
                className={cn(
                    "text-3xl md:text-5xl mb-6",
                    isWhite ? "text-white" : (inheritColor ? "text-inherit" : "text-[var(--color-ink)]")
                )}
                style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 800,
                    color: isWhite ? "#ffffff" : undefined
                }}
            >
                {title}
            </h2>
            {description && (
                <div
                    className={cn(
                        "text-xl",
                        isWhite ? "text-white" : (inheritColor ? "text-inherit" : "text-[var(--color-ink)]")
                    )}
                    style={{ color: isWhite ? "#ffffff" : undefined }}
                >
                    {description}
                </div>
            )}
        </div>
    );
}
