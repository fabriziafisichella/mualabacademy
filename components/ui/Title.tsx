
interface TitleProps {
    title: string,
    description?: string,
}

export function Title({ title, description }: TitleProps) {
    return (
        <div className="flex flex-col gap-2 justify-center items-center text-center mx-12">
            <h2>
                {title}
            </h2>
            <p>
                {description}
            </p>
        </div>
    )
}