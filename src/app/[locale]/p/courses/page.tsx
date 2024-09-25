
import { Course } from "@/components/elements/Course";
import { CoursesEN, CoursesIT } from "../../utils/coursesList";
import { useLocale } from "next-intl";

export default function Courses() {

  const locale = useLocale();
  const list = (locale === "it" ? CoursesIT : CoursesEN);

  return (

    <div className="text-black">

      {list.map((course, index) =>
          <section key={index} id={course.id}>
            <Course course={course} />
          </section>
      )}

    </div>
  );
}
