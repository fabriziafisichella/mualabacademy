import { FootBar } from "@/components/elements/FootBar";
import { HomeCourses } from "@/components/elements/HomeCourses";
import { HomeSchool } from "@/components/elements/HomeSchool";

export default function Home() {


  return (
    <>
      <div className="w-screen">

        <HomeSchool />

        <HomeCourses />

        <hr />

        <div className="w-full p-10 flex items-center justify-center">
          Teachers intro
        </div>

        <hr />

        <div className="w-full p-10 flex items-center justify-center">
          Mission
        </div>

        <hr />

        <div className="w-full p-10 flex items-center justify-center">
          Collaborations intro
        </div>

        <hr />

        <div className="w-full p-10 flex items-center justify-center">
          Reviews
        </div>

        <hr />

        <div className="w-full p-10 flex items-center justify-center">
          Gallery intro
        </div>


        {/* <TextFade direction="down">
          <Hero />
        </TextFade>

        <Reviews /> */}

        <FootBar />
      </div>

    </>
  );
}