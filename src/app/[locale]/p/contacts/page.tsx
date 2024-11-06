import { ContactMap } from "@/components/elements/ContactMap";
import ContactInfo from "@/components/elements/ContactInfo";
import { FootBar } from "@/components/elements/FootBar";
import { TextFade } from "@/components/ui/texteffects/fade";

export default function Contacts() {
  return (
    <div className="w-screen">

      <TextFade direction="up">
      <div id="mobileFix">

          <ContactInfo />

          <ContactMap />

      </div>

      <div id="desktopFix">

          <ContactInfo />
          <ContactMap />

      </div>
      </TextFade>

      <FootBar />

    </div>
  );
}
