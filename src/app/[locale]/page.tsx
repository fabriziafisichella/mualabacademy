import Hero from "@/components/elements/Hero";
import { Reviews } from "@/components/elements/Reviews";
import { TextFade } from "@/components/ui/texteffects/fade";

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <section>
        <TextFade direction="down">
          <Hero />
        </TextFade>
      </section>

      <section>
        <Reviews />
      </section>
    </div>
  );
}