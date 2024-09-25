import Image from "next/image";
import reviews from "../../src/app/[locale]/assets/images/reviews.jpg"
import { useLocale } from "next-intl";
import { reviewsEN, reviewsIT } from "@/src/app/[locale]/utils/reviewsList";
import { ReviewCard } from "./ReviewsCard";
import { useTranslations } from "next-intl";
import Marquee from "react-fast-marquee";
import { Title } from "../ui/Title";

export function Reviews() {

    const t = useTranslations("Hero");
    const locale = useLocale();
    const list = (locale === "it" ? reviewsIT : reviewsEN);

    return (
        <div className="h-full w-full relative flex flex-col justify-between">

            <div className="flex flex-col justify-center items-center h-[66%] ">
                 <Title title={t("reviews")} description={t("description")} />

                <ul className="flex w-4/5 h-80  max-sm:h-44 max-sm:w-96">
                    <Marquee pauseOnHover autoFill gradient gradientColor={"#fff"} className="overflow-hidden" >
                        {[...list].map((review, index) => (
                            <ReviewCard key={index}
                                details={review} />))}
                    </Marquee>
                </ul>

            </div>

                <div className="w-full relative h-[35%]">
                    <Image src={reviews} alt="reviews image" style={{ objectFit: 'cover' }} fill />
                </div>

        </div>
    );
}