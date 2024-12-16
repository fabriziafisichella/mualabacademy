import { IconType } from "react-icons";

interface GreenBoxProps {
    title1: string;
    desc1: string;
    icon1: IconType;
    title2: string;
    desc2: string;
    icon2: IconType;
    title3: string;
    desc3: string;
    icon3: IconType;
}

export function GreenBox({ title1, desc1, icon1: Icon1, title2, desc2, icon2: Icon2, title3, desc3, icon3: Icon3 }: GreenBoxProps) {
    return (
        <div className="mt-6 rounded-[5px] bg-[#BCD0BF] shadow-xl flex p-8 justify-between max-sm:flex-col max-sm:p-6 max-sm:gap-8">

            <div className="sm:w-[30%] flex justify-center gap-5 max-sm:items-center">
                <div>
                    <Icon1 size={30} className="text-[#3F3F3F]" />
                </div>
                <div>
                    <p>
                        <strong>{title1}</strong>
                    </p>
                    <p>
                        {desc1}
                    </p>
                </div>
            </div>

            <div className="sm:w-[30%] flex justify-center gap-5 max-sm:items-center">
                <div>
                    <Icon2 size={30} className="text-[#3F3F3F]" />
                </div>
                <div>
                    <p>
                        <strong>{title2}</strong>
                    </p>
                    <p>
                        {desc2}
                    </p>
                </div>
            </div>

            <div className="sm:w-[30%] flex justify-center gap-5 max-sm:items-center">
                <div>
                    <Icon3 size={30} className="text-[#3F3F3F]" />
                </div>
                <div>
                    <p>
                        <strong>{title3}</strong>
                    </p>
                    <p>
                        {desc3}
                    </p>
                </div>
            </div>
        </div>
    )
}