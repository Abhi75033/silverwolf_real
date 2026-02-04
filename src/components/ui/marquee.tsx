
import { cn } from "@/lib/utils";
import React from "react";

interface MarqueeProps {
    className?: string;
    reverse?: boolean;
    pauseOnHover?: boolean;
    children?: React.ReactNode;
    vertical?: boolean;
    repeat?: number;
    [key: string]: any; // Allow other props
}

export const Marquee = ({
    className,
    reverse,
    pauseOnHover = false,
    children,
    vertical = false,
    repeat = 4,
    keywords, // Handle keywords prop specifically if passed directly
    direction = "left", // Handle direction prop
    ...props
}: MarqueeProps) => {

    // Adapter for the keywords usage in TechStack
    const content = children || (keywords && Array.isArray(keywords)
        ? keywords.map((word: string, i: number) => (
            <span key={i} className="mx-4 text-xs font-mono text-white/50 uppercase tracking-widest">{word}</span>
        ))
        : null);

    return (
        <div
            {...props}
            className={cn(
                "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
                {
                    "flex-row": !vertical,
                    "flex-col": vertical,
                },
                className
            )}
        >
            {Array(repeat)
                .fill(0)
                .map((_, i) => (
                    <div
                        key={i}
                        className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
                            "animate-marquee flex-row": !vertical,
                            "animate-marquee-vertical flex-col": vertical,
                            "group-hover:[animation-play-state:paused]": pauseOnHover,
                            "[animation-direction:reverse]": reverse || direction === "right",
                        })}
                    >
                        {content}
                    </div>
                ))}
        </div>
    );
};
