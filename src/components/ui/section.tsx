import { ReactNode, CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
    id?: string;
    className?: string;
    children: ReactNode;
    background?: ReactNode;
    style?: CSSProperties;
}

export function Section({ id, className, children, background, style, variant = "light" }: SectionProps & { variant?: "light" | "dark" }) {
    return (
        <section
            id={id}
            className={cn(
                "section relative overflow-hidden transition-colors duration-300",
                variant === "dark" ? "bg-ink text-paper" : "bg-paper text-ink",
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
