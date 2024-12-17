import { TextFade } from "../ui/texteffects/fade";
import { useTranslations } from "next-intl";
import { Title } from "../ui/Title";
import { GreenBox } from "../ui/GreenBox";
import { FaHashtag } from "react-icons/fa6";
import { GrGallery } from "react-icons/gr";
import { FiKey } from "react-icons/fi";


export function School() {
    const t = useTranslations("About");

    return (

        <div className="w-screen pt-[50px] relative drop-shadow-2xl flex justify-center">

            <div className="w-[75%] max-sm:w-[90%] p-8">
                <TextFade direction="up" delay="0.5">
                    <Title title={t("school")} description={t("description")} altClassDescription="max-sm:text-center" altClass="text-left text-[#93A996] max-sm:text-center" />
                </TextFade>

                <GreenBox
                    icon1={FaHashtag} title1={t("title1")} desc1={t("desc1")}
                    icon2={GrGallery} title2={t("title2")} desc2={t("desc2")}
                    icon3={FiKey} title3={t("title3")} desc3={t("desc3")} />
            </div>

        </div>


    )
}