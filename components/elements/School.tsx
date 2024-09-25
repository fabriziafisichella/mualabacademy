import Image from "next/image";
import aboutus from "../../src/app/[locale]/assets/images/aboutus.jpg";
import { TextFade } from "../ui/texteffects/fade";
import { useTranslations } from "next-intl";
import { Title } from "../ui/Title";


export function School() {
    const t = useTranslations("About");

    return (


        <div className="h-[calc(100dvh-120px)] w-screen relative drop-shadow-2xl">


            <div className="relative w-full h-[50%]">

                <Image src={aboutus} alt="hero image" priority fill className="object-cover object-center" />

            </div>


            <div className="flex flex-col justify-center items-center h-[50%] sm:-mt-8">
                <TextFade direction="up" delay="0.5">
                    <Title title={t("school")} description={t("description")} />
                </TextFade>
            </div>


        </div>

    )
}