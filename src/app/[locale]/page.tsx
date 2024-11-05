import { FootBar } from "@/components/elements/FootBar";
import Hero from "@/components/elements/Hero";
import { Reviews } from "@/components/elements/Reviews";
import { TextFade } from "@/components/ui/texteffects/fade";

export default function Home() {
  return (
    <>
      <div className="w-screen h-screen">

        <div className="w-full h-[75%] flex items-center justify-center">
          Work in progress.
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