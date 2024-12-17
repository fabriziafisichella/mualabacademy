"use client";
import { useState, useEffect } from "react";
import { Title } from "../ui/Title";
import { TextFade } from "../ui/texteffects/fade";
import { useLocale } from 'next-intl';
import Image from 'next/image';

interface GalleryPrompts {
    title: string;
    description: string;
}

type File = {
    id: string;
    name: string;
    webContentLink: string;
};

export const GalleryComponent: React.FC<GalleryPrompts> = ({ title, description }) => {

    const [photos, setPhotos] = useState<File[]>([]);
    const [error, setError] = useState<string | null>(null);
    const locale = useLocale();

    const [activeIndex, setActiveIndex] = useState(-1);

    const openGallery = (index: number) => setActiveIndex(index);
    const closeGallery = () => setActiveIndex(-1);

    const changeImage = (direction: 1 | -1) => setActiveIndex((prev) => (prev + direction + photos.length) % photos.length);


    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                const response = await fetch(`/${locale}/api/getGallery`);
                if (!response.ok) {
                    throw new Error('Failed to fetch photos');
                }
                const data = await response.json();

               
                setPhotos(data); 
            } catch (error) {
                setError(error instanceof Error ? error.message : 'Unknown error');
            }
        };

        fetchPhotos();
    }, [locale]);

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

    if (error) {
        return <div>Error: {error}</div>;
    }


    return (
        <div className="w-screen h-full p-8 pt-[50px] flex flex-col gap-8 justify-center items-center bg-white">

            <TextFade direction="down">
                <Title title={title} description={description} altClassDescription="text-center" />
            </TextFade>


            <ul className="flex flex-wrap justify-center w-full gap-5 max-sm:gap-2 overflow-y-auto">

                {photos.map((photo, index) => (

                    <li key={index} className="shadow-2xl overflow-hidden rounded">
                        <TextFade direction="up">
                            <Image
                                onClick={() => openGallery(index)}
                                src={`https://drive.usercontent.google.com/download?id=${photo.id}`}
                                className="transition-all hover:scale-105 max-sm:w-[160px] max-sm:h-[300px] object-cover bg-gray-200 rounded-md  cursor-pointer aspect-[5/6] lg:aspect-[2/3]"
                                alt={`gallery image ${index + 1}`}
                                width={"250"}
                                height={"500"}
                                loading="lazy"
                                quality={0}
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

                        {photos[activeIndex] && ( 
                            <Image
                                className="object-contain w-full h-full"
                                src={`https://drive.usercontent.google.com/download?id=${photos[activeIndex].id}`} 
                                alt={`gallery image ${activeIndex + 1}`}
                                width={800} 
                                height={600}
                                loading="lazy"
                                quality={0}
                            />
                        )}

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