import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import { teachersEN, teachersIT } from "@/src/app/[locale]/utils/teacherList";
import { TeachersCard } from "./TeachersCard";
import { Title } from "../ui/Title";
import { TextFade } from "../ui/texteffects/fade";

export function Teachers() {

    const t = useTranslations("About");
    const locale = useLocale();
    const list = (locale === "it" ? teachersIT : teachersEN);

    return (

        <div className="w-screen relative flex flex-col items-center mt-10">
            <TextFade direction="down">
                <Title title={t("teachers")} altClassDescription="max-sm:text-center" description={t("teachersDescription")} />
            </TextFade>

            <TextFade direction="up" delay="0.5">
                <ul className="flex justify-center flex-col items-center w-screen p-8 gap-5">
                    
                            {list.map((teacher, index) =>
                                <TeachersCard key={index} details={teacher} isReversed={index % 2 !== 0} />
                            )}

                </ul></TextFade>
        </div>
    )
}