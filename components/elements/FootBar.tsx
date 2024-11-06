import Image from "next/image";
import logo from "../../src/app/[locale]/assets/images/logo.png";
import { useTranslations } from "next-intl";
import { NavBarEN, NavBarIT } from "@/src/app/[locale]/utils/navbarList";
import { useLocale } from "next-intl";
import { socialsList } from "@/src/app/[locale]/utils/socialsList";
import { IconType } from "react-icons";
import React from 'react';

export function FootBar() {

    const locale = useLocale();
    const t = useTranslations("Footer");
    const list = (locale === "it" ? NavBarIT : NavBarEN);

    return (
        <footer className='w-full flex flex-col justify-center items-center bottom-0 bg-[#BCD0BF] text-[#757575] p-10 max-sm:px-1 gap-10 tracking-wide'>

            <div className="flex w-full justify-evenly max-sm:flex-col items-center max-sm:gap-10">
                <div className="max-sm:text-[15px] w-[30%] max-sm:w-[100%] flex justify-center">
                    <Image src={logo} alt={"logo"} priority={true} className="w-[50%]" />
                </div>

                <div className="max-sm:text-[15px] w-[30%] max-sm:w-[75%] max-sm:text-center">
                    {t("vat")} ( 012219391203819203 ) <br />
                    {t("office")} - Via Giovanni Paisiello, 21
                    90145 Palermo PA <br />

                    <div className="flex mt-4 max-sm:justify-center w-full gap-2 text-[#7e9181]">
                        {socialsList.map((social, idx) => (
                            <a key={idx} href={social.href} className="p-2 bg-[#93A996] rounded-xl hover:opacity-50 transition-all">
                                {React.createElement(social.icon as IconType, { className: "h-6 w-6 fill-white transition-all" })}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="max-sm:text-[15px] w-[30%] max-sm:w-[75%] flex flex-col items-center">
                    <p className="font-semibold max-sm:text-center">{t("links")} </p>
                    <p className="flex gap-2 max-sm:text-[15px] flex-wrap w-[200px] max-sm:w-[180px] justify-between">
                        {list.map((link, index) => <a id="index" key={index} href={`/${locale}${link.href}`}>{link.name}</a>)}
                    </p>
                </div>
            </div>


            <div className="w-full text-center max-sm:text-[15px] px-10">
                <hr />
                Copyright © 2024 MUALAB | {t("rights")} | <u>{t("terms")}</u> | <u>Privacy Policy</u>
            </div>


        </footer>
    )
}