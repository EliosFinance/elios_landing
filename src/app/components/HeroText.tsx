import React from "react";
import { BackgroundLines } from "@/app/components/ui/background-lines";

export function BackgroundLinesDemo() {
    return (
        <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
            <h2 className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-600 to-white text-center text-3xl md:text-4xl lg:text-7xl py-2 md:py-10 relative z-20 font-bold tracking-tight">
                Elios <br /> new way to manage your finances
            </h2>
            <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-400 text-center">
                Innovative app that helps you manage your finances in a new way.
            </p>
        </BackgroundLines>
    );
}
