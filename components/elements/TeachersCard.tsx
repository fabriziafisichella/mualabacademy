"use client";

import Image, { StaticImageData } from "next/image";
import { useRef, useEffect, useState } from "react";
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

interface SocialsProps {
    instagram: boolean,
    instagramUrl: string,
    twitter: boolean,
    twitterUrl: string,
    facebook: boolean,
    facebookUrl: string,
    linkedin: boolean,
    linkedinUrl: string,
    youtube: boolean,
    youtubeUrl: string,
    tiktok: boolean,
    tiktokUrl: string,
}

interface CardProps {
    details: {
        name: string,
        image: StaticImageData,
        role: string,
        description: string,
        socials: SocialsProps,
    }
    isReversed: boolean,
}

export function TeachersCard({ details, isReversed }: CardProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [height, setHeight] = useState("auto");
    const descriptionRef = useRef<HTMLParagraphElement>(null);
    const maxCharLimit = 250;

    const toggleExpanded = () => {
        setIsExpanded((prev) => !prev);
    };

    useEffect(() => {
        if (descriptionRef.current) {
            const currentHeight = descriptionRef.current.scrollHeight;
            const initialHeight = descriptionRef.current.clientHeight;

            setHeight(isExpanded ? `${currentHeight}px` : `${initialHeight}px`);
        }
    }, [isExpanded, details.description]);

    const displayText =
        isExpanded
            ? details.description
            : details.description.length > maxCharLimit
                ? details.description.slice(0, maxCharLimit) + "..."
                : details.description;

    return (


        <li className={`w-[55%] max-sm:w-[90%] relative rounded-[5px] p-5 flex justify-between flex-row items-center shadow-xl gap-5 ${isReversed ? "flex-row-reverse" : "flex-row"} max-sm:flex-col-reverse`}>

            <div className="p-6 sm:w-[75%] sm:h-full">
                <div className="flex h-full w-[full] p-3 items-center">
                    <div className="h-[130px] w-[5px] bg-[#93A996] mr-4" />
                    <div>
                        <h2 className="max-sm:text-[2rem] leading-none">{details.name}</h2>
                        <h3 className="text-[#93A996]">{details.role}</h3>

                        <div className="mt-2 flex gap-2">
                            {(details.socials.instagram) &&
                                <a href={details.socials.instagramUrl} target="_blank" rel="noopener noreferrer">
                                    <FaInstagram className="h-6 w-6 transition-all hover:text-[#93A996]" />
                                </a>
                            }
                            {(details.socials.twitter) &&
                                <a href={details.socials.twitterUrl} target="_blank" rel="noopener noreferrer">
                                    <FaXTwitter className="h-6 w-6 transition-all hover:text-[#93A996]" />
                                </a>
                            }
                            {(details.socials.facebook) &&
                                <a href={details.socials.facebookUrl} target="_blank" rel="noopener noreferrer">
                                    <FaFacebook className="h-6 w-6 transition-all hover:text-[#93A996]" />
                                </a>
                            }
                            {(details.socials.linkedin) &&
                                <a href={details.socials.linkedinUrl} target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin className="h-6 w-6 transition-all hover:text-[#93A996]" />
                                </a>
                            }
                            {(details.socials.youtube) &&
                                <a href={details.socials.youtubeUrl} target="_blank" rel="noopener noreferrer">
                                    <FaYoutube className="h-6 w-6 transition-all hover:text-[#93A996]" />
                                </a>
                            }
                            {(details.socials.tiktok) &&
                                <a href={details.socials.tiktokUrl} target="_blank" rel="noopener noreferrer">
                                    <FaTiktok className="h-6 w-6 transition-all hover:text-[#93A996]" />
                                </a>
                            }
                        </div>

                    </div>

                </div>

                <div className="overflow-hidden transition-all duration-500 ease-in-out text-left"
                    style={{
                        height: height,
                        transition: "height 0.5s ease",
                    }}>
                    <p ref={descriptionRef}>{displayText}</p>


                </div>
                {details.description.length > maxCharLimit && (
                    <h3
                        onClick={toggleExpanded}
                        className="text-center mt-2 underline cursor-pointer"
                    >
                        {isExpanded ? "Read less" : "Read more"}
                    </h3>
                )}
            </div>

            <div className="sm:w-[250px] sm:h-[400px] max-sm:w-full max-sm:h-[300px] relative max-sm:mb-[-30px] rounded overflow-hidden" >
                <Image src={details.image} alt="Profile image" quality={100} fill className="object-cover sm:object-center max-sm:object-[0_0]" />
            </div>

        </li >

    )
}