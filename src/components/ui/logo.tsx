"use client";

import React from "react";

export function Logo({ className = "" }: { className?: string }) {
    return (
        <div className={`flex items-center gap-0 ${className}`} style={{ height: "24px" }}>
            {/* "BLA" part using the font */}
            <span
                className="text-2xl tracking-tight font-extrabold text-[var(--color-ink)]"
                style={{
                    fontFamily: "var(--font-display)",
                    lineHeight: "24px",
                    display: "flex",
                    alignItems: "center",
                    height: "100%"
                }}
            >
                BLA
            </span>
            {/* "iT." part using SVG for geometric precision */}
            <svg
                width="38"
                height="24"
                viewBox="0 0 38 24"
                className="text-[var(--color-ink)]"
                style={{ marginLeft: "-1.5px" }} // Micro-adjustment for spacing
            >
                {/* "i" stem centered vertically relative to cap height */}
                <rect x="2" y="9.3" width="4" height="11.125" fill="currentColor" />
                {/* "i" dot */}
                <rect x="2" y="3.3" width="4" height="4" fill="currentColor" />

                {/* "T" vertical bar */}
                <rect x="15" y="3.3" width="4" height="17.125" fill="currentColor" />
                {/* "T" top bar */}
                <rect x="8" y="3.3" width="18" height="4" fill="currentColor" />

                {/* "." dot */}
                <rect x="27" y="16.425" width="4" height="4" fill="var(--color-primary)" />
            </svg>
        </div>
    );
}
