import React from "react";
import { cn } from "../../lib/utils";

export function FlippingCard({
    className,
    frontContent,
    backContent,
    height = 300,
    width = 350,
}) {
    return (
        <div
            className="group/flipping-card [perspective:1000px]"
            style={{
                "--height": typeof height === "number" ? `${height}px` : height,
                "--width": typeof width === "number" ? `${width}px` : width,
            }}
        >
            <div
                className={cn(
                    "relative rounded-xl border border-neutral-200 bg-white shadow-lg transition-all duration-700 [transform-style:preserve-3d] group-hover/flipping-card:[transform:rotateY(180deg)] dark:border-neutral-800 dark:bg-neutral-950",
                    "h-[var(--height)] w-[var(--width)]",
                    className
                )}
            >
                {/* Front Face */}
                <div className="absolute inset-0 h-full w-full rounded-[inherit] bg-slate-800/60 border border-slate-700 text-white [transform-style:preserve-3d] [backface-visibility:hidden] [transform:rotateY(0deg)]">
                    <div className="[transform:translateZ(70px)_scale(.93)] h-full w-full">
                        {frontContent}
                    </div>
                </div>
                {/* Back Face */}
                <div className="absolute inset-0 h-full w-full rounded-[inherit] bg-slate-800/90 border border-slate-700 text-white [transform-style:preserve-3d] [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <div className="[transform:translateZ(70px)_scale(.93)] h-full w-full">
                        {backContent}
                    </div>
                </div>
            </div>
        </div>
    );
}
