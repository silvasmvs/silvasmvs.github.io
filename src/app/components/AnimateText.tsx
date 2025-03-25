'use client';

import { motion } from "framer-motion";

export interface AnimateTitleProps {
    className?: string;
    h1?: boolean;
    children: React.ReactNode;
}

export function AnimateText({ className, h1 = false, children }: AnimateTitleProps) {
    if(h1) {
        return (
            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className={className}
            >
                {children}
            </motion.h1>
        );
    }

    return (
        <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 2.5 }}
            className={className}
        >
            {children}
        </motion.p>
    )
}