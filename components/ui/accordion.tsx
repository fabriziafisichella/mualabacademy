"use client";

import { useState, useRef, useEffect } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { StaticImageData } from "next/image";

interface AccordionProps {
    title: string;
    content: string;
    image?: StaticImageData;
    featuring?: string;
    date?: string;
}

const Accordion = ({ title, content, image, featuring, date }: AccordionProps) => {
    const [isActive, setIsActive] = useState(false);
    const contentRef = useRef<HTMLDivElement | null>(null);

    const [height, setHeight] = useState("0px");
    const [opacity, setOpacity] = useState(0);
    const [transform, setTransform] = useState("translateY(-20px)");

    useEffect(() => {
        if (contentRef.current) {
            if (isActive) {
                setHeight(`${contentRef.current.scrollHeight}px`);
                setOpacity(1);
                setTransform("translateY(0)");
            } else {
                setHeight("0px");
                setOpacity(0);
                setTransform("translateY(-20px)");
            }
        }
    }, [isActive]);

    return (
        <div
            className="mt-4 w-[75%] max-sm:w-full rounded-xl shadow-2xl"
            style={{
                backgroundImage: image
                    ? `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 1)), url(${image.src})`
                    : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div
                className="flex flex-col p-4 max-sm:p-3 cursor-pointer"
                onClick={() => setIsActive((prevIsActive) => !prevIsActive)}
            >
                <div className="flex justify-between">
                    <span>
                        <h2 className="text-2xl pl-4" style={{ textShadow: "0px 0px 10px rgba(147, 169, 150, 1)" }}>
                            {title}
                        </h2>
                    </span>

                    <span>
                        {isActive ? <IoIosArrowDown className="h-6 w-6" /> : <IoIosArrowUp className="h-6 w-6" />}
                    </span>
                </div>

                <h3 className="pl-4">{featuring} • <span className="text-sm">{date}</span></h3>
            </div>

            <div
                ref={contentRef}
                style={{
                    height: height,
                    opacity: opacity,
                    transform: transform,
                    overflow: "hidden",
                    transition: "height 0.5s ease-in-out, opacity 0.3s ease-in-out, transform 0.3s ease-in-out",
                }}
            >
                <div className="pl-10 pr-10 pb-10 max-sm:p-5 text-black" style={{ textShadow: "0px 0px 5px rgba(225, 225, 225, 1)" }}>{content}</div>
            </div>
        </div>
    );
};

export default Accordion;