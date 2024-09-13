"use client";

import { motion } from "framer-motion";
import { HeroHighlight } from "@/app/components/ui/hero-highlight";
import { BackgroundLinesDemo } from "./HeroText";

export function HeroHighlightDemo() {
    return (
        <>
            <HeroHighlight>
                <motion.h1
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: [20, -5, 0],
                    }}
                    transition={{
                        duration: 0.5,
                        ease: [0.4, 0.0, 0.2, 1],
                    }}
                    className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-white max-w-6xl leading-relaxed lg:leading-snug text-center mx-auto"
                >
                    {/* This is the story and the power of
                    <br />
                    <Highlight className="text-white font-extrabold">
                        Elios
                    </Highlight> */}
                    <BackgroundLinesDemo />
                </motion.h1>
            </HeroHighlight>
        </>
    );
}
