import { Button } from "../ui/button"
import { TextFade } from "../ui/texteffects/fade"
import { Title } from "../ui/Title"
import { useTranslations } from "next-intl"

interface CourseProps {
    course: {
        name: string,
        image: string,
        hours: string,
        starting: string,
        modules: string,
        description: string,
        open: boolean,
        direction: string,
        id: string,
    }
}

export function Course({ course }: CourseProps) {

    const t = useTranslations("Courses");

    return (


        <TextFade direction="up">

            <div className={`${course.direction === "left" ? "flex-row" : "flex-row-reverse"} relative w-screen h-[calc(100dvh-120px)] flex justify-between items-center max-sm:flex-col max-sm:justify-start`}>

                <div className="h-[60%] w-[75%] max-sm:w-full max-sm:h-[50%] drop-shadow-2xl bg-white">
                    <img src={course.image} alt="background" className="object-cover h-full w-full" />
                </div>


                <div className={`${course.direction === "left" ? "right-56 max-sm:right-0" : "left-56 max-sm:left-0"} flex flex-col max-sm:leading-tight absolute w-[25%] max-sm:w-[75%] max-sm:left-[50%] max-sm:transform max-sm:-translate-x-[50%] max-sm:top-[50%] max-sm:-translate-y-[50%] drop-shadow-2xl py-8 bg-white overflow:visible`}>
                    <h2>{course.hours}</h2>
                    <Title title={course.name} description={course.description} />

                    <div className="px-4 text-center">
                        <h3 className="text-center text-[#7e9181] py-4">
                            {course.modules}
                        </h3>

                        {course.open ? <Button className="uppercase">{t("open")}</Button> : <h2>{t("closed")} <br /> {course.starting}</h2>}
                    </div>
                </div>

            </div>

        </TextFade>


        /* 
                        <p>{course.modules}</p>
                        <hr />
                        <p>{course.starting}</p>
                        <p>button open</p>
                    </div> 
        
                    <div>
        
                    </div>
        
                </div > */
    )
}