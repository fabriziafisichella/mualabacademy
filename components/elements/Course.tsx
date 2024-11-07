import Image from "next/image"
import { Button } from "../ui/button"
import { TextFade } from "../ui/texteffects/fade"
import { Title } from "../ui/Title"
import { useTranslations } from "next-intl"
import { useLocale } from "next-intl"
import { MdOutlineVerified } from "react-icons/md";


interface CourseProps {
    course: {
        name: string,
        image: string,
        duration: string,
        starting: string,
        modules: Array<string>,
        description: string,
        open: boolean,
        direction: string,
    }
}

export function Course({ course }: CourseProps) {

    const t = useTranslations("Courses");
    const locale = useLocale();

    return (


        <TextFade direction="up">

            <div className={`${course.direction === "left" ? "flex-row-reverse " : "flex-row bg-[#BCD0BF]"} gap-5 relative w-screen h-fit flex justify-evenly items-center max-sm:flex-col p-24 max-sm:p-8 max-sm:pt-12 max-sm:pb-16`}>

                <div className="w-full flex justify-center items-center ">
                    <div className="w-[75%] max-sm:w-full">
                        <Title title={course.name} altClass={`max-sm:text-center leading-9 ${course.direction === "left" ? "text-[#BCD0BF]" : "text-white"}`} />

                        <h3 className="text-[#757575] max-sm:text-center">{course.duration}</h3>

                        <p className="max-sm:text-center">
                            {course.description}

                        </p>

                        <h3 className="text-[#757575] max-sm:text-center">{t("starting")} {course.starting}</h3>

                        <ul className="flex gap-5 w-full justify-evenly flex-wrap max-sm:justify-center mt-6 mb-2">
                            {course.modules.map((module, idx) =>
                                <li key={idx} className="flex items-center gap-1 font-semibold leading-[8px]">
                                    <MdOutlineVerified /> {module}
                                </li>)}
                        </ul>

                        {course.open
                            ? <a href={`/${locale}/p/contacts`}>
                                <Button variant="secondary" className="">
                                    {t("open")}
                                </Button>
                            </a>
                            : <h3 className="text-center mt-6">{t("closed")}  {course.starting}</h3>
                        }

                    </div>
                </div>

                <div className=" w-full flex justify-center items-center">
                    <div className="h-[350px] w-[500px] max-sm:h-[150px] max-sm:w-[100%] relative overflow-hidden rounded-xl drop-shadow-2xl">
                        <Image src={course.image} alt="Course Image" fill={true} style={{ objectFit: "cover" }} />
                    </div>

                </div>


            </div>

        </TextFade>
    )
}