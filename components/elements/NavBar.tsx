"use client";
import { useEffect } from "react";
import logo from "../../src/app/[locale]/assets/images/logo.png";
import { useLocale } from "next-intl";
import { NavBarEN, NavBarIT } from "../../src/app/[locale]/utils/navbarList";
import { useRouter, usePathname } from "next/navigation"
import Image from "next/image";
import Link from "next/link";

export function NavBar() {

    const locale = useLocale();
    const list = (locale === "it" ? NavBarIT : NavBarEN);

    const router = useRouter();
    const pathname = usePathname();

    const changeLanguage = (newLocale: string) => {
        const newPathname = `/${newLocale}${pathname.substring(3)}`;
        router.push(newPathname, { scroll: false });
    };

    useEffect(() => {
        const toggleOpen = document.getElementById('toggleOpen') as HTMLButtonElement | null;
        const toggleClose = document.getElementById('toggleClose') as HTMLButtonElement | null;
        const collapseMenu = document.getElementById('collapseMenu') as HTMLDivElement | null;

        function handleClick() {
            if (collapseMenu) {
                if (collapseMenu.style.display === 'block') {
                    collapseMenu.style.display = 'none';
                } else {
                    collapseMenu.style.display = 'block';
                }
            }
        }

        function handleLinkClick() {
            if (collapseMenu) {
                collapseMenu.style.display = 'none';
            }
        }

        if (toggleOpen && toggleClose) {
            toggleOpen.addEventListener('click', handleClick);
            toggleClose.addEventListener('click', handleClick);
        }

        const links = document.querySelectorAll('#collapseMenu a') as NodeListOf<HTMLAnchorElement>;
        links.forEach((link) => {
            link.addEventListener('click', handleLinkClick);
        });

        return () => {
            if (toggleOpen && toggleClose) {
                toggleOpen.removeEventListener('click', handleClick);
                toggleClose.removeEventListener('click', handleClick);
            }
        };
    }, []);

    return (
        <header className='w-full fixed flex top-0 border-b border-1 font-sans min-h-[70px] tracking-wide bg-white z-50'>
            <div className='w-full flex flex-wrap items-center justify-between gap-6 px-10 py-3 relative'>
                <Image src={logo} fill={false} priority={true} className="w-64 h-auto" alt={"Logo del sito"} />

                {/* BUTTON SWAP FOR SIDE MENU */}
                <div id="collapseMenu"
                    className='max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-40 max-lg:before:inset-0 max-lg:before:z-50'>
                    <button id="toggleClose" className='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-red-500" viewBox="0 0 320.591 320.591">
                            <path
                                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                                data-original="#000000"></path>
                            <path
                                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                                data-original="#000000"></path>
                        </svg>
                    </button>


                    <ul
                        className='lg:flex lg:ml-10 lg:gap-x-10 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-2/3 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
                        <li className='max-lg:border-b max-lg:pb-4 px-3 lg:hidden'>
                            <Image src={logo} fill={false} priority={true} height={50} width={200} alt={"Logo del sito"} />
                        </li>

                        {list.map((item, index) => (
                            <li key={index} className='max-lg:border-b max-lg:px-3 max-lg:py-2 text-zinc-500 hover:text-[#93a996] text-xl relative group text-[14px]'>
                                {item.dropdown ? (
                                    <span className="text-gray-500 cursor-pointer font-semibold">{item.name}</span>
                                ) : (
                                    <Link
                                        href={item.href === "/" ? "/" : `/${locale}${item.href}`}
                                        className="font-semibold"
                                        id="toggleClose"
                                    >
                                        {item.name}
                                    </Link>
                                )}

                                {item.dropdown &&
                                    <>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" className="ml-1 inline-block -mt-1"
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                                                data-name="16" data-original="#000000" />
                                        </svg>
                                        <div
                                            className='absolute lg:top-6 max-lg:top-8 -left-6 z-50 flex shadow-lg bg-white max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-8 group-hover:pb-8 group-hover:pt-6 transition-all duration-500'>
                                            <div className="lg:min-w-[180px] max-lg:min-w-[140px]">
                                                <ul className='mt-3 pt-3 border-t border-1 space-y-3'>
                                                    {item.multiplecolumns ?
                                                        ((item.columns || []).map((col, index) => (
                                                            <li key={index} className='max-lg:border-b py-1 rounded'>
                                                                <h6 className="text-lg text-[#93a996] font-bold">
                                                                    {col.name}
                                                                </h6>
                                                                {(col.subcat || []).map((subcat, index) => (
                                                                    <Link key={index} href={
                                                                        subcat.href.startsWith(`/${locale}`)
                                                                            ? subcat.href
                                                                            : subcat.href === "/"
                                                                                ? "/"
                                                                                : `/${locale}${subcat.href}`
                                                                    }
                                                                        className='hover:text-[#93a996] text-zinc-500 text-lg block'>
                                                                        {subcat.name}
                                                                    </Link>
                                                                ))}

                                                            </li>
                                                        )))
                                                        :
                                                        ((item.subcat || []).map((cat, index) => (
                                                            <li key={index} className='max-lg:border-b py-1 rounded'>
                                                                <Link href={
                                                                    cat.href.startsWith(`/${locale}`)
                                                                        ? cat.href
                                                                        : cat.href === "/"
                                                                            ? "/"
                                                                            : `/${locale}${cat.href}`
                                                                }
                                                                    className='hover:text-[#93a996] text-zinc-500 text-lg block'>
                                                                    {cat.name}
                                                                </Link>
                                                            </li>
                                                        )))
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    </>
                                }

                            </li>))}

                        <li>
                            <div className="text-black cursor-pointer pointer-events-auto"
                                onClick={(e) => {
                                    e.preventDefault();
                                    changeLanguage(locale === "it" ? "en" : "it");
                                }}>
                                [ {locale === "it" ? "Italiano" : "English"} ]
                            </div>
                        </li>
                    </ul>
                </div>

                <div className='flex items-center ml-auto lg:hidden'>
                    <button id="toggleOpen">
                        <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"></path>
                        </svg>
                    </button>
                </div>


            </div>
        </header>
    )
}