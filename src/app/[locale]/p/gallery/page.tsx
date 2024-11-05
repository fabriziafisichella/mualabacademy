
import { FootBar } from "@/components/elements/FootBar";
import { GalleryComponent } from "@/components/elements/Gallery";
import { useTranslations } from "next-intl";


export default function Gallery() {
  const t = useTranslations("Gallery");
  return (
    <div className="h-screen w-screen">

      <GalleryComponent title={t("title")} description={t("description")} />
      
      <FootBar />

    </div>
  );
}
