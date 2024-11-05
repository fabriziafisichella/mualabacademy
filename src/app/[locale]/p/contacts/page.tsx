

import { ContactForm } from "@/components/elements/ContactForm";
import ContactInfo from "@/components/elements/ContactInfo";
import { FootBar } from "@/components/elements/FootBar";
import { TextFade } from "@/components/ui/texteffects/fade";

export default function Contacts() {
  return (
    <div className="h-screen w-screen">

      <div className="w-full h-[75%] flex items-center justify-center">
        Work in progress.
      </div>

      {/* <TextFade direction="up">
      <div id="mobileFix">

          <ContactInfo />

          <ContactForm />

      </div>

      <div id="desktopFix">

          <ContactInfo />
          <ContactForm />

      </div>
      </TextFade> */}

      <FootBar />

    </div>
  );
}
