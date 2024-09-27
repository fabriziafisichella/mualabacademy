

import { ContactForm } from "@/components/elements/ContactForm";
import ContactInfo from "@/components/elements/ContactInfo";
import { TextFade } from "@/components/ui/texteffects/fade";

export default function Contacts() {
  return (
    <>
      <TextFade direction="up">
      <div id="mobileFix">
        <section >
          <ContactInfo />
        </section>
        <section>
          <ContactForm />
        </section>
      </div>

      <div id="desktopFix">
        <section>
          <ContactInfo />
          <ContactForm />
        </section>
      </div>
      </TextFade>

    </>
  );
}
