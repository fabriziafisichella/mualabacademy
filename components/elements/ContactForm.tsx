
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";


export function ContactForm() {

    const t = useTranslations("ContactForm");

    return (
        <div className="h-[calc(100dvh-120px) w-screen flex justify-center items-center p-4">


            <div className="border w-full px-8 py-8 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl dark:bg-gray-900 lg:max-w-xl shadow-gray-300/50 dark:shadow-black/50">
                <form className="">

                    <h1 className="text-center">
                        {t("title")}
                    </h1>

                    <div className="flex-1">

                        <label> {t("name")} </label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            className="block w-full px-5 py-3 mt-2 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:border-gray-700 focus:outline-none"
                        />
                    </div>

                    <div className="flex-1 mt-6">
                        <label> {t("email")} </label>
                        <input
                            type="email"
                            placeholder="johndoe@example.com"
                            className="block w-full px-5 py-3 mt-2 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:border-gray-700 focus:outline-none"
                        />
                    </div>

                    <div className="w-full mt-6">
                        <label> {t("message")} </label>
                        <textarea
                            className="block w-full h-32 px-5 py-3 mt-2 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:border-gray-700 focus:outline-none"
                            placeholder={t("messageForm")}
                        ></textarea>
                    </div>

                    <Button className="w-full mt-6 -ml-0.5 uppercase" >
                        {t("button")}
                    </Button>

                </form>
            </div>
        </div>
    );
}
