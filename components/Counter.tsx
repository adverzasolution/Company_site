"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

// 👇 Props type fix
interface CounterProps {
    from?: number;
    to: number;
    duration?: number;
}

export default function Counter({ from = 0, to, duration = 2 }: CounterProps) {
    const count = useMotionValue(from);
    const rounded = useTransform(count, (latest) => Math.round(latest));

    useEffect(() => {
        const controls = animate(count, to, {
            duration,
            ease: "easeOut",
        });
        return controls.stop;
    }, [to, duration]);

    return <motion.span>{rounded}</motion.span>;
}
