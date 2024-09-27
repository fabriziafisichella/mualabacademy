import { useTranslations } from "next-intl";
import { Title } from "../ui/Title"
import { FaLocationDot, FaPhone, FaInstagram, FaTwitter, FaFacebook, FaLinkedin, FaYoutube, FaTiktok } from "react-icons/fa6";
import { SiMaildotru } from "react-icons/si";


export default function ContactInfo() {

    const t = useTranslations("ContactInfo");

    return (
        <div className="h-[calc(100dvh-120px) w-screen flex justify-center items-center p-4">

            <div className="max-sm:w-[80%] w-[60%]">

                <Title title={t("title")} />

                <div className="space-y-4">
                    <p className="flex -mx-2  items-center">
                        <span className=" text-[#7e9181] w-7 dark:text-gray-400">
                            <FaLocationDot className="h-7" />
                        </span>
                        <span className="text-gray-700 dark:text-gray-400">
                            Via Giovanni Paisiello, 21
                            90145 Palermo PA
                        </span>
                    </p>
                    <p className="flex -mx-2  items-center">
                        <span className=" text-[#7e9181] w-7 dark:text-gray-400">
                            <FaPhone className="h-7" />
                        </span>
                        <span className="text-gray-700 dark:text-gray-400">
                            +39 000 000 000 <br />
                            257 563-7401
                        </span>
                    </p>
                    <p className="flex -mx-2  items-center">
                        <span className=" text-[#7e9181] w-7 dark:text-gray-400">
                            <SiMaildotru className="h-7" />
                        </span>
                        <span className="text-gray-700 dark:text-gray-400">
                            acb@example.com
                        </span>
                    </p>
                </div>
                <div className="mt-6 w-full">
                    <h3 className="text-gray-600 dark:text-gray-300"> {t("follow")} </h3>
                    <div className="flex mt-4 -mx-1.5 justify-center w-full gap-2 text-[#7e9181]">
                        <a href={""} target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="h-8 w-8 hover:text-black transition-all" />
                        </a>
                        <a href={""} target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="h-8 w-8 hover:text-black transition-all" />
                        </a>
                        <a href={""} target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="h-8 w-8 hover:text-black transition-all" />
                        </a>
                        <a href={""} target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="h-8 w-8 hover:text-black transition-all" />
                        </a>
                        <a href={""} target="_blank" rel="noopener noreferrer">
                            <FaYoutube className="h-8 w-8 hover:text-black transition-all" />
                        </a>
                        <a href={""} target="_blank" rel="noopener noreferrer">
                            <FaTiktok className="h-8 w-8 hover:text-black transition-all" />
                        </a>
                    </div>
                </div>

                <div className="mt-6 w-full md:mt-8">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3138.2063310116087!2d13.3343486!3d38.135394999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1319ef366725ff8b%3A0x425489195036b22b!2sMua%20Lab!5e0!3m2!1sit!2sit!4v1727444480453!5m2!1sit!2sit"
                        className="border w-full h-full"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade" />
                </div>
            </div>
        </div>
    );
};