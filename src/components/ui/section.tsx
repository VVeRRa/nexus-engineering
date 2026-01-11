import { ReactNode, CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
    id?: string;
    className?: string;
    children: ReactNode;
    background?: ReactNode;
    style?: CSSProperties;
}

export function Section({ id, className, children, background, style }: SectionProps) {
    return (
        <section
            id={id}
            className={cn(
                "section bg-[var(--color-paper)] relative overflow-hidden pb-24 transition-colors duration-300",
                className
            )}
            style={style}
        >
            {background && background}
            <div className="container relative z-10">
                {children}
            </div>
        </section>
    );
}
