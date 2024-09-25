import { School } from "@/components/elements/School";
import { Teachers } from "@/components/elements/Teachers";
import { BlurIn } from "@/components/ui/texteffects/blurin";
import { TextFade } from "@/components/ui/texteffects/fade";


export default function About() {
  return (
    <div className="text-black">

      <section id="school">
        <TextFade direction="down">
          <School />
        </TextFade>
      </section>

      <section id="team">
          <Teachers />
      </section>

    </div>
  );
}
