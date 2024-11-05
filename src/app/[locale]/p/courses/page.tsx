
/* import { CoursesEN, CoursesIT } from "../../utils/coursesList";
import { useLocale } from "next-intl"; */
import { FootBar } from "@/components/elements/FootBar";

export default function Courses() {

/*   const locale = useLocale();
  const list = (locale === "it" ? CoursesIT : CoursesEN); */

  return (

    <div className="h-screen w-screen">

      <div className="w-full h-[75%] flex items-center justify-center">
        Work in progress.
      </div>

      {/* {list.map((course, index) =>
          <div key={index} id={course.id}>
            <Course course={course} />
          </div>
      )} */}

      <FootBar />

    </div>
  );
}
