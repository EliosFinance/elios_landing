/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/app/hooks/use-outside-click";

export function ExpandableCardDemo() {
    const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
        null
    );
    const ref = useRef<HTMLDivElement>(null);
    const id = useId();

    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setActive(false);
            }
        }

        if (active && typeof active === "object") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);

    useOutsideClick(ref, () => setActive(null));

    return (
        <>
            <AnimatePresence>
                {active && typeof active === "object" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/20 h-full w-full z-10"
                    />
                )}
            </AnimatePresence>
            <AnimatePresence>
                {active && typeof active === "object" ? (
                    <div className="fixed inset-0 grid place-items-center z-[100]">
                        <motion.button
                            key={`button-${active.title}-${id}`}
                            layout
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            exit={{
                                opacity: 0,
                                transition: {
                                    duration: 0.05,
                                },
                            }}
                            className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                            onClick={() => setActive(null)}
                        >
                            <CloseIcon />
                        </motion.button>
                        <motion.div
                            layoutId={`card-${active.title}-${id}`}
                            ref={ref}
                            className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-neutral-900 sm:rounded-3xl overflow-hidden"
                        >
                            <motion.div layoutId={`image-${active.title}-${id}`}>
                                <Image
                                    priority
                                    width={200}
                                    height={200}
                                    src={active.src}
                                    alt={active.title}
                                    className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                                />
                            </motion.div>

                            <div>
                                <div className="flex justify-between items-start p-4">
                                    <div className="">
                                        <motion.h3
                                            layoutId={`title-${active.title}-${id}`}
                                            className="font-bold text-neutral-200"
                                        >
                                            {active.title}
                                        </motion.h3>
                                        <motion.p
                                            layoutId={`description-${active.description}-${id}`}
                                            className="text-neutral-400"
                                        >
                                            {active.description}
                                        </motion.p>
                                    </div>

                                    <motion.a
                                        layoutId={`button-${active.title}-${id}`}
                                        href={active.ctaLink}
                                        target="_blank"
                                        className="px-4 py-3 text-sm rounded-full font-bold bg-[#D0A3DD] text-white"
                                    >
                                        {active.ctaText}
                                    </motion.a>
                                </div>
                                <div className="pt-4 relative px-4">
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                                    >
                                        {typeof active.content === "function"
                                            ? active.content()
                                            : active.content}
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                ) : null}
            </AnimatePresence>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">
                <div className="p-4">
                    <h2 className="text-xl md:text-5xl font-bold text-neutral-200 mb-8">
                        About us
                    </h2>
                    <p className="text-neutral-400">
                        The story begins with a group of students who all have one thing in common: managing their money and learning how to use it in the best way possible. Therefore, we wanted to create an app to directly address the issue that all young people face, which is managing their money. Thus, Elios was born. The team is made up of developers, designers, and marketers who all have the same goal in mind: to help young people manage their money in the best way possible. We are dedicated to creating innovative solutions that make managing money easy and convenient for everyone. Our mission is to help young people take control of their finances and achieve their financial goals. We believe that everyone should have access to the tools and resources they need to manage their money effectively and make informed financial decisions. We are committed to creating a better future for young people by providing them with the tools they need to succeed.{" "}
                    </p>
                </div>
                <div>
                    <ul className="w-full gap-4">
                        {cards.map((card, index) => (
                            <motion.div
                                layoutId={`card-${card.title}-${id}`}
                                key={`card-${card.title}-${id}`}
                                onClick={() => setActive(card)}
                                className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-[#df4a9e] rounded-xl cursor-pointer"
                            >
                                <div className="flex gap-4 flex-col md:flex-row">
                                    <motion.div layoutId={`image-${card.title}-${id}`}>
                                        <Image
                                            width={100}
                                            height={100}
                                            src={card.src}
                                            alt={card.title}
                                            className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                                        />
                                    </motion.div>
                                    <div className="">
                                        <motion.h3
                                            layoutId={`title-${card.title}-${id}`}
                                            className="font-medium text-neutral-200 text-center md:text-left"
                                        >
                                            {card.title}
                                        </motion.h3>
                                        <motion.p
                                            layoutId={`description-${card.description}-${id}`}
                                            className="text-neutral-300 text-center md:text-left"
                                        >
                                            {card.description}
                                        </motion.p>
                                    </div>
                                </div>
                                <motion.button
                                    layoutId={`button-${card.title}-${id}`}
                                    className="px-8 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-[#D0A3DD] hover:text-white text-black mt-4 md:mt-0"
                                >
                                    {card.ctaText}
                                </motion.button>
                            </motion.div>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export const CloseIcon = () => {
    return (
        <motion.svg
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            exit={{
                opacity: 0,
                transition: {
                    duration: 0.05,
                },
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-black"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
        </motion.svg>
    );
};

const cards = [
    {
        description: "Lead developer",
        title: "Florian palvadeau",
        src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlfGVufDB8fDB8fHwy",
        ctaText: "Info",
        ctaLink: "https://www.elios.finance/",
        content: () => {
            return (
                <p>
                    Florian is a lead developer at Elios. He is responsible for overseeing the development 
                    of the app and ensuring that it meets the highest standards of quality and performance. With 
                    a background in computer science and software engineering
                    <br /> <br />
                    Florian has a passion for technology and a keen eye for detail. He is dedicated to creating 
                    innovative solutions that enhance the user experience and make managing money easier and 
                    more efficient.
                </p>
            );
        },
    },
    {
        description: "Bonne question",
        title: "Thibault Sulem",
        src: "https://images.unsplash.com/photo-1441786485319-5e0f0c092803?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
        ctaText: "Info",
        ctaLink: "https://www.elios.finance/",
        content: () => {
            return (
                <p>
                    Thibault is a designer at Elios. He is responsible for creating the visual
                    elements of the app and ensuring that it is both aesthetically pleasing
                    and user-friendly. With a background in graphic design and user
                    experience, Thibault has a keen eye for detail and a passion for
                    creating beautiful and intuitive interfaces. <br /> <br /> He is
                    dedicated to creating a seamless user experience that makes managing
                    money easy and enjoyable for everyone.
                </p>
            );
        },
    },

    {
        description: "Mobile developer",
        title: "Louis perennot",
        src: "https://images.unsplash.com/photo-1542596594-649edbc13630?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
        ctaText: "Info",
        ctaLink: "https://www.elios.finance/",
        content: () => {
            return (
                <p>
                    Louis is a mobile developer at Elios. He is responsible for developing
                    the app for both iOS and Android platforms, ensuring that it runs
                    smoothly and efficiently on all devices. With a background in mobile
                    app development and a passion for technology, Louis is dedicated to
                    creating a seamless user experience that makes managing money easy
                    and convenient. <br /> <br /> He is committed to staying up-to-date
                    with the latest trends and technologies in mobile development to
                    ensure that Elios remains at the forefront of innovation.
                </p>
            );
        },
    },
    {
        description: "CPD",
        title: "Louis nourit",
        src: "https://images.unsplash.com/photo-1440133197387-5a6020d5ace2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
        ctaText: "Info",
        ctaLink: "https://www.elios.finance/",
        content: () => {
            return (
                <p>
                    Louis is a CPD at Elios. He is responsible for managing the company&apos;s
                    finances and ensuring that it remains profitable and sustainable. With a
                    background in finance and accounting, Louis has a keen eye for detail and a
                    passion for numbers. He is dedicated to ensuring that Elios remains
                    financially stable and successful, allowing the team to focus on creating
                    innovative solutions that help young people manage their money more
                    effectively. <br /> <br /> He is committed to maintaining the highest
                    standards of financial management and transparency to ensure the long-term
                    success of the company.
                </p>
            );
        },
    },
    {
        description: "Full stack developer",
        title: "Alexandre Charles",
        src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTF8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
        ctaText: "Info",
        ctaLink: "https://www.elios.finance/",
        content: () => {
            return (
                <p>
                    Alexandre is a full-stack developer at Elios. He is responsible for
                    developing the back-end and front-end of the app, ensuring that it runs
                    smoothly and efficiently on all devices. With a background in software
                    engineering and a passion for technology, Alexandre is dedicated to
                    creating innovative solutions that enhance the user experience and make
                    managing money easier and more efficient. <br /> <br /> He is committed
                    to staying up-to-date with the latest trends and technologies in web
                    development to ensure that Elios remains at the forefront of innovation
                </p>
            );
        },
    },
];