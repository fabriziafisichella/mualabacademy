
import { GalleryComponent } from "@/components/elements/Gallery";
import { useTranslations } from "next-intl";


export default function Gallery() {
  const t = useTranslations("Gallery");
  return (
    <div className="text-black">
      <section>

        <GalleryComponent title={t("title")} description={t("description")} />

      </section>
    </div>
  );
}
