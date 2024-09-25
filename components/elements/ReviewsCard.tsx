

interface CardProps {
    details: {
        name: string,
        image: string,
        role: string,
        review: string,
    }
}

export function ReviewCard({ details }: CardProps) {

    return (
        <li className="w-96 h-64 rounded-md p-5 shadow-xl -ml-32 max-sm:scale-[60%] sm:ml-5">

            <div className="flex justify-start items-center gap-3 p-5">
                <img className="h-[5rem] w-[5rem] rounded-full object-cover" src={details.image} alt={details.name} />

                <div className="flex flex-col">
                    <h2 className="text-left">{details.name}</h2>
                    <p id="cardSubtitle" className="text-left">{details.role}</p>
                </div>
            </div>

            <p className="px-5 text-black">{details.review}</p>
        </li>
    )
}