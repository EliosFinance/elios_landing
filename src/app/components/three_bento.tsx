"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "@/app/components/ui/wobble-card";
import leftGood from "@/app/assets/left_god.webp"
import rightGood from "@/app/assets/right_god.webp"

export function WobbleCards() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-6xl mx-auto w-full">
            <WobbleCard
                containerClassName="col-span-1 lg:col-span-2 h-full bg-[#557C56] min-h-[500px] lg:min-h-[300px]"
                className=""
            >
                <div className="max-w-xs">
                    <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                        Access to more powerful features with Elios +
                    </h2>
                    <p className="mt-4 text-left  text-base/6 text-neutral-200">
                        You can have more powerful features with Elios +, like linking multiple
                        bank accounts, seeing the predictive expense further, and more.
                    </p>
                </div>
                <Image
                    src={rightGood}
                    width={500}
                    height={500}
                    alt="Illustration"
                    className="absolute -right-4 lg:-right-[10%] -bottom-10 object-contain"
                />
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 min-h-[300px]">
                <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                    Win points by completing challenges
                </h2>
                <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                    You can redeem your points and get rewards like cashback, discounts, and more.
                </p>
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-[#A04747] min-h-[300px] lg:min-h-[300px] xl:min-h-[400px]">
                <div className="max-w-sm">
                    <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                        Take your money management to the next level
                    </h2>
                    <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
                        With Elios, you can manage your money more effectively and efficiently.
                    </p>
                </div>
                <Image
                    src={leftGood}
                    width={500}
                    height={500}
                    alt="Illustration"
                    className="hidden md:block absolute -right-10 md:-right-[40%] lg:-right-[0%] -bottom-10 object-contain"
                />
            </WobbleCard>
        </div>
    );
}
