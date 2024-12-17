import { GreenBox } from "../ui/GreenBox";
import { useLocale, useTranslations } from "next-intl";
import { Title } from "../ui/Title";
import { IoBookOutline } from "react-icons/io5";
import { PiMedal } from "react-icons/pi";
import { CgCoffee } from "react-icons/cg";
import { Button } from "../ui/button";
import { FaArrowRight } from "react-icons/fa";
import homeImg from "../../src/app/[locale]/assets/images/homeBanner.webp";
import Image from "next/image";
import Link from "next/link";



export function HomeSchool() {

    const locale = useLocale();
    const t = useTranslations("Hero");

    return (
        <div className="pt-[50px] pb-[75px] w-screen relative flex flex-col justify-center items-center">

            <div className="w-[75%] max-sm:w-[90%] p-8 flex flex-col gap-6">
                
                    <Title title={t("academy")} description={t("description")} altClassDescription="max-sm:text-center" altClass="text-[#93A996] text-center" />

                    <GreenBox
                        icon1={IoBookOutline} title1={t("title1")} desc1={t("desc1")}
                        icon2={PiMedal} title2={t("title2")} desc2={t("desc2")}
                        icon3={CgCoffee} title3={t("title3")} desc3={t("desc3")} />
                
            </div>


            <div className="w-[60%] max-sm:w-[90%] mt-8 flex flex-row max-sm:flex-col justify-evenly items-center gap-3">
                <div className="relative w-[400px] h-[300px] max-sm:w-full max-sm:h-[200px] rounded-xl overflow-hidden shadow-lg">
                    <Image src={homeImg} alt="Banner" quality={100} fill className="object-cover object-center" />

                </div>
                <div>

                    <Title title={t("aboutSchool")} description={t("aboutDescription")} altClass="text-left text-[#93A996] max-sm:mt-3" />
                    <Link href={`/${locale}/p/about`}>
                        <Button>
                            <span className="px-2">{t("button")}</span>
                            <FaArrowRight />
                        </Button>
                    </Link>

                </div>

            </div>


        </div >
    )
}