import { FootBar } from "@/components/elements/FootBar";
import { School } from "@/components/elements/School";
import { Teachers } from "@/components/elements/Teachers";
import { TextFade } from "@/components/ui/texteffects/fade";


export default function About() {
  return (
    <div className="h-screen w-screen">

      <div className="w-full h-[75%] flex items-center justify-center">
        Work in progress.
      </div>

      {/* <div id="school">
        <TextFade direction="down">
          <School />
        </TextFade>
      </div>

      <div id="team">
        <Teachers />
      </div> */}

      <FootBar />

    </div>
  );
}
