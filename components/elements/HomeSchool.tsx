import { GreenBox } from "../ui/GreenBox";
import { TextFade } from "../ui/texteffects/fade";
import { useTranslations } from "next-intl";
import { Title } from "../ui/Title";
import { IoBookOutline } from "react-icons/io5";
import { PiMedal } from "react-icons/pi";
import { CgCoffee } from "react-icons/cg";
import { Button } from "../ui/button";
import homeImg from "../../src/app/[locale]/assets/images/homeBanner.webp";
import Image from "next/image";



export function HomeSchool() {

    const t = useTranslations("Hero");

    return (
        <div className="w-screen relative drop-shadow-2xl flex flex-col justify-center items-center">

            <div className="w-[75%] max-sm:w-[90%] p-8">
                <TextFade direction="up" delay="0.5">
                    <Title title={t("academy")} description={t("description")} altClassDescription="max-sm:text-center" altClass="text-[#93A996] text-center" />
                </TextFade>

                <GreenBox
                    icon1={IoBookOutline} title1={t("title1")} desc1={t("desc1")}
                    icon2={PiMedal} title2={t("title2")} desc2={t("desc2")}
                    icon3={CgCoffee} title3={t("title3")} desc3={t("desc3")} />
            </div>

            <div className="w-[60%] max-sm:w-[90%] mt-8 flex flex-row max-sm:flex-col justify-between items-center gap-3">
                    <div className="relative w-[400px] h-[300px] max-sm:w-full max-sm:h-[200px] rounded-xl overflow-hidden shadow-2xl">
                        <Image src={homeImg} alt="Banner" fill className="object-cover object-center" />
                    </div>
                    <div>
                        <Title title={t("aboutSchool")} description={t("aboutDescription")} altClass="text-left text-[#93A996] max-sm:mt-3" />
                        <Button>
                            Scopri.
                        </Button>
                    </div>
                </div>

        </div>
    )
}