import Image from "next/image";
import heroImage from "../../src/app/[locale]/assets/images/hero.jpeg";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import { TextFade } from "../ui/texteffects/fade";
import { Button } from "../ui/button";

export default function Hero() {
    const t = useTranslations("Hero");
    const locale = useLocale();

    return (
        <>
            <div className="h-[calc(100dvh-120px)] w-screen relative drop-shadow-2xl">


                <div className="relative w-full h-full"
                    style={{
                        clipPath: 'polygon(0 35%, 100% 80%, 100% 0, 0 0)',
                    }}>

                    <Image src={heroImage} alt="hero image" priority fill className="object-cover object-center" />

                </div>

                <TextFade direction="up" delay="0.5">
                    <div className="absolute inset-0 flex flex-col justify-end items-center shadow-2xl">

                        <div className="p-8 bg-white max-sm:m-8 sm:m-32 max-sm:mb-24 text-center sm:scale-150 sm:w-[60%]">

                            <h1>
                                • MuA LAB •
                            </h1>
                            <p>
                                {t("description")}
                            </p>

                            <Button variant="outline"><a href={`/${locale}/p/courses`}>{t("button1")}</a></Button>
                            <Button variant="outline"><a href={`/${locale}/p/master`}>{t("button2")}</a></Button>
                        </div>
                    </div>
                </TextFade>


            </div>
        </>
    );
}
