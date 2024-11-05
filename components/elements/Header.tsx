"use client"

import { NavBar } from "./NavBar";
import mainImg from "../../src/app/[locale]/assets/images/header/main.jpg";
import aboutImg from "../../src/app/[locale]/assets/images/header/aboutUs.jpg";
import coursesImg from "../../src/app/[locale]/assets/images/header/courses.jpg";
import galleryImg from "../../src/app/[locale]/assets/images/header/gallery.jpg";
import contactsImg from "../../src/app/[locale]/assets/images/header/contacts.jpg";
import logo from "../../src/app/[locale]/assets/images/logo.png";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Header() {

    const locale = useLocale();
    const pathname = usePathname();
    let backgroundImage;
    let style;
    let headerDimension;
    let title;
    let status;
    let logoDimension;

    switch (pathname) {
        case `/${locale}`:
            backgroundImage = mainImg.src;
            style = "right-0";
            headerDimension = "h-[100vh]";
            status = false;
            logoDimension = "w-[75%] max-sm:w-[50%]";
            break;
        case `/${locale}/p/about`:
            backgroundImage = aboutImg.src;
            style = "left-0";
            headerDimension = "h-[70vh]";
            status = true;
            title = locale === "it" ? "Chi siamo" : "About us";
            logoDimension = "w-[50%] max-sm:w-[35%]";
            break;
        case `/${locale}/p/courses`:
            backgroundImage = coursesImg.src;
            style = "left-0";
            headerDimension = "h-[70vh]";
            status = true;
            title = locale === "it" ? "Masterclass, Corsi ed Eventi" : "Masterclasses, Courses and Events";
            logoDimension = "w-[50%] max-sm:w-[35%]";
            break;
        case `/${locale}/p/gallery`:
            backgroundImage = galleryImg.src;
            style = "left-0";
            headerDimension = "h-[70vh]";
            status = true;
            title = locale === "it" ? "Galleria" : "Gallery";
            logoDimension = "w-[50%] max-sm:w-[35%]";
            break;
        case `/${locale}/p/contacts`:
            backgroundImage = contactsImg.src;
            style = "left-0";
            headerDimension = "h-[70vh]";
            status = true;
            title = locale === "it" ? "Contatti" : "Contact Us";
            logoDimension = "w-[50%] max-sm:w-[35%]";
            break;
        default:
            backgroundImage = mainImg.src;
            style = "right-0";
            headerDimension = "h-[100vh]";
            status = false;
            title = "";
            logoDimension = "w-[50%] max-sm:w-[35%]";
            break;
    }


    return (
        <>
            <header className={`relative w-full ${headerDimension}`} >

                <div
                    className={`fixed top-0 left-0 w-full ${headerDimension} bg-cover bg-center -z-10`}
                    style={{ backgroundImage: `url(${backgroundImage})` }}>

                    <div className={`absolute backdrop-blur-[1px] bg-white bg-opacity-50 h-full w-[30%] /*max-sm:top-[50%] max-sm:translate-y-[-50%]*/ max-sm:py-5 max-sm:h-fit max-sm:w-full flex flex-col md:gap-8 items-center justify-center shadow-2xl ${style}`}>

                        <div className="flex items-center justify-center">
                            <Image src={logo} alt={"logo del sito"} priority={true} className={`relative ${logoDimension}`} />
                        </div>

                        {status && <h1 className="drop-shadow-2xl lg:text-4xl pt-5">
                            {title}
                        </h1>}

                    </div>
                </div>
            </header>

            <nav className="sticky w-full bg-white shadow-lg z-20 top-0">
                <NavBar />
            </nav>
        </>
    );
}