import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import { teachersEN, teachersIT } from "@/src/app/[locale]/utils/teacherList";
import { TeachersCard } from "./TeachersCard";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Title } from "../ui/Title";
import { TextFade } from "../ui/texteffects/fade";

export function Teachers() {

    const t = useTranslations("About");
    const locale = useLocale();
    const list = (locale === "it" ? teachersIT : teachersEN);

    return (

        <div className="h-screen w-screen flex flex-col justify-center items-center sm:-mt-24">
            <TextFade direction="down">
                <Title title={t("teachers")} description={t("teachersDescription")} />
            </TextFade>

            <TextFade direction="up" delay="0.5">
                <ul className="flex justify-center items-center w-screen sm:scale-125 sm:mt-32">
                    <Carousel className="sm:w-[60%]">
                        <CarouselContent className="max-sm:w-72 h-96">
                            {list.map((teacher, index) =>
                                <CarouselItem key={index} className="cursor-pointer transition-all duration-500 hover:scale-105 md:basis-1/2 lg:basis-1/3 w-52 flex justify-center items-center">
                                    <TeachersCard details={teacher} />
                                </CarouselItem>
                            )}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>

                </ul></TextFade>
        </div>
    )
}