"use client";
import { useState, useRef, useEffect } from "react";

interface TitleProps {
    title: string;
    description?: string;
    altClass?: string;
    altClassDescription?: string;
}

export function Title({ title, description = "", altClass, altClassDescription }: TitleProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [height, setHeight] = useState("auto");
    const descriptionRef = useRef<HTMLParagraphElement>(null);
    const maxCharLimit = 500;

    const toggleExpanded = () => {
        setIsExpanded((prev) => !prev);
    };

    useEffect(() => {
        if (descriptionRef.current) {
            const currentHeight = descriptionRef.current.scrollHeight;
            const initialHeight = descriptionRef.current.clientHeight;

            setHeight(isExpanded ? `${currentHeight}px` : `${initialHeight}px`);
        }
    }, [isExpanded, description]);

    const displayText =
        isExpanded
            ? description
            : description.length > maxCharLimit
            ? description.slice(0, maxCharLimit) + "..."
            : description;

    return (
        <div className={`flex flex-col gap-2 justify-center ${altClass || 'text-center mx-12 text-[#93A996]'}`}>
            <h2 className="leading-none">{title}</h2>
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${altClassDescription || 'text-left'}`}
                style={{
                    height: height,
                    transition: "height 0.5s ease",
                }}
            >
                <p ref={descriptionRef}>{displayText}</p>
            </div>
            {description.length > maxCharLimit && (
                <h3
                    onClick={toggleExpanded}
                    className="text-center mt-2 underline cursor-pointer"
                >
                    {isExpanded ? "Read less" : "Read more"}
                </h3>
            )}
        </div>
    );
}