
import Image from "next/image";
import contactsImg from "../../src/app/[locale]/assets/images/contactsBanner.webp";


export function ContactMap() {

    return (
        <div className="w-screen min-h-[500px] flex justify-center items-center relative">

            <div className="shadow-2xl h-96 w-96 max-sm:h-72 absolute min-md:top-[50%] min-md:translate-y-[-50%] md:left-0 rounded-xl overflow-hidden z-10 max-sm:left-[50%] max-sm:translate-x-[-50%] max-sm:translate-y-[-40%]">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3138.2063310116087!2d13.3343486!3d38.135394999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1319ef366725ff8b%3A0x425489195036b22b!2sMua%20Lab!5e0!3m2!1sit!2sit!4v1727444480453!5m2!1sit!2sit"
                    allowFullScreen
                    className="h-full w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade" />
            </div>

            <div className="flex w-full h-full p-0 g-0 max-sm:flex-col max-sm:h-[500px] overflow-hidden">
                <div className="w-[50%] h-full max-sm:h-[50%] max-sm:w-[100%]"></div>
                <Image src={contactsImg}
                    className="w-[50%] h-full max-sm:h-[50%] max-sm:w-[100%] shadow-2xl"
                    alt={"Contacts background image"} quality={1} style={{ objectFit: "cover", objectPosition: "center" }}  />
            </div>

        </div>
    );
}
