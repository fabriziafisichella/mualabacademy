import { FootBar } from "@/components/elements/FootBar";
import { School } from "@/components/elements/School";
import { TextFade } from "@/components/ui/texteffects/fade";
import Image from "next/image";
import schoolBanner from "../../assets/images/schoolBanner.webp";
import { Teachers } from "@/components/elements/Teachers";


export default function About() {
  return (
    <div className="w-screen">

      <TextFade direction="down">
        <School />
      </TextFade>

      <div className="w-full shadow-2xl mt-8" style={{ height: "200px" }}>
        <div className="relative w-full h-full overflow-hidden">
          <Image
            src={schoolBanner.src}
            alt="Courses breakpoint"
            fill
            quality={100}
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
      </div>

      <TextFade direction="down">
        <Teachers />
      </TextFade>

      <hr />

      <div className="w-full p-10 flex items-center justify-center">
        Students list
      </div>

      {/* <div id="team">
        <Teachers />
      </div> */}

      <FootBar />

    </div>
  );
}
