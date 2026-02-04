import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionHeaderProps {
    label?: ReactNode;
    title: ReactNode;
    description?: ReactNode;
    align?: "left" | "center";
    className?: string;
    titleClassName?: string;
}

export function SectionHeader({
    label,
    title,
    description,
    align = "left",
    className,
    titleClassName,
}: SectionHeaderProps) {
    return (
        <div
            className={cn(
                "mb-8 md:mb-16 relative z-10",
                align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-3xl",
                className
            )}
        >
            {label && (
                <motion.span
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-accent font-mono text-[10px] tracking-[0.4em] uppercase mb-6 block"
                >
                    {label}
                </motion.span>
            )}
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className={cn(
                    "text-3xl sm:text-5xl md:text-7xl lg:text-8xl mb-8 tracking-tighter leading-[0.9] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 pb-2 break-words hyphens-auto",
                    titleClassName
                )}
                style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 900
                }}
            >
                {title}
            </motion.h2>
            {description && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg md:text-xl text-muted max-w-2xl mx-auto"
                >
                    {description}
                </motion.div>
            )}
        </div>
    );
}
