
import { CoursesEN, CoursesIT } from "../../utils/coursesList";
import { useLocale } from "next-intl";
import { FootBar } from "@/components/elements/FootBar";
import { Course } from "@/components/elements/Course";
import Image from "next/image";
import courseImg from "../../assets/images/coursesBanner.webp";
import { MasterCard } from "@/components/elements/MasterCard";

export default function Courses() {

  const locale = useLocale();
  const list = (locale === "it" ? CoursesIT : CoursesEN);

  return (

    <div className="w-screen">

      {list.map((course, index) =>
        <div key={index}>
          <Course course={course} />
        </div>
      )}

      <div className="w-full shadow-2xl" style={{ height: "200px" }}>
        <div className="relative w-full h-full overflow-hidden">
          <Image
            src={courseImg}
            alt="Courses breakpoint"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
      </div>

      
      <div className="w-full p-10 flex items-center justify-center">
        <MasterCard />
      </div>

      {/* <div className="w-full p-10 flex items-center justify-center">
        Events list
      </div> */}



      <FootBar />

    </div>
  );
}
