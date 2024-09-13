"use client";
import React from "react";
import { ContainerScroll } from "@/app/components/ui/container-scroll-animation";
import Image from "next/image";
import asset from "@/app/assets/elios_1024.webp"

export function HeroScrollDemo() {
    return (
        <div className="flex flex-col overflow-hidden">
            <ContainerScroll
                titleComponent={
                    <>
                        <h1 className="text-4xl font-semibold text-white">
                            Unleash the power of <br />
                            <span className="text-4xl text-white md:text-[6rem] font-bold mt-1 leading-none">
                                ELIOS
                            </span>
                        </h1>
                    </>
                }
            >
                <Image
                    src={asset}
                    alt="hero"
                    height={1000}
                    width={1000}
                    className="mx-auto object-cover h-full w-full object-center"
                    draggable={false}
                />

            </ContainerScroll>
        </div>
    );
}
