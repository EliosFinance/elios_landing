"use client";

import React from "react";
import { Carousel, Card } from "@/app/components/ui/apple-cards-carousel";
import screen1 from "@/app/assets/fonction/1.webp";
import screen2 from "@/app/assets/fonction/2.webp";
import screen3 from "@/app/assets/fonction/3.webp";
import screen4 from "@/app/assets/fonction/4.webp";

export function AppleCardsCarouselDemo() {
    const cards = data.map((card, index) => (
        <Card key={index} card={card} index={index} />
    ));

    return (
        <div className="w-full h-full py-20">
            <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-200">
                Functionality
            </h2>
            <Carousel items={cards} />
        </div>
    );
}

const DummyContent = () => {
    return (
        <>
            {[...new Array(1).fill(1)].map((_, index) => {
                return (
                    <div
                        key={"dummy-content" + index}
                        className="bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
                    >
                        <p className="text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                            <span className="font-bold text-neutral-200">
                            Auto-save feature can save up to €150 per month.
                            </span>
                            {" "}
                            <br></br>
                            Manage
                        </p>
                    </div>
                );
            })}
        </>
    );
};

const DummyContent2 = () => {
    return (
        <>
            {[...new Array(1).fill(1)].map((_, index) => {
                return (
                    <div
                        key={"dummy-content" + index}
                        className="bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
                    >
                        <p className="text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                            <span className="font-bold text-neutral-200">
                            We have a lot of investments features.
                            </span>
                            {" "}
                            <br></br>
                            Manage your investments with us.
                        </p>
                    </div>
                );
            })}
        </>
    );
}

const DummyContent3 = () => {
    return (
        <>
            {[...new Array(1).fill(1)].map((_, index) => {
                return (
                    <div
                        key={"dummy-content" + index}
                        className="bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
                    >
                        <p className="text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                            <span className="font-bold text-neutral-200">
                            You can add your friends and complete challenges.
                            </span>
                            {" "}
                            <br></br>
                            Win rewards with your friends, like a team.
                        </p>
                    </div>
                );
            })}
        </>
    );
}

const DummyContent4 = () => {
    return (
        <>
            {[...new Array(1).fill(1)].map((_, index) => {
                return (
                    <div
                        key={"dummy-content" + index}
                        className="bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
                    >
                        <p className="text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                            <span className="font-bold text-neutral-200">
                            We have a blog post about how to manage your money.
                            </span>
                            {" "}
                            <br></br>
                            You can discover it on our app and have a new post every week about a specific subject.
                        </p>
                    </div>
                );
            })}
        </>
    );
}

const data = [
    {
        category: "Save money",
        title: "With the auto-save feature, you can save up to €150 per month.",
        src: screen1?.src,
        content: <DummyContent />,
    },
    {
        category: "Follow investment",
        title: "With all the investment features, you can follow your investments.",
        src: screen2?.src,
        content: <DummyContent2 />,
    },
    {
        category: "Add you fiends",
        title: "Complete challenge together and win rewards.",
        src: screen3?.src,
        content: <DummyContent3 />,
    },
    {
        category: "Education",
        title: "Learn how to manage your money.",
        src: screen4?.src,
        content: <DummyContent4 />,
    },
    // {
    //     category: "iOS",
    //     title: "Photography just got better.",
    //     src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //     content: <DummyContent />,
    // },
    // {
    //     category: "Hiring",
    //     title: "Hiring for a Staff Software Engineer",
    //     src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //     content: <DummyContent />,
    // },
];


export default AppleCardsCarouselDemo;