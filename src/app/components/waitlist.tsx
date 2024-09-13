"use client";
import React from "react";
import { BackgroundBeams } from "@/app/components/ui/background-beams";

export function BackgroundBeamsDemo() {
    return (
        <div className="h-screen w-full rounded-md bg-[#181823] relative flex flex-col items-center justify-center antialiased">
            <div className="max-w-2xl mx-auto p-4">
                <h1 className="relative z-10 text-3xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-600 text-center font-bold">
                    Join the waitlist
                </h1>
                <p></p>
                <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
                    Be the first to know when Elios is available. We will send you an email with the
                    download link.
                </p>
                <input
                    type="text"
                    placeholder="team@elios.finance"
                    className="rounded-lg border p-2 border-neutral-800 w-full relative z-10 mt-4 bg-[#181823] placeholder:text-neutral-700"
                />
            </div>
            <BackgroundBeams />
        </div>
    );
}
