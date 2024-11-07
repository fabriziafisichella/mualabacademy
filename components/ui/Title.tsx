
interface TitleProps {
    title: string,
    description?: string,
    altClass?: string,
}

export function Title({ title, description, altClass }: TitleProps) {
    return (
        <div className={`flex flex-col gap-2 justify-center ${altClass ? altClass : 'text-center mx-12 text-[#93A996]'}`}>
            <h2>
                {title}
            </h2>
            <p>
                {description}
            </p>
        </div>
    )
}