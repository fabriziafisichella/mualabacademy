import { Title } from "../ui/Title";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import { MasterclassEN, MasterclassIT } from "@/src/app/[locale]/utils/masterclassList";
import Image from "next/image";
import { Button } from "../ui/button";
import Accordion from "../ui/accordion";


export function MasterCard() {

    const locale = useLocale();
    const t = useTranslations("Masterclass");
    const list = (locale === "it" ? MasterclassIT : MasterclassEN);
    const openMasterclasses = list.filter(item => item.open === true);
    const closedMasterclasses = list.filter(item => item.open !== true);

    return (
        <div className="w-screen h-fit p-8 flex flex-col justify-center items-center">

            <Title title={t("title")} description={t("description")} />

            {openMasterclasses.map((item, indx) =>
                <div key={indx} className="w-[75%] max-sm:w-[95%] mt-10 mb-10 flex max-sm:flex-col justify-center items-center">

                    <div className="w-[50%] flex justify-center max-sm:w-full">
                        <div className="w-[450px] max-sm:w-full h-[400px] max-sm:h-[200px] rounded-xl overflow-hidden shadow-2xl">
                            <Image src={item.image} alt="Masterclass preview" className="h-full" style={{ objectFit: "cover", objectPosition: "center" }} />
                        </div>

                    </div>

                    <div className="w-[50%] max-sm:w-full p-4 max-sm:text-center">
                        <h2 className="text-[#93A996] text-2xl">{item.name}</h2>
                        <h3>{item.featuring}</h3>
                        <p className="pt-3">{item.description}</p>
                        <p className="pt-5">{item.date} <br /> {item.location}</p>

                        {item.limited && (
                            <p className="pb-5">{item.participants}</p>
                        )}

                        <a href={`/${locale}/p/contacts`}>
                            <Button>
                                {t("open")}
                            </Button>
                        </a>


                    </div>

                </div>)}


            {closedMasterclasses.map((item, indx) =>
                <Accordion key={indx} title={item.name} content={item.description} image={item.image} featuring={item.featuring} date={item.date} />
            )}

        </div>
    )
}