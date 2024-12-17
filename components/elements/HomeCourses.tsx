import Image from "next/image";
import coursesImg from "../../src/app/[locale]/assets/images/coursesLink.webp";
import masterclassImg from "../../src/app/[locale]/assets/images/masterclassLink.webp";
import stageImg from "../../src/app/[locale]/assets/images/stageLink.webp";
import Link from "next/link";
import { useLocale } from "next-intl";

export function HomeCourses() {

    const locale = useLocale();

    const box = [
        {
            title: locale === "it" ? "Corsi" : "Courses",
            image: coursesImg,
            href: `${locale}/p/courses#courses`,
        },
        {
            title: locale === "it" ? "Masterclass" : "Masterclasses",
            image: masterclassImg,
            href: `${locale}/p/courses#masterclass`,
        },
        {
            title: locale === "it" ? "Stage" : "Stages",
            image: stageImg,
            href: `${locale}/p/courses#stage`,
        }
    ];


    return (
        <div className="w-screen pb-[50px] justify-center items-center flex max-sm:flex-col drop-shadow-md">

            {box.map((box, idx) =>
                <div key={idx} className="w-full relative h-[300px] max-sm:h-52 group">
                    <Link href={box.href} >
                        <div>
                            <Image src={box.image} alt="courses Image BG" fill className="object-cover object-center" />
                        </div>
                        <div className="absolute inset-0 bg-[#93A996] bg-opacity-50 group-hover:bg-opacity-0 transition-all duration-300" />
                        <h1 className="text-[35px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white drop-shadow-[0_0_10px_#000000] z-4 group-hover:tracking-widest transition-all duration-300">
                            {box.title}
                        </h1>
                    </Link>
                </div>
            )}

        </div>
    )
}