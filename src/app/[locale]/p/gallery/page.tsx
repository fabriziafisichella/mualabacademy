
import { FootBar } from "@/components/elements/FootBar";
import { GalleryComponent } from "@/components/elements/Gallery";
import { useTranslations } from "next-intl";


export default function Gallery() {
  const t = useTranslations("Gallery");
  return (
    <div className="h-screen w-screen">

      <div className="w-full h-[75%] flex items-center justify-center">
        Work in progress.
      </div>

      {/* <GalleryComponent title={t("title")} description={t("description")} /> */}

      <FootBar />

    </div>
  );
}
