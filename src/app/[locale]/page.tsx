import { FootBar } from "@/components/elements/FootBar";
import { HomeSchool } from "@/components/elements/HomeSchool";
import { Title } from "@/components/ui/Title";
import { useTranslations } from "next-intl";

export default function Home() {


  const t = useTranslations("Hero");

  return (
    <>
      <div className="w-screen">

        <HomeSchool />

        <hr />

        <div className="w-full p-10 flex items-center justify-center">
          Courses / masterclass / events intro
        </div>

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