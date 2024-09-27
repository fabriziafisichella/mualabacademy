"use client";
import { useState, useEffect } from "react";
import { Title } from "../ui/Title";
import { galleryList } from "@/src/app/[locale]/utils/galleryList";
import { TextFade } from "../ui/texteffects/fade";
import { BlurIn } from "../ui/texteffects/blurin";

interface GalleryPrompts {
    title: string;
    description: string;
}

export const GalleryComponent: React.FC<GalleryPrompts> = ({ title, description }) => {
    const [activeIndex, setActiveIndex] = useState(-1);

    const openGallery = (index: number) => setActiveIndex(index);
    const closeGallery = () => setActiveIndex(-1);

    const changeImage = (direction: 1 | -1) => setActiveIndex((prev) => (prev + direction + galleryList.length) % galleryList.length);

    useEffect(() => {
        const handleKeyDown = ({ key }: KeyboardEvent) => {
            if (activeIndex === -1) return;
            key === "ArrowRight" && changeImage(1);
            key === "ArrowLeft" && changeImage(-1);
            key === "Escape" && closeGallery();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [activeIndex]);

    return (
        <div className="w-screen h-[calc(100vh-120px)] p-8 flex flex-col gap-8 justify-center items-center">

            <TextFade direction="down">
                <Title title={title} description={description} />
            </TextFade>


            <ul className="flex flex-wrap justify-center h-[75%] max-sm:h-[50%] gap-5 max-sm:gap-1 mx-auto overflow-y-auto drop-shadow-2xl">

                {galleryList.map((src, index) => (

                    <li key={index}>
                        <TextFade direction="up">
                            <img
                                onClick={() => openGallery(index)}
                                src={src}
                                className="transition-all hover:scale-105 w-[300px] h-[300px] max-sm:w-[100px] max-sm:h-[100px] object-cover bg-gray-200  cursor-pointer aspect-[5/6] lg:aspect-[2/3]"
                                alt={`gallery image ${index + 1}`}
                            />
                        </TextFade>
                    </li>

                ))}
            </ul>

            {activeIndex >= 0 && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
                    onClick={closeGallery}
                >
                    <div className="relative w-11/12 h-4/5 xl:w-4/5 flex items-center">
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                changeImage(-1);
                            }}
                            className="absolute left-0 text-white w-14 h-14 flex items-center justify-center"
                        >
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </button>

                        <img className="object-contain w-full h-full" src={galleryList[activeIndex]} alt={`gallery image ${activeIndex + 1}`} />

                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                changeImage(1);
                            }}
                            className="absolute right-0 text-white w-14 h-14 flex items-center justify-center"
                        >
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};