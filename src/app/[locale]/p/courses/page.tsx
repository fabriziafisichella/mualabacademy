"use client";

import { useEffect } from "react";
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

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (typeof window !== "undefined" && window.location.hash) {
        const element = document.getElementById(window.location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="w-screen" id="courses">

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

      <div className="w-full p-10 flex items-center justify-center" id="masterclass">
        <MasterCard />
      </div>

      <FootBar />
    </div>
  );
}