import { useTranslations } from "next-intl";
import React from 'react';
import { Title } from "../ui/Title";
import { Button } from "../ui/button";
import { socialsList } from "@/src/app/[locale]/utils/socialsList";
import { IconType } from "react-icons";


export default function ContactInfo() {

    const t = useTranslations("Contacts");

    return (
        <div className="w-screen flex flex-col justify-center items-center">

            <div className="w-[60%] max-sm:w-[90%] pt-12 pb-12">

                <Title title={t("title")} altClass={" text-left max-sm:text-center "} />

                <p className="max-sm:text-center">Via Giovanni Paisiello, 21 90145 Palermo PA <br />
                    ( +39 ) 088 389 3997</p>

                <div className="flex mt-4 max-sm:justify-center w-full gap-2 text-[#7e9181] mb-6">

                    {socialsList.map((social, idx) => (
                        <a key={idx} href={social.href} className="p-2 bg-[#93A996] rounded-xl hover:opacity-50 transition-all">
                            {React.createElement(social.icon as IconType, { className: "h-4 w-4 fill-white transition-all" })}
                        </a>
                    ))}

                </div>

                <form className="">

                    <div className="flex-1">
                        <input
                            type="text"
                            placeholder="John Doe"
                            className="block w-full px-5 py-3 mt-2 bg-white border border-[#757575] rounded-xl dark:bg-gray-900 dark:border-gray-700 focus:outline-none"
                        />
                    </div>

                    <div className="flex-1 mt-6">
                        <input
                            type="email"
                            placeholder="johndoe@example.com"
                            className="block w-full px-5 py-3 mt-2 bg-white border border-[#757575] rounded-xl dark:bg-gray-900 dark:border-gray-700 focus:outline-none"
                        />
                    </div>

                    <div className="w-full mt-6">
                        <textarea
                            className="block w-full h-32 px-5 py-3 mt-2 bg-white border border-[#757575] rounded-xl dark:bg-gray-900 dark:border-gray-700 focus:outline-none"
                            placeholder={t("messageForm")}
                        ></textarea>
                    </div>

                    <Button >
                        {t("button")}
                    </Button>

                </form>

            </div>

        </div>
    );
};